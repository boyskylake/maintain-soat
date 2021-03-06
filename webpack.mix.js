const mix = require("laravel-mix");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
const RemovePlugin = require("remove-files-webpack-plugin");
const ESLintPlugin = require("eslint-webpack-plugin");
// const TargetsPlugin = require("targets-webpack-plugin");

const removePlugin = new RemovePlugin({
    before: {
        test: [
            {
                folder: "public",
                method: (filePath) => {
                    return new RegExp(
                        /(?:.*\.js|.*\.map|mix-manifest\.json)$/,
                        "m"
                    ).test(filePath);
                },
            },
            {
                folder: "public/js",
                method: (filePath) => {
                    return new RegExp(/(?:.*\.js|.*\.map)$/, "m").test(
                        filePath
                    );
                },
                recursive: true,
            },
            {
                folder: "public/css",
                method: (filePath) => {
                    return new RegExp(/(?:.*\.css|.*\.map)$/, "m").test(
                        filePath
                    );
                },
            },
        ],
    },

    after: {},
});

mix.webpackConfig({
    plugins: [
        removePlugin,
        new ESLintPlugin(),
        // new TargetsPlugin({
        //     browsers: ["last 2 versions", "chrome >= 41", "IE 11", "IE 7"]
        // })
    ],
});

mix.js("resources/js/app.js", "public/js")
    .react()
    .extract([
        "@popperjs/core",
        "axios",
        "bootstrap",
        "clsx",
        "history",
        "jquery",
        "lodash",
        "moment",
        "popper.js",
        "prop-types",
        "react",
        "react-dom",
        "react-hook-form",
        "react-loadable",
        "react-notifications",
        "react-redux",
        "react-router-dom",
        "redux",
        "redux-thunk",
    ])
    .sass("resources/sass/app.scss", "public/css")
    .sourceMaps(false, "source-map");

if (mix.inProduction()) {
    mix.version();
}

if (!mix.inProduction()) {
    mix.browserSync("http://maintain.com");
}
