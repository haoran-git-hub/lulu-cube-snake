import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "贪吃噜",
  description: "和噜噜一起在立方体地图上吃橘子、躲障碍、挑战最高分。",
};

export default function Home() {
  return (
    <main className="home-shell">
      <span className="orange orange-one" aria-hidden="true">🍊</span>
      <span className="orange orange-two" aria-hidden="true">🍊</span>
      <span className="orange orange-three" aria-hidden="true">🍊</span>

      <section className="hero" aria-labelledby="game-title">
        <div className="hero-copy">
          <p className="eyebrow">LULU CUBE SNAKE</p>
          <h1 id="game-title">贪吃噜</h1>
          <p className="tagline">噜噜准备开饭啦！穿梭六面立方体，吃掉橘子，躲开障碍。</p>
          <a className="start-button" href="/game.html">
            <span>开始游戏</span>
            <span aria-hidden="true">→</span>
          </a>
          <p className="controls">方向键 / WASD · 长按空格加速</p>
        </div>

        <div className="lulu-stage" aria-hidden="true">
          <div className="sun-disc" />
          <img src="/assets/lulu-eating-hd.png" alt="" />
        </div>
      </section>
    </main>
  );
}
