import path from 'path'
import { statSync, readdirSync, readFileSync } from 'fs-extra'

export default function copyStaticAssets(
  { assets, prefix } = { assets: [], prefix: 'asset-url' }
) {
  return {
    name: 'copy-asset-plugin',
    buildStart() {
      for (const asset of assets) {
        emitAsset(this.emitAsset, asset)
      }
    },
    async resolveId(id, importer) {
      if (!id.startsWith(prefix)) {
        return
      }
      return prefix + (await this.resolveId(id.slice(prefix.length), importer))
    },
    load(id) {
      if (!id.startsWith(prefix)) {
        return
      }
      const assetId = this.emitAsset(
        basename(id),
        readFileSync(id.slice(prefix.length))
      )
      return `export default import.meta.ROLLUP_ASSET_URL_${assetId}`
    },
  }
}

function emitAsset(emitAssetFn, asset) {
  const assetStat = statSync(asset)

  if (assetStat.isDirectory()) {
    return readdirSync(asset).forEach(assetChild => {
      const destination = path.join(asset, assetChild)
      return emitAsset(emitAssetFn, destination, true)
    })
  } else {
    return emitAssetFn(path.basename(asset), readFileSync(asset))
  }
}
