import { resolve, dirname } from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const baseUrl = pathToFileURL(resolve(process.cwd(), 'src')).href;

export async function resolve(specifier, context, defaultResolve) {
  if (specifier.startsWith('@Routes/')) {
    const newSpecifier = new URL(specifier.replace('@Routes/', 'routes/'), baseUrl).href;
    return {
      url: newSpecifier
    };
  }
  return defaultResolve(specifier, context, defaultResolve);
}
