import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "贪吃噜",
  description: "和噜噜一起在立方体地图上吃橘子、躲障碍、挑战最高分。",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
