const extractMetricsFromTTF = require("./utils/extractMetricsFromTTF");
const path = require("path");
const fs = require("fs");

const persianArabicUnicodeRange = [0x0600, 0x06FF];
const metricMap = extractMetricsFromTTF([
    {
        fontname: 'Vazir-Regular',
        filepath: path.resolve("fonts/Vazir.ttf"),
        unicodeRange: persianArabicUnicodeRange,
    },
    {
        fontname: 'Vazir-Bold',
        filepath: path.resolve("fonts/Vazir-Bold.ttf"),
        unicodeRange: persianArabicUnicodeRange,
    },
]);

fs.writeFileSync(
  "src/fontMetrics.json",
  JSON.stringify(metricMap)
);
