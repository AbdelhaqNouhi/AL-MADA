module.exports = function (app, url) {
    require('./Users.routes')(app, url);
    require('./Employee.routes')(app, url);
};