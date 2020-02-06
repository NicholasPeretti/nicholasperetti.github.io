export default function runOnlyInProduction(plugins = []) {
  return process.env.NODE_ENV === "production" ? plugins : [];
}
