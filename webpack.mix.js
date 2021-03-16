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
const tailwindcss = require("tailwindcss");
const RemovePlugin = require("remove-files-webpack-plugin");
const autoprefixer = require("autoprefixer");
// const ESLintPlugin = require("eslint-webpack-plugin");
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
        autoprefixer,
        // new ESLintPlugin(),
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
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")],
    })
    .autoload({
        jquery: ["$", "window.jQuery", "jQuery"],
    })
    .sourceMaps(false, "source-map");

mix.disableNotifications();

if (mix.inProduction()) {
    mix.version();
}

if (!mix.inProduction()) {
    mix.browserSync("http://maintain.test");
}
