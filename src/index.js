import './index.less';
import fontMetrics from "./fontMetrics.json";
const fontName = "Vazir";

export default function PersianPlugin(katex, options) {
    let mainOptions = { fontName, fontMetrics };
    Object.assign(mainOptions, options);

    katex.__addFontMetrics(mainOptions.fontMetrics);
    _addPersianSymbols(katex, mainOptions.fontName);
}

function _addPersianSymbols(katex, fontName) {
    // Here we use Vazir font as our defualt font for numbers and text
    // add all persian & arabic characters as textords in text mode
    for (let charCode = 0x0600; charCode <= 0x06FF; charCode++) {
        const ch = String.fromCharCode(charCode);
        katex.__defineSymbol("text", fontName, "textord", ch, ch);
    }
    // add all persian & arabic numbers as textords in math mode
    for (let number = 0; number <= 9; number++) {
        const persianNum = String.fromCharCode(0x0660 + number);
        katex.__defineSymbol(
            "math", fontName, "textord", persianNum, persianNum);
        const arabicNum = String.fromCharCode(0x06F0 + number);
        katex.__defineSymbol(
            "math", fontName, "textord", arabicNum, arabicNum);
    }
}
