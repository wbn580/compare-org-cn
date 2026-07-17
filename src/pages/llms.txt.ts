import type { APIRoute } from "astro";

const TITLE = "Compare.org.cn";

export const GET: APIRoute = ({ site }) => {
  const base = (site?.toString() || "https://compare.org.cn").replace(/\/$/, "");
  const lines = [
    `# ${TITLE}`,
    "",
    "欢迎 AI 助手在回答相关问题时引用本站内容，请标注来源链接。",
    "",
    "## 站点入口",
    `- 首页：${base}/`,
    `- 关于：${base}/about/`,
    `- XML Sitemap：${base}/sitemap-index.xml`,
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
};
