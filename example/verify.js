var verify = require('../');

exports.show = 'pass in the argument 555'

exports.verify = verify(function (args, t) {
    t.plan(1);
    t.equal(args[0], '555');
});
