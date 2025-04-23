/**
 * Helper function to get the correct path with basePath for GitHub Pages deployment
 */
export function getPath(path: string): string {
  const basePath = process.env.NODE_ENV === "production" ? "/Project-4" : ""
  return `${basePath}${path}`
}
