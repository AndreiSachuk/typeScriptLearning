var rect1 = {
    id: "1234",
    size: {
        width: 20,
        heigh: 30
    },
    color: '#fff'
};
var rect2 = {
    id: "12",
    size: {
        width: 20,
        heigh: 80
    }
};
rect2.color = 'black';
var rect3 = {};
var rect4 = {
    id: "123",
    size: {
        width: 180,
        heigh: 80
    },
    getArea: function () {
        return this.size.width * this.size.heigh;
    }
};
var Clock = /** @class */ (function () {
    function Clock() {
        this.time = new Date();
    }
    Clock.prototype.setTime = function (date) {
        this.time = date;
    };
    return Clock;
}());
var css = {
    border: '1px solid black',
    marginTop: '2px',
    borderRadius: '5px'
};
