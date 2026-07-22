import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "噜噜立方体贪吃蛇",
  description: "在六面立方体上探索、吃橘子、躲避障碍，并挑战自己的最高分。",
};

export default function Home() {
  return (
    <main className="site-shell">
      <header className="site-header">
        <div>
          <p className="eyebrow">LULU CUBE SNAKE</p>
          <h1>噜噜立方体贪吃蛇</h1>
          <p className="intro">
            方向键或 WASD 控制方向，按住空格加速。游戏记录会保存在当前浏览器中。
          </p>
        </div>
        <a className="play-link" href="/game.html" target="_blank" rel="noreferrer">
          全屏打开
        </a>
      </header>

      <iframe
        className="game-frame"
        src="/game.html"
        title="噜噜立方体贪吃蛇"
        allow="autoplay"
      />
    </main>
  );
}
