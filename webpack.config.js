const JSDocChecker = new require('fork-ts-checker-webpack-plugin')
  
module.exports =
  { entry: './foo.js'
  , output: { filename: 'index.js' }
  , devtool: 'source-map'
  , module:
    { rules:
      [ { test: /\.js$/
        , exclude: /node_modules/
        //remember that loaderS compose.
        //that means they are applied right to left, bottom to top
        , loader: 'babel-loader'
        }
      ]
    }
  , plugins:
    [ new JSDocChecker(
      { vue: true
      , async: true
      })
    ]
  }
