const log = console.log;
//屏蔽console.log
var console = {
    log: function () { },
    warn: function () { },
    info: function () { },
    error: function () { }
};
