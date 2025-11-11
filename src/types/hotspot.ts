export type Hotspot = {
  id: string
  time: number
  title: string
  description: string
  image?: string
  // Structured collapsible sections (subtitle + rich text)
  sections?: Array<{
    heading: string
    content: string // markdown-like plain text (\n supported)
  }>
  // Optional list of source references
  sources?: string[]
  // Optional image gallery (beyond main image)
  gallery?: Array<{
    src: string
    alt?: string
  }>
  // Optional button position relative to video frame
  position?: {
    xPercent: number // 0-100
    yPercent: number // 0-100
  }
}
