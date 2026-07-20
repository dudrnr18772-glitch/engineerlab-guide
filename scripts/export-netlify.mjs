import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const output = join(root, "netlify-dist");
const workerUrl = pathToFileURL(join(root, "dist/server/index.js"));
workerUrl.searchParams.set("netlify-export", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);
const pageRoutes = ["/", "/electric-engineer", "/electric-industrial", "/electric-construction", "/electric-technician", "/public-enterprise-ncs", "/fire-protection", "/secret-code", "/privacy", "/disclosure"];
const staticRoutes = ["/robots.txt", "/sitemap.xml"];
const env = { ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) } };
const context = { waitUntil() {}, passThroughOnException() {} };

function makeStatic(html) {
  return html
    .replace(/<link[^>]+rel=["']modulepreload["'][^>]*>/gi, "")
    .replace(/<script(?![^>]+type=["']application\/ld\+json["'])[^>]*>[\s\S]*?<\/script>/gi, "")
    .replace(/<meta[^>]+name=["']codex-preview["'][^>]*>/gi, "");
}

async function render(route, isPage) {
  const response = await worker.fetch(new Request(new URL(route, "https://engineerlab-guide.netlify.app"), { headers: isPage ? { accept: "text/html" } : {} }), env, context);
  if (!response.ok) throw new Error(`Static export failed for ${route}: ${response.status}`);
  const body = isPage ? makeStatic(await response.text()) : await response.text();
  const relative = isPage ? route === "/" ? "index.html" : join(route.slice(1), "index.html") : route.slice(1);
  const target = join(output, relative);
  await mkdir(dirname(target), { recursive: true });
  await writeFile(target, body);
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(join(root, "dist/client"), output, { recursive: true });
await cp(join(root, "public"), output, { recursive: true });
for (const route of pageRoutes) await render(route, true);
for (const route of staticRoutes) await render(route, false);
await writeFile(join(output, "_headers"), `/assets/*\n  Cache-Control: public, max-age=31536000, immutable\n\n/*.html\n  X-Content-Type-Options: nosniff\n  Referrer-Policy: strict-origin-when-cross-origin\n`);
console.log(`Exported ${pageRoutes.length} pages to ${output}`);
