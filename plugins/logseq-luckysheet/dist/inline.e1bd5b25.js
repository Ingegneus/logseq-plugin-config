import { d as decodeName, r as range, e as encodeName } from './utils-dc7dea2d.js';

const { name , uuid , frame  } = frameElement.dataset;
const displayName = decodeName(name);
const refUuid = (()=>{
    const blockParent = frameElement.closest(".block-content.inline").parentElement;
    if (blockParent.classList.contains("block-ref")) {
        return blockParent.closest(".block-content.inline").getAttribute("blockid");
    }
    return null;
})();
const pluginWindow = parent.document.getElementById(frame).contentWindow;
const { logseq , t  } = pluginWindow;
const storage = logseq.Assets.makeSandboxStorage();
const SAVE_DELAY = 30_000 // 30s
;
const TOOLBAR_HEIGHT = 48;
let saveTimer;
let workbookReady = false;
async function main() {
    const title = document.getElementById("title");
    title.innerText = displayName;
    title.title = displayName;
    title.addEventListener("keydown", (e)=>{
        if (e.key === "Enter") {
            e.preventDefault();
            title.blur();
        }
    });
    title.addEventListener("blur", (e)=>{
        renameWorkbook(title.innerText);
    });
    const copyBtn = document.getElementById("copyBtn");
    copyBtn.title = t("Copy selection as TSV");
    copyBtn.addEventListener("click", (e)=>{
        copyAsTSV();
    });
    const syncBtn = document.getElementById("syncBtn");
    syncBtn.title = t("Generate Markdown and override parent block");
    syncBtn.addEventListener("click", (e)=>{
        generateAndOverrideParent();
    });
    const resizeObserver = new ResizeObserver((entries)=>{
        for (const entry of entries){
            const rect = entry.target.getBoundingClientRect();
            frameElement.style.top = `${rect.top - TOOLBAR_HEIGHT}px`;
            frameElement.style.left = `${rect.left}px`;
            frameElement.style.width = `${rect.width}px`;
            frameElement.style.height = `${rect.height + TOOLBAR_HEIGHT}px`;
        }
    });
    const fullscreenBtn = document.getElementById("fullscreenBtn");
    fullscreenBtn.title = t("FullScreen Edit");
    fullscreenBtn.addEventListener("click", async (e)=>{
        const container = frameElement.closest("#main-content-container, .sidebar-item-list");
        frameElement.classList.toggle("kef-sheet-fullscreen");
        if (frameElement.classList.contains("kef-sheet-fullscreen")) {
            if (parent.document.documentElement.classList.contains("is-mac")) {
                document.documentElement.classList.add("fullscreen-mac");
            }
            resizeObserver.observe(container);
            document.querySelector(".luckysheet-cell-input.editable")?.focus();
        } else {
            resizeObserver.unobserve(container);
            frameElement.style.top = "";
            frameElement.style.left = "";
            frameElement.style.width = "";
            frameElement.style.height = "";
            document.documentElement.classList.remove("fullscreen-mac");
        }
    });
    const saveBtn = document.getElementById("saveBtn");
    saveBtn.title = t("Save");
    saveBtn.addEventListener("click", async (e)=>{
        await save();
        logseq.UI.showMsg(t('"${name}" saved.', {
            name: displayName
        }));
    });
    const editBtn = document.getElementById("editBtn");
    editBtn.title = t("Edit block");
    editBtn.addEventListener("click", (e)=>{
        logseq.Editor.editBlock(refUuid || uuid);
    });
    const deleteBtn = document.getElementById("deleteBtn");
    deleteBtn.title = t("Delete spreadsheet");
    deleteBtn.addEventListener("click", (e)=>{
        promptToDelete();
    });
    window.addEventListener("pagehide", (e)=>{
        if (workbookReady) {
            clearTimeout(saveTimer);
            save();
        }
        resizeObserver.disconnect();
    });
    try {
        const [justCreated, data] = await read();
        luckysheet.create({
            container: "sheet",
            lang: t("en"),
            plugins: [
                "chart"
            ],
            enableAddRow: true,
            enableAddBackTop: true,
            showinfobar: false,
            showtoolbarConfig: {
                print: false
            },
            row: 30,
            column: 20,
            gridKey: name,
            data,
            hook: {
                workbookCreateAfter () {
                    workbookReady = true;
                    // HACK workaround Luckysheet issue that on first focus it scrolls to
                    // the top of the page.
                    const editable = document.querySelector(".luckysheet-cell-input.editable");
                    editable.addEventListener("focus", (e)=>{
                        pluginWindow.justFocused = true;
                    });
                    luckysheet.scroll({
                        scrollTop: 0
                    });
                    if (justCreated) {
                        save();
                    }
                },
                updated (op) {
                    clearTimeout(saveTimer);
                    saveTimer = setTimeout(save, SAVE_DELAY);
                }
            }
        });
    } catch (err) {
        console.error(err);
        document.getElementById("sheet").innerHTML = `<p class="error">${t("Data read error!")}</p>`;
    }
}
async function read() {
    try {
        const data = await storage.getItem(name);
        if (data) {
            return [
                false,
                JSON.parse(data)
            ];
        }
    } catch (err) {
    // no file
    }
    const file = [
        {
            name: "Sheet1",
            color: "",
            status: "1",
            order: "0",
            data: [],
            config: {},
            index: 0
        }, 
    ];
    return [
        true,
        file
    ];
}
async function save(newName) {
    const sheets = luckysheet.getAllSheets();
    for (const sheet of sheets){
        // Do not save selections.
        sheet.luckysheet_selection_range = [];
        // Process charts
        if (sheet.chart) {
            for (const chart of sheet.chart){
                const div = document.getElementById(`${chart.chart_id}_c`);
                if (div.style) {
                    chart.left = parseInt(div.style.left);
                    chart.top = parseInt(div.style.top);
                    chart.width = parseInt(div.style.width);
                    chart.height = parseInt(div.style.height);
                }
                chart.chartOptions = {
                    ...chartmix.default.getChartJson(chart.chart_id)
                };
            }
        }
    }
    const data = JSON.stringify(sheets);
    await storage.setItem(newName ?? name, data);
}
async function copyAsTSV() {
    const data = luckysheet.getRangeArray("twoDimensional");
    const text = data.map((row)=>row.join("\t")).join("\n");
    await navigator.clipboard.writeText(text);
    logseq.UI.showMsg(t("Selection copied"));
}
async function generateAndOverrideParent() {
    const block = await logseq.Editor.getBlock(refUuid || uuid);
    if (block.parent != null && block.parent.id !== block.page.id) {
        const parent = await logseq.Editor.getBlock(block.parent.id);
        const markdown = generateMarkdown();
        await logseq.Editor.updateBlock(parent.uuid, markdown);
    } else {
        logseq.UI.showMsg(t("Luckysheet needs to have a parent block"));
    }
}
function generateMarkdown() {
    const data = luckysheet.getSheetData();
    const rowLength = data.length;
    const columnLength = data[0].length;
    let rowStart = Math.max(0, data.findIndex((row)=>row.some((cell)=>cell != null)));
    let colStart = Math.max(0, range(columnLength).findIndex((c)=>{
        for(let r = 0; r < rowLength; r++){
            if (data[r][c] != null) return true;
        }
        return false;
    }));
    let colEnd = 0;
    for(let i = colStart + 1; i < data[rowStart].length; i++){
        if (data[rowStart][i]?.m == null && data[rowStart][i]?.ct?.t !== "inlineStr") {
            colEnd = i;
            break;
        }
    }
    const rows = [];
    for(let i1 = rowStart; i1 < data.length; i1++){
        const row = new Array(colEnd - colStart);
        for(let j1 = colStart; j1 < colEnd; j1++){
            const cell = data[i1][j1];
            if (cell?.m != null || cell?.ct?.t === "inlineStr") {
                row[j1 - colStart] = cell?.m != null ? `${cell.bl ? "**" : ""}${cell.cl ? "~~" : ""}${cell.it ? "_" : ""}${cell.m}${cell.it ? "_" : ""}${cell.cl ? "~~" : ""}${cell.bl ? "**" : ""}` : cell?.ct.s.map(({ bl , it , cl , v  })=>{
                    const lines = v.split("\r\n");
                    return lines.map((line)=>`${bl ? "**" : ""}${cl ? "~~" : ""}${it ? "_" : ""}${line}${it ? "_" : ""}${cl ? "~~" : ""}${bl ? "**" : ""}`).join(" [:br]");
                }).join("").trim();
            }
        }
        if (row.every((cell)=>!cell)) break;
        rows.push(`| ${row.join(" | ")} |`);
        if (i1 === 0) {
            rows.push(`| ${row.map((_, j)=>{
                switch(data[i1][j]?.ht){
                    case "0":
                        return ":---:";
                    case "2":
                        return "---:";
                    default:
                        return "---";
                }
            }).join(" | ")} |`);
        }
    }
    return rows.join("\n");
}
async function renameWorkbook(newName) {
    newName = encodeName(newName);
    await save(newName);
    await storage.removeItem(name);
    workbookReady = false;
    const block = await logseq.Editor.getBlock(uuid);
    await logseq.Editor.updateBlock(uuid, block.content.replace(/{{renderer :luckysheet,[^}]+}}/i, `{{renderer :luckysheet, ${newName}}}`));
    await logseq.Editor.editBlock(uuid);
}
async function promptToDelete() {
    const ok = parent.window.confirm(t('You sure to delete "${name}"?', {
        name: displayName
    }));
    if (!ok) return;
    clearTimeout(saveTimer);
    workbookReady = false;
    await storage.removeItem(name);
    await logseq.Editor.removeBlock(uuid);
}
main();
