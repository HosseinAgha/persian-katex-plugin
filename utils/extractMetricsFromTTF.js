const fontkit = require('fontkit');

function generateMetrics(fontInfo, unicodeRange) {
    const unitsPerEm = fontInfo.unitsPerEm;
    const glyphs = [];

    const [ firstCharCode, lastCharCode ] = unicodeRange;
    for (let i = firstCharCode; i <= lastCharCode; i++) {
        glyphs.push(fontInfo.glyphForCodePoint(i));
    }

    const metrics = {};
    for (let i = 0; i < glyphs.length; i++) {
        const cbox = glyphs[i].cbox;
        const height = cbox.maxY / unitsPerEm;
        let minY = 0;
        if (cbox.minY !== 0) {
            minY = -cbox.minY;
        }
        const depth = minY / unitsPerEm;
        const charCode = (0x0600 + i) + "";
        metrics[charCode] = [ depth, height, 0, 0 ];
        // const width = cbox.maxX - cbox.minX;
    }
    return metrics;
}

module.exports = function generateMetricsFromTTF(fonts) {
    const metricMap = {};
    for (const { fontname, filepath, unicodeRange } of fonts) {
        const fontInfo = fontkit.openSync(filepath);
        metricMap[fontname] = generateMetrics(fontInfo, unicodeRange);
    }
    return metricMap;
};
