import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

async function render() {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request("http://localhost/", { headers: { accept: "text/html" } }),
    { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } },
    { waitUntil() {}, passThroughOnException() {} },
  );
}

test("server-renders the 贪吃噜 homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>贪吃噜<\/title>/i);
  assert.match(html, /id="game-title">贪吃噜/);
  assert.match(html, /href="\/game\.html"/);
  assert.match(html, />开始游戏</);
  assert.match(html, /\/assets\/lulu-eating-hd\.png/);
  assert.doesNotMatch(html, /<iframe/i);
  assert.doesNotMatch(html, /codex-preview|Building your site/);
});

test("ships both static pages and the transparent hero asset", async () => {
  const [homepage, game, hero] = await Promise.all([
    readFile(new URL("../public/index.html", import.meta.url), "utf8"),
    readFile(new URL("../public/game.html", import.meta.url), "utf8"),
    access(new URL("../public/assets/lulu-eating-hd.png", import.meta.url)),
  ]);

  assert.match(homepage, /<title>贪吃噜<\/title>/i);
  assert.match(homepage, /href="game\.html"/);
  assert.match(homepage, /assets\/lulu-eating-hd\.png/);
  assert.match(game, /噜噜立方体贪吃蛇/);
  assert.equal(hero, undefined);
});
