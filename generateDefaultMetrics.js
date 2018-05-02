const generateMetrics = require("./utils/generateMetrics");
const path = require("path");

const metricOptions = [
    {
        fontname: 'Vazir-Regular',
        filepath: path.resolve("fonts/Vazir.ttf"),
    },
    {
        fontname: 'Vazir-Bold',
        filepath: path.resolve("fonts/Vazir-Bold.ttf"),
    },
];
const outputPath = path.resolve(__dirname, "src/fontMetrics.json");

generateMetrics(metricOptions, outputPath);
