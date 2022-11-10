exports.get404 = function (req, res, _next) {
    return res.status(404).render('404', {
        pageTitle: 'Page Not Found'
    });
};
