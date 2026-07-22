# 噜噜立方体贪吃蛇

这是可长期保存、继续开发并发布到网页的独立项目版本。

## 本地运行

需要 Node.js 22.13 或更高版本。

```bash
npm install
npm run dev
```

终端会显示本地网址。用浏览器打开即可游玩。

正式构建检查：

```bash
npm run build
```

## 项目结构

- `game-src/game-fragment.html`：游戏主体逻辑、3D 绘制、声音、操作与存档。
- `game-src/game-shell.css`：独立游戏页面的基础样式。
- `scripts/build-game.mjs`：把游戏源码生成到 `public/game.html`。
- `app/page.tsx`：项目网站首页。
- `references/lulu/`：噜噜的正面、侧前方和背面造型参考图。
- `.github/workflows/deploy-pages.yml`：GitHub Pages 自动发布流程。

修改游戏源码后运行 `npm run build:game`，即可刷新 `public/game.html`。

## 存档说明

排行榜和最高分使用浏览器 `localStorage` 保存：

- 刷新或关闭网页后仍会保留。
- 存档只属于当前浏览器和当前网址。
- 换电脑、换浏览器、清除网站数据或更换网址后不会自动同步。

如果以后需要跨设备账号存档，可以再加入数据库和登录系统。

## 连接 GitHub

在 GitHub 创建一个空仓库后，在此项目目录运行：

```bash
git add .
git commit -m "Initial Lulu Cube Snake game"
git branch -M main
git remote add origin YOUR_GITHUB_REPO_URL
git push -u origin main
```

## 发布为分享网址

项目已经包含 GitHub Pages 工作流。推送到 GitHub 后：

1. 打开仓库的 **Settings → Pages**。
2. 在 **Build and deployment** 中选择 **GitHub Actions**。
3. 再次推送代码，或在 **Actions** 页面手动运行 `Deploy game to GitHub Pages`。
4. 发布完成后，网址通常是 `https://你的用户名.github.io/仓库名/`。

GitHub Pages 发布的是纯静态游戏页面，不需要服务器费用。
