import path from "path";
import { copy } from "fs-extra";

export default function copyStaticAssets({ assets } = { assets: [] }) {
  return {
    name: "copy-static-assets",
    async generateBundle({ file, dir }) {
      const outputDirectory = dir || path.dirname(file);

      return Promise.all(assets.map(asset => copy(asset, outputDirectory)));
    }
  };
}
