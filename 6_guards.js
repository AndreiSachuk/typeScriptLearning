function srtip(x) {
    if (typeof x === 'number')
        return x.toFixed(2);
    return x.trim();
}
var MyResponse = /** @class */ (function () {
    function MyResponse() {
        this.headder = 'response header';
        this.result = 'responnse result';
    }
    return MyResponse;
}());
var MyError = /** @class */ (function () {
    function MyError() {
        this.header = 'error header';
        this.message = 'error message';
    }
    return MyError;
}());
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.headder + res.result
        };
    }
    else {
        return {
            info: res.header + res.message
        };
    }
}
function setAlertType(type) {
    //.......
}
setAlertType('success');
setAlertType('danger');
//setAlertType('def')
