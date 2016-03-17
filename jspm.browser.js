SystemJS.config({
  baseURL: "/demo-systemjs-jspm-react",
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
