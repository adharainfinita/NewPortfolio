// Importar todos los SVG desde las carpetas usando import.meta.glob con tipado
const frontIcons: Record<string, { default: string }> = import.meta.glob('../assets/front/*.svg', { eager: true });
const backIcons: Record<string, { default: string }> = import.meta.glob('../assets/back/*.svg', { eager: true });
const dbIcons: Record<string, { default: string }> = import.meta.glob('../assets/db/*.svg', { eager: true });
const otherIcons: Record<string, { default: string }> = import.meta.glob('../assets/others/*.svg', { eager: true });

// Extraer las URLs de los archivos importados con tipado
export const frontIconsUrls: string[] = Object.values(frontIcons).map((module: { default: string }) => module.default);
export const backIconsUrls: string[] = Object.values(backIcons).map((module: { default: string }) => module.default);
export const dbIconsUrls: string[] = Object.values(dbIcons).map((module: { default: string }) => module.default);
export const otherIconsUrls: string[] = Object.values(otherIcons).map((module: { default: string }) => module.default);




