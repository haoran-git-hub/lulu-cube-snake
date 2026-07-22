import { readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const projectRoot = resolve(import.meta.dirname, "..");
const fragmentPath = resolve(projectRoot, "game-src/game-fragment.html");
const shellCssPath = resolve(projectRoot, "game-src/game-shell.css");
const outputPath = resolve(projectRoot, "public/game.html");

const [fragment, shellCss] = await Promise.all([
  readFile(fragmentPath, "utf8"),
  readFile(shellCssPath, "utf8"),
]);

const document = `<!doctype html>
<html lang="zh-CN">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta name="description" content="噜噜立方体贪吃蛇：六面地图、巡逻障碍、橘子食物和限时星星。">
  <title>噜噜立方体贪吃蛇</title>
  <style>${shellCss}</style>
</head>
<body>
  <main class="game-shell">
${fragment}
  </main>
</body>
</html>
`;

await writeFile(outputPath, document, "utf8");
console.log(`Built ${outputPath}`);
