const express = require('express')
const router = express.Router();
const eventRouter = require('./event.route');
const viewPage = require('./main')
const defaultRouter = [{
        path: "/",
        route: eventRouter
    },
    {
        path: "/trangchu",
        route: viewPage
    }

]
const devRoutes = [{
    path: "docs",
    // route:docsRoutes
}]
defaultRouter.forEach(route => {
        router.use(route.path, route.route)
    })
    /* istanbul ignore next */
    // if (config.env === 'development') {
    //     devRoutes.forEach((route) => {
    //       router.use(route.path, route.route);
    //     });
    //   }

module.exports = router;