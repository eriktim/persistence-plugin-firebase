SystemJS.config({
  transpiler: 'plugin-babel',
  meta: {
    '*.js': {
      babelOptions: {
        stage1: true,
        plugins: [
          'babel-plugin-transform-decorators-legacy'
        ]
      }
    }
  },
  paths: {
    'aurelia-firebase/': 'src/'
  },
  packages: {
    'aurelia-firebase': {
      main: 'index.js',
      format: 'esm'
    },
    'test': {
      format: 'esm'
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    'npm:@*/*.json',
    'npm:*.json',
    'github:*/*.json'
  ],
  map: {
    'assert': 'github:jspm/nodelibs-assert@0.2.0-alpha',
    'aurelia-dependency-injection': 'npm:aurelia-dependency-injection@1.0.0-beta.1.2.3',
    'aurelia-logging': 'npm:aurelia-logging@1.0.0-beta.1.2.1',
    'aurelia-metadata': 'npm:aurelia-metadata@1.0.0-beta.1.2.1',
    'aurelia-pal': 'npm:aurelia-pal@1.0.0-beta.1.2.2',
    'babel-plugin-transform-decorators-legacy': 'npm:babel-plugin-transform-decorators-legacy@1.3.4',
    'buffer': 'github:jspm/nodelibs-buffer@0.2.0-alpha',
    'child_process': 'github:jspm/nodelibs-child_process@0.2.0-alpha',
    'constants': 'github:jspm/nodelibs-constants@0.2.0-alpha',
    'crypto': 'github:jspm/nodelibs-crypto@0.2.0-alpha',
    'events': 'github:jspm/nodelibs-events@0.2.0-alpha',
    'firebase': 'npm:firebase@3.0.3',
    'fs': 'github:jspm/nodelibs-fs@0.2.0-alpha',
    'http': 'github:jspm/nodelibs-http@0.2.0-alpha',
    'https': 'github:jspm/nodelibs-https@0.2.0-alpha',
    'net': 'github:jspm/nodelibs-net@0.2.0-alpha',
    'path': 'github:jspm/nodelibs-path@0.2.0-alpha',
    'plugin-babel': 'npm:systemjs-plugin-babel@0.0.11',
    'process': 'github:jspm/nodelibs-process@0.2.0-alpha',
    'stream': 'github:jspm/nodelibs-stream@0.2.0-alpha',
    'string_decoder': 'github:jspm/nodelibs-string_decoder@0.2.0-alpha',
    'tls': 'github:jspm/nodelibs-tls@0.2.0-alpha',
    'tty': 'github:jspm/nodelibs-tty@0.2.0-alpha',
    'url': 'github:jspm/nodelibs-url@0.2.0-alpha',
    'util': 'github:jspm/nodelibs-util@0.2.0-alpha',
    'vm': 'github:jspm/nodelibs-vm@0.2.0-alpha'
  },
  packages: {
    'npm:aurelia-dependency-injection@1.0.0-beta.1.2.3': {
      'map': {
        'aurelia-logging': 'npm:aurelia-logging@1.0.0-beta.1.2.1',
        'aurelia-metadata': 'npm:aurelia-metadata@1.0.0-beta.1.2.1',
        'aurelia-pal': 'npm:aurelia-pal@1.0.0-beta.1.2.2'
      }
    },
    'npm:aurelia-metadata@1.0.0-beta.1.2.1': {
      'map': {
        'aurelia-pal': 'npm:aurelia-pal@1.0.0-beta.1.2.2'
      }
    },
    'npm:base64-url@1.2.2': {
      'map': {}
    },
    'npm:base64url@1.0.6': {
      'map': {
        'concat-stream': 'npm:concat-stream@1.4.10',
        'meow': 'npm:meow@2.0.0'
      }
    },
    'npm:bn.js@4.11.3': {
      'map': {}
    },
    'npm:browserify-aes@1.0.6': {
      'map': {
        'buffer-xor': 'npm:buffer-xor@1.0.3',
        'cipher-base': 'npm:cipher-base@1.0.2',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'inherits': 'npm:inherits@2.0.1',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:browserify-cipher@1.0.0': {
      'map': {
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'browserify-des': 'npm:browserify-des@1.0.0',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0'
      }
    },
    'npm:browserify-des@1.0.0': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.2',
        'des.js': 'npm:des.js@1.0.0',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:browserify-rsa@4.0.1': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.3',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:browserify-sign@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'elliptic': 'npm:elliptic@6.2.8',
        'inherits': 'npm:inherits@2.0.1',
        'parse-asn1': 'npm:parse-asn1@5.0.0'
      }
    },
    'npm:buffer-equal-constant-time@1.0.1': {
      'map': {}
    },
    'npm:buffer-xor@1.0.3': {
      'map': {
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:camelcase-keys@1.0.0': {
      'map': {
        'camelcase': 'npm:camelcase@1.2.1',
        'map-obj': 'npm:map-obj@1.0.1'
      }
    },
    'npm:cipher-base@1.0.2': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:concat-stream@1.4.10': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@1.1.14',
        'typedarray': 'npm:typedarray@0.0.6'
      }
    },
    'npm:core-util-is@1.0.2': {
      'map': {}
    },
    'npm:create-ecdh@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.3',
        'elliptic': 'npm:elliptic@6.2.8'
      }
    },
    'npm:create-hash@1.1.2': {
      'map': {
        'cipher-base': 'npm:cipher-base@1.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'ripemd160': 'npm:ripemd160@1.0.1',
        'sha.js': 'npm:sha.js@2.4.5'
      }
    },
    'npm:create-hmac@1.1.4': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:crypto-browserify@3.11.0': {
      'map': {
        'browserify-cipher': 'npm:browserify-cipher@1.0.0',
        'browserify-sign': 'npm:browserify-sign@4.0.0',
        'create-ecdh': 'npm:create-ecdh@4.0.0',
        'create-hash': 'npm:create-hash@1.1.2',
        'create-hmac': 'npm:create-hmac@1.1.4',
        'diffie-hellman': 'npm:diffie-hellman@5.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'public-encrypt': 'npm:public-encrypt@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:des.js@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:diffie-hellman@5.0.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.3',
        'miller-rabin': 'npm:miller-rabin@4.0.0',
        'randombytes': 'npm:randombytes@2.0.3',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:ecdsa-sig-formatter@1.0.5': {
      'map': {
        'base64-url': 'npm:base64-url@1.2.2'
      }
    },
    'npm:evp_bytestokey@1.0.0': {
      'map': {
        'create-hash': 'npm:create-hash@1.1.2'
      }
    },
    'npm:faye-websocket@0.9.3': {
      'map': {
        'websocket-driver': 'npm:websocket-driver@0.6.5'
      }
    },
    'npm:firebase@3.0.3': {
      'map': {
        'faye-websocket': 'npm:faye-websocket@0.9.3',
        'jsonwebtoken': 'npm:jsonwebtoken@5.7.0',
        'rsvp': 'npm:rsvp@3.2.1'
      }
    },
    'npm:get-stdin@4.0.1': {
      'map': {}
    },
    'npm:hash.js@1.0.3': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:indent-string@1.2.2': {
      'map': {
        'get-stdin': 'npm:get-stdin@4.0.1',
        'minimist': 'npm:minimist@1.2.0',
        'repeating': 'npm:repeating@1.1.3',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:inherits@2.0.1': {
      'map': {}
    },
    'npm:is-finite@1.0.1': {
      'map': {
        'number-is-nan': 'npm:number-is-nan@1.0.0'
      }
    },
    'npm:jsonwebtoken@5.7.0': {
      'map': {
        'jws': 'npm:jws@3.1.3',
        'ms': 'npm:ms@0.7.1',
        'xtend': 'npm:xtend@4.0.1'
      }
    },
    'npm:jwa@1.1.3': {
      'map': {
        'base64url': 'npm:base64url@1.0.6',
        'buffer-equal-constant-time': 'npm:buffer-equal-constant-time@1.0.1',
        'ecdsa-sig-formatter': 'npm:ecdsa-sig-formatter@1.0.5'
      }
    },
    'npm:jws@3.1.3': {
      'map': {
        'base64url': 'npm:base64url@1.0.6',
        'jwa': 'npm:jwa@1.1.3'
      }
    },
    'npm:meow@2.0.0': {
      'map': {
        'camelcase-keys': 'npm:camelcase-keys@1.0.0',
        'indent-string': 'npm:indent-string@1.2.2',
        'minimist': 'npm:minimist@1.2.0',
        'object-assign': 'npm:object-assign@1.0.0'
      }
    },
    'npm:miller-rabin@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.3',
        'brorand': 'npm:brorand@1.0.5'
      }
    },
    'npm:parse-asn1@5.0.0': {
      'map': {
        'asn1.js': 'npm:asn1.js@4.6.2',
        'browserify-aes': 'npm:browserify-aes@1.0.6',
        'create-hash': 'npm:create-hash@1.1.2',
        'evp_bytestokey': 'npm:evp_bytestokey@1.0.0',
        'pbkdf2': 'npm:pbkdf2@3.0.4',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:pbkdf2@3.0.4': {
      'map': {
        'create-hmac': 'npm:create-hmac@1.1.4',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:public-encrypt@4.0.0': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.3',
        'browserify-rsa': 'npm:browserify-rsa@4.0.1',
        'create-hash': 'npm:create-hash@1.1.2',
        'parse-asn1': 'npm:parse-asn1@5.0.0',
        'randombytes': 'npm:randombytes@2.0.3'
      }
    },
    'npm:punycode@1.3.2': {
      'map': {}
    },
    'npm:randombytes@2.0.3': {
      'map': {}
    },
    'npm:readable-stream@1.1.14': {
      'map': {
        'core-util-is': 'npm:core-util-is@1.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'isarray': 'npm:isarray@0.0.1',
        'stream-browserify': 'npm:stream-browserify@1.0.0',
        'string_decoder': 'npm:string_decoder@0.10.31'
      }
    },
    'npm:repeating@1.1.3': {
      'map': {
        'is-finite': 'npm:is-finite@1.0.1',
        'systemjs-json': 'github:systemjs/plugin-json@0.1.2'
      }
    },
    'npm:ripemd160@1.0.1': {
      'map': {}
    },
    'npm:rsvp@3.2.1': {
      'map': {}
    },
    'npm:sha.js@2.4.5': {
      'map': {
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:stream-browserify@1.0.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@1.1.14'
      }
    },
    'npm:string_decoder@0.10.31': {
      'map': {}
    },
    'npm:websocket-driver@0.6.5': {
      'map': {
        'websocket-extensions': 'npm:websocket-extensions@0.1.1'
      }
    },
    'npm:websocket-extensions@0.1.1': {
      'map': {}
    },
    'github:jspm/nodelibs-buffer@0.2.0-alpha': {
      'map': {
        'buffer-browserify': 'npm:buffer@4.6.0'
      }
    },
    'npm:buffer@4.6.0': {
      'map': {
        'ieee754': 'npm:ieee754@1.1.6',
        'isarray': 'npm:isarray@1.0.0',
        'base64-js': 'npm:base64-js@1.1.2'
      }
    },
    'github:jspm/nodelibs-url@0.2.0-alpha': {
      'map': {
        'url-browserify': 'npm:url@0.11.0'
      }
    },
    'npm:url@0.11.0': {
      'map': {
        'punycode': 'npm:punycode@1.3.2',
        'querystring': 'npm:querystring@0.2.0'
      }
    },
    'github:jspm/nodelibs-crypto@0.2.0-alpha': {
      'map': {
        'crypto-browserify': 'npm:crypto-browserify@3.11.0'
      }
    },
    'github:jspm/nodelibs-stream@0.2.0-alpha': {
      'map': {
        'stream-browserify': 'npm:stream-browserify@2.0.1'
      }
    },
    'npm:stream-browserify@2.0.1': {
      'map': {
        'readable-stream': 'npm:readable-stream@2.1.4',
        'inherits': 'npm:inherits@2.0.1'
      }
    },
    'npm:readable-stream@2.1.4': {
      'map': {
        'core-util-is': 'npm:core-util-is@1.0.2',
        'inherits': 'npm:inherits@2.0.1',
        'isarray': 'npm:isarray@1.0.0',
        'string_decoder': 'npm:string_decoder@0.10.31',
        'buffer-shims': 'npm:buffer-shims@1.0.0',
        'process-nextick-args': 'npm:process-nextick-args@1.0.7',
        'util-deprecate': 'npm:util-deprecate@1.0.2'
      }
    },
    'github:jspm/nodelibs-string_decoder@0.2.0-alpha': {
      'map': {
        'string_decoder-browserify': 'npm:string_decoder@0.10.31'
      }
    },
    'github:jspm/nodelibs-http@0.2.0-alpha': {
      'map': {
        'http-browserify': 'npm:stream-http@2.3.0'
      }
    },
    'npm:stream-http@2.3.0': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'readable-stream': 'npm:readable-stream@2.1.4',
        'xtend': 'npm:xtend@4.0.1',
        'builtin-status-codes': 'npm:builtin-status-codes@2.0.0',
        'to-arraybuffer': 'npm:to-arraybuffer@1.0.1'
      }
    },
    'npm:elliptic@6.2.8': {
      'map': {
        'inherits': 'npm:inherits@2.0.1',
        'hash.js': 'npm:hash.js@1.0.3',
        'brorand': 'npm:brorand@1.0.5',
        'bn.js': 'npm:bn.js@4.11.3'
      }
    },
    'npm:asn1.js@4.6.2': {
      'map': {
        'bn.js': 'npm:bn.js@4.11.3',
        'inherits': 'npm:inherits@2.0.1',
        'minimalistic-assert': 'npm:minimalistic-assert@1.0.0'
      }
    },
    'npm:babel-plugin-transform-decorators-legacy@1.3.4': {
      'map': {
        'babel-plugin-syntax-decorators': 'npm:babel-plugin-syntax-decorators@6.8.0',
        'babel-template': 'npm:babel-template@6.9.0',
        'babel-runtime': 'npm:babel-runtime@6.9.2'
      }
    },
    'npm:babel-plugin-syntax-decorators@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2'
      }
    },
    'npm:babel-template@6.9.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'babylon': 'npm:babylon@6.8.0',
        'babel-types': 'npm:babel-types@6.9.1',
        'babel-traverse': 'npm:babel-traverse@6.9.0',
        'lodash': 'npm:lodash@4.13.1'
      }
    },
    'npm:babylon@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2'
      }
    },
    'npm:babel-types@6.9.1': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'babel-traverse': 'npm:babel-traverse@6.9.0',
        'lodash': 'npm:lodash@4.13.1',
        'to-fast-properties': 'npm:to-fast-properties@1.0.2',
        'esutils': 'npm:esutils@2.0.2'
      }
    },
    'npm:babel-traverse@6.9.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'babel-types': 'npm:babel-types@6.9.1',
        'babylon': 'npm:babylon@6.8.0',
        'lodash': 'npm:lodash@4.13.1',
        'invariant': 'npm:invariant@2.2.1',
        'babel-code-frame': 'npm:babel-code-frame@6.8.0',
        'babel-messages': 'npm:babel-messages@6.8.0',
        'globals': 'npm:globals@8.18.0',
        'debug': 'npm:debug@2.2.0'
      }
    },
    'npm:babel-runtime@6.9.2': {
      'map': {
        'regenerator-runtime': 'npm:regenerator-runtime@0.9.5',
        'core-js': 'npm:core-js@2.4.0'
      }
    },
    'npm:babel-code-frame@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2',
        'esutils': 'npm:esutils@2.0.2',
        'js-tokens': 'npm:js-tokens@1.0.3',
        'chalk': 'npm:chalk@1.1.3'
      }
    },
    'npm:babel-messages@6.8.0': {
      'map': {
        'babel-runtime': 'npm:babel-runtime@6.9.2'
      }
    },
    'npm:invariant@2.2.1': {
      'map': {
        'loose-envify': 'npm:loose-envify@1.2.0'
      }
    },
    'npm:debug@2.2.0': {
      'map': {
        'ms': 'npm:ms@0.7.1'
      }
    },
    'npm:loose-envify@1.2.0': {
      'map': {
        'js-tokens': 'npm:js-tokens@1.0.3'
      }
    },
    'npm:chalk@1.1.3': {
      'map': {
        'escape-string-regexp': 'npm:escape-string-regexp@1.0.5',
        'has-ansi': 'npm:has-ansi@2.0.0',
        'strip-ansi': 'npm:strip-ansi@3.0.1',
        'ansi-styles': 'npm:ansi-styles@2.2.1',
        'supports-color': 'npm:supports-color@2.0.0'
      }
    },
    'npm:has-ansi@2.0.0': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    },
    'npm:strip-ansi@3.0.1': {
      'map': {
        'ansi-regex': 'npm:ansi-regex@2.0.0'
      }
    }
  }
});
