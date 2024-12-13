function range(n) {
    const arr = new Array(n);
    for(let i = 0; i < n; i++){
        arr[i] = i;
    }
    return arr;
}
const ENCODE_CHARS = {
    "<": "@lt@",
    ">": "@gt@",
    ":": "@c@",
    '"': "@qt@",
    "/": "@s@",
    "\\": "@bs@",
    "|": "@b@",
    "?": "@q@",
    "*": "@a@",
    "}": "@rp@"
};
const DECODE_CHARS = Object.entries(ENCODE_CHARS).reduce((obj, [k, v])=>{
    obj[v] = k;
    return obj;
}, {});
function encodeName(name) {
    const encoded = name.replace(/[<>:"\/\\|?*}]/g, (c)=>ENCODE_CHARS[c]);
    return `${encoded}@${Date.now()}`;
}
function decodeName(name) {
    const encoded = name.replace(/@[0-9]+$/, "");
    const decoded = encoded.replace(/@(lt|gt|c|qt|s|bs|b|q|a|rp)@/g, (c)=>DECODE_CHARS[c]);
    return decoded;
}

export { decodeName as d, encodeName as e, range as r };
