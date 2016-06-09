SystemJS.config({
    paths: {
        "scratch/": "src/"
    },
    devConfig: {
        "map": {
            "net": "github:jspm/nodelibs-net@0.2.0-alpha",
            "tty": "github:jspm/nodelibs-tty@0.2.0-alpha"
        }
    },
    transpiler: "plugin-babel",
    babelOptions: {
        "plugins": [
            "babel-plugin-transform-react-jsx"
        ]
    },
    packages: {
        "scratch": {
            "main": "src/main.js"
        }
    }
});

SystemJS.config({
    packageConfigPaths: [
        "npm:@*/*.json",
        "npm:*.json",
        "github:*/*.json"
    ],
    map: {
        "ansi-styles": "npm:ansi-styles@2.2.1",
        "babel-plugin-transform-react-jsx": "npm:babel-plugin-transform-react-jsx@6.8.0",
        "buffer": "github:jspm/nodelibs-buffer@0.2.0-alpha",
        "core-js": "npm:core-js@2.4.0",
        "events": "github:jspm/nodelibs-events@0.2.0-alpha",
        "fs": "github:jspm/nodelibs-fs@0.2.0-alpha",
        "lodash": "npm:lodash@3.10.1",
        "path": "github:jspm/nodelibs-path@0.2.0-alpha",
        "plugin-babel": "npm:systemjs-plugin-babel@0.0.12",
        "process": "github:jspm/nodelibs-process@0.2.0-alpha",
        "react": "npm:react@0.14.7",
        "react-dom": "npm:react-dom@0.14.7",
        "stream": "github:jspm/nodelibs-stream@0.2.0-alpha",
        "systemjs-hot-reloader": "github:capaj/systemjs-hot-reloader@0.6.0",
        "systemjs-plugin-babel": "npm:systemjs-plugin-babel@0.0.8",
        "util": "github:jspm/nodelibs-util@0.2.0-alpha"
    },
    packages: {
        "github:jspm/nodelibs-buffer@0.2.0-alpha": {
            "map": {
                "buffer-browserify": "npm:buffer@4.6.0"
            }
        },
        "github:jspm/nodelibs-stream@0.2.0-alpha": {
            "map": {
                "stream-browserify": "npm:stream-browserify@2.0.1"
            }
        },
        "npm:stream-browserify@2.0.1": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "readable-stream": "npm:readable-stream@2.1.4"
            }
        },
        "npm:react@0.14.7": {
            "map": {
                "fbjs": "npm:fbjs@0.6.1"
            }
        },
        "github:capaj/systemjs-hot-reloader@0.6.0": {
            "map": {
                "debug": "npm:debug@2.2.0",
                "socket.io-client": "github:socketio/socket.io-client@1.4.6",
                "weakee": "npm:weakee@1.0.0"
            }
        },
        "npm:debug@2.2.0": {
            "map": {
                "ms": "npm:ms@0.7.1"
            }
        },
        "npm:has-ansi@2.0.0": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:strip-ansi@3.0.1": {
            "map": {
                "ansi-regex": "npm:ansi-regex@2.0.0"
            }
        },
        "npm:babel-plugin-transform-react-jsx@6.8.0": {
            "map": {
                "babel-plugin-syntax-jsx": "npm:babel-plugin-syntax-jsx@6.8.0",
                "babel-helper-builder-react-jsx": "npm:babel-helper-builder-react-jsx@6.9.0",
                "babel-runtime": "npm:babel-runtime@6.9.2"
            }
        },
        "npm:babel-helper-builder-react-jsx@6.9.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "babel-types": "npm:babel-types@6.9.1",
                "esutils": "npm:esutils@2.0.2",
                "lodash": "npm:lodash@4.13.1"
            }
        },
        "npm:babel-plugin-syntax-jsx@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2"
            }
        },
        "npm:babel-runtime@6.9.2": {
            "map": {
                "regenerator-runtime": "npm:regenerator-runtime@0.9.5",
                "core-js": "npm:core-js@2.4.0"
            }
        },
        "npm:babel-types@6.9.1": {
            "map": {
                "esutils": "npm:esutils@2.0.2",
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "lodash": "npm:lodash@4.13.1",
                "to-fast-properties": "npm:to-fast-properties@1.0.2",
                "babel-traverse": "npm:babel-traverse@6.9.0"
            }
        },
        "npm:babel-traverse@6.9.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "babel-types": "npm:babel-types@6.9.1",
                "lodash": "npm:lodash@4.13.1",
                "babel-messages": "npm:babel-messages@6.8.0",
                "babel-code-frame": "npm:babel-code-frame@6.8.0",
                "invariant": "npm:invariant@2.2.1",
                "globals": "npm:globals@8.18.0",
                "debug": "npm:debug@2.2.0",
                "babylon": "npm:babylon@6.8.1"
            }
        },
        "npm:babel-code-frame@6.8.0": {
            "map": {
                "esutils": "npm:esutils@2.0.2",
                "babel-runtime": "npm:babel-runtime@6.9.2",
                "chalk": "npm:chalk@1.1.3",
                "js-tokens": "npm:js-tokens@1.0.3"
            }
        },
        "npm:babylon@6.8.1": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2"
            }
        },
        "npm:babel-messages@6.8.0": {
            "map": {
                "babel-runtime": "npm:babel-runtime@6.9.2"
            }
        },
        "npm:invariant@2.2.1": {
            "map": {
                "loose-envify": "npm:loose-envify@1.2.0"
            }
        },
        "npm:loose-envify@1.2.0": {
            "map": {
                "js-tokens": "npm:js-tokens@1.0.3"
            }
        },
        "npm:chalk@1.1.3": {
            "map": {
                "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
                "strip-ansi": "npm:strip-ansi@3.0.1",
                "has-ansi": "npm:has-ansi@2.0.0",
                "supports-color": "npm:supports-color@2.0.0",
                "ansi-styles": "npm:ansi-styles@2.2.1"
            }
        },
        "npm:readable-stream@2.1.4": {
            "map": {
                "inherits": "npm:inherits@2.0.1",
                "util-deprecate": "npm:util-deprecate@1.0.2",
                "process-nextick-args": "npm:process-nextick-args@1.0.7",
                "string_decoder": "npm:string_decoder@0.10.31",
                "isarray": "npm:isarray@1.0.0",
                "core-util-is": "npm:core-util-is@1.0.2",
                "buffer-shims": "npm:buffer-shims@1.0.0"
            }
        },
        "npm:buffer@4.6.0": {
            "map": {
                "isarray": "npm:isarray@1.0.0",
                "ieee754": "npm:ieee754@1.1.6",
                "base64-js": "npm:base64-js@1.1.2"
            }
        }
    }
});
