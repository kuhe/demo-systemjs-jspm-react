SystemJS.config({
  baseURL: "/demo-systemjs-jspm-react",
  paths: {
    "react-component/": "src/components",
    "github:": "jspm_packages/github/",
    "npm:": "jspm_packages/npm/"
  },
  packages: {
    "src": {}
  },
  trace: true,
  production: true
});
