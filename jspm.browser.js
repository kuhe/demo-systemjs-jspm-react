SystemJS.config({
  baseURL: "/scratch",
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*",
    "scratch/": "src/"
  },

  packages: {
    "src": {}
  }
  ,trace: true
  ,production: true
});
