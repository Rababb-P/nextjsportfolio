import { createServer } from "node:http"
import { extname, join, normalize, resolve } from "node:path"
import { stat, readFile } from "node:fs/promises"

const rootArg = process.argv[2] ?? "dist"
const port = Number(process.env.PORT ?? 3000)
const host = process.env.HOST ?? "127.0.0.1"
const root = resolve(process.cwd(), rootArg)

const contentTypes = {
  ".css": "text/css; charset=utf-8",
  ".gif": "image/gif",
  ".html": "text/html; charset=utf-8",
  ".ico": "image/x-icon",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".pdf": "application/pdf",
  ".png": "image/png",
  ".svg": "image/svg+xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
}

function send(res, statusCode, body, contentType = "text/plain; charset=utf-8") {
  res.writeHead(statusCode, { "Content-Type": contentType })
  res.end(body)
}

function toFilePath(urlPath) {
  const decodedPath = decodeURIComponent(urlPath.split("?")[0] ?? "/")
  const normalizedPath = normalize(decodedPath).replace(/^(\.\.[/\\])+/, "")
  return resolve(join(root, normalizedPath))
}

async function resolveFile(urlPath) {
  let filePath = toFilePath(urlPath)

  if (!filePath.startsWith(root)) {
    return null
  }

  try {
    const fileStat = await stat(filePath)
    if (fileStat.isDirectory()) {
      filePath = join(filePath, "index.html")
    }
  } catch {
    if (!extname(filePath)) {
      filePath = join(filePath, "index.html")
    }
  }

  try {
    const fileStat = await stat(filePath)
    return fileStat.isFile() ? filePath : null
  } catch {
    return null
  }
}

const server = createServer(async (req, res) => {
  try {
    const filePath = await resolveFile(req.url ?? "/")
    const fallbackPath = join(root, "404.html")
    const resolvedPath = filePath ?? fallbackPath
    const body = await readFile(resolvedPath)
    const contentType = contentTypes[extname(resolvedPath)] ?? "application/octet-stream"

    send(res, filePath ? 200 : 404, body, contentType)
  } catch {
    send(res, 500, "Static server error")
  }
})

server.listen(port, host, () => {
  console.log(`Serving ${root} at http://${host}:${port}`)
})
