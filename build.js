const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "src", "app.js");
const distDir = path.join(__dirname, "dist");
const destination = path.join(distDir, "app.js");

fs.mkdirSync(distDir, { recursive: true });

fs.copyFileSync(source, destination);

fs.writeFileSync(
    path.join(distDir, "build-info.txt"),
    `Build completed: ${new Date().toISOString()}\n`
);

console.log("Build completed successfully.");
