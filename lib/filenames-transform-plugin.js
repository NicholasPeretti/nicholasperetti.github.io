export default function assetTransformPlugin(callback) {
  return {
    name: 'asset-transform-plugin',
    async generateBundle(_, bundle) {
      for (const bundleEntry of Object.values(bundle)) {
        const newBundleEntry = await callback(bundleEntry)
        if (!newBundleEntry) {
          continue
        }
        delete bundle[bundleEntry.fileName]
        bundle[newBundleEntry.fileName] = newBundleEntry
      }
    },
  }
}
