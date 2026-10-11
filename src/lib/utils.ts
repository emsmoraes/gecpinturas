export { cn } from "cn"

/** Ruta pública a un archivo de /public/media respetando `base` de Vite. */
export const media = (file: string) => `${import.meta.env.BASE_URL}media/${file}`
