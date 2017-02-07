import {TranslationLoaderImpl} from "./translation.translateloader";
export function createTranslateLoaderFactory() {
  return new TranslationLoaderImpl();
}
