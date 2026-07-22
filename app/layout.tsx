import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "噜噜立方体贪吃蛇",
  description: "一款可以跨越六面立方体地图的 3D 贪吃蛇网页游戏。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
