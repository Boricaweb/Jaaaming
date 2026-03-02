require('ignore-styles')

require('@babel/register')({
    extensions: ['.js', '.jsx'],
    ignore: [/node_modules/],
    rootMode: "upward",
    presets: [
        [
            "@babel/preset-env", {
                targets: {
                    node: "current"
                }
            }
        ], 
        [
            "@babel/preset-react", {
                runtime: "automatic"
            }
        ]
    ]
});