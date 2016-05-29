/**
 * Created by shahzaib on 5/29/16.
 */
var middleware = {
    requireAuthentication: function (req, res, next) {
        console.log("Private Route Hit");
        next()
    },
    logger: function (req, res, next) {
        console.log('requested: ' + req.method + ' ' + req.originalUrl + ' ' + new Date().toString());
        next()
    }
};

module.exports = middleware;