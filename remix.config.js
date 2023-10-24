/** @type {import('@remix-run/dev').AppConfig} */
export default {
  ignoredRouteFiles: ['**/.*'],
  appDirectory: 'app',
  cacheDirectory: '.cache',
  assetsBuildDirectory: 'public/build',
  postcss: true,
  tailwind: true,
  // publicPath: "/build/",
  // serverBuildPath: "build/index.js",
};
