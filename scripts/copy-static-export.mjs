import { cp, rm, stat } from "node:fs/promises"
import { resolve } from "node:path"

const sourceArg = process.argv[2] ?? "out"
const destinationArg = process.argv[3] ?? "dist"
const workspace = process.cwd()
const source = resolve(workspace, sourceArg)
const destination = resolve(workspace, destinationArg)

if (!source.startsWith(workspace) || !destination.startsWith(workspace)) {
  throw new Error("Refusing to copy outside the workspace")
}

const sourceStat = await stat(source)

if (!sourceStat.isDirectory()) {
  throw new Error(`Static export source is not a directory: ${source}`)
}

await rm(destination, { force: true, recursive: true })
await cp(source, destination, { recursive: true })

console.log(`Copied static export from ${sourceArg} to ${destinationArg}`)
