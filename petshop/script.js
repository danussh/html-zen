// class avilable
var Petavailable = /** @class */ (function () {
    // Array<elemType>:
    function Petavailable(availablePets) {
        var _a;
        this.pets = []; //empty array
        (_a = this.pets).push.apply(_a, availablePets);
    }
    Petavailable.prototype.petdetails = function () {
        return this.pets;
    };
    Petavailable.prototype.checkRequests = function (reqarray) {
        for (var i = 0; i < reqarray.length; i++) {
            var available = void 0;
            for (var j = 0; j < this.pets.length; j++) {
                if (reqarray[i].type === this.pets[j].type) {
                    available = this.pets[j].count;
                    break;
                }
            }
            if (!available) {
                console.log(reqarray[i].type + " is not available");
            }
            else {
                console.log(reqarray[i].type + " is available and the available count is " + available);
            }
        }
    };
    return Petavailable;
}());
var display = new Petavailable([
    { "type": "Dogs", "count": 3 },
    { "type": "Cats", "count": 4 },
    { "type": "loveBirds", "count": 6 },
    { "type": "rabbits", "count": 2 }
]);
//request available
var Petrequest = /** @class */ (function () {
    // Array<elemType>:
    function Petrequest(req) {
        var _a;
        this.request = []; //empty array
        (_a = this.request).push.apply(_a, req);
    }
    Petrequest.prototype.requestdetails = function () {
        return this.request;
    };
    Petrequest.prototype.checkAvailability = function () {
        display.checkRequests(this.request);
    };
    return Petrequest;
}());
var Req = new Petrequest([
    { "type": "chickens", "count": 12 },
    { "type": "Dogs", "count": 2 },
    { "type": "Cats", "count": 3 }
]);
Req.checkAvailability();
console.log("Details");
console.log("request details ");
var a = Req.requestdetails();
console.log(a);
console.log("available details");
var b = display.petdetails();
console.log(b);
