const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const nextConfig = withPWA({
  // next config
});
module.exports = nextConfig;
module.exports = withPWA({
  dest: "public",
  register: true,
  runtimeCaching,
  skipWaiting: true,
});
