export const server = (done) => {
    app.plugins.browsersync.init({
        server: {
            baseDir: `${app.path.build.pug}`
        },
        notify: true,
        port: 3000,
    })
}