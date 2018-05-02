import './index.less';
import fontMetrics from "./fontMetrics.json";

export default function PersianPlugin(katex, options) {
    katex.__addFontMetrics(fontMetrics);
    _addPersianSymbols(katex);
}

function _addPersianSymbols(katex) {
    // Here we use Vazir font as our defualt font for numbers and text
    // add all persian & arabic characters as textords in text mode
    for (let charCode = 0x0600; charCode <= 0x06FF; charCode++) {
        const ch = String.fromCharCode(charCode);
        katex.__defineSymbol("text", "Vazir", "textord", ch, ch);
    }
    // add all persian & arabic numbers as textords in math mode
    for (let number = 0; number <= 9; number++) {
        const persianNum = String.fromCharCode(0x0660 + number);
        katex.__defineSymbol(
            "math", "Vazir", "textord", persianNum, persianNum);
        const arabicNum = String.fromCharCode(0x06F0 + number);
        katex.__defineSymbol(
            "math", "Vazir", "textord", arabicNum, arabicNum);
    }
}
