import './index.less';
import fontMetrics from "./fontMetrics.json";
const fontName = "Vazir";

export default function PersianPlugin(katex, options) {
    let mainOptions = { fontName, fontMetrics };
    Object.assign(mainOptions, options);

    for (let fontName in mainOptions.fontMetrics) {
        let metrics = mainOptions.fontMetrics[fontName]
        katex.__setFontMetrics(fontName, metrics)
    }
    _addPersianSymbols(katex, mainOptions.fontName);
}

function _addPersianSymbols(katex, fontName) {
    // Here we use Vazir font as our defualt font for numbers and text
    // add all Persian & Arabic characters as textords in text mode
    for (let charCode = 0x0600; charCode <= 0x06FF; charCode++) {
        const ch = String.fromCharCode(charCode);
        katex.__defineSymbol("text", fontName, "textord", ch, ch);
    }
    // zero width non-joiner is frequently used in Persian text
    const ch = String.fromCharCode(0x200C);
    katex.__defineSymbol("text", fontName, "textord", ch, ch);

    // add all Persian & Arabic numbers as textords in math mode
    for (let number = 0; number <= 9; number++) {
        const persianNum = String.fromCharCode(0x0660 + number);
        katex.__defineSymbol(
            "math", fontName, "textord", persianNum, persianNum);
        const arabicNum = String.fromCharCode(0x06F0 + number);
        katex.__defineSymbol(
            "math", fontName, "textord", arabicNum, arabicNum);
    }
}
