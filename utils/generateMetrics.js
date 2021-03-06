const extractMetricsFromTTF = require("./extractMetricsFromTTF");
const fs = require("fs");

module.exports = function generateMetrics(metricOptions, outputPath) {
    const persianArabicUnicodeRange = [0x0600, 0x06FF];

    metricOptions = metricOptions.map((font) => {
        if (font.unicodeRange == null) {
            font.unicodeRange = persianArabicUnicodeRange;
        }
        font.singleCodes = [ 0x200C ] // zero width non joiner and other special characters

        return font;
    });

    const metricMap = extractMetricsFromTTF(metricOptions);

    fs.writeFileSync(
        outputPath,
        JSON.stringify(metricMap)
    );
}
