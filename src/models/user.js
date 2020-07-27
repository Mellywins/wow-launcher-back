"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.actStatus = void 0;
var actStatus;
(function (actStatus) {
    actStatus[actStatus["active"] = 1] = "active";
    actStatus[actStatus["away"] = 2] = "away";
    actStatus[actStatus["dnd"] = 3] = "dnd";
})(actStatus = exports.actStatus || (exports.actStatus = {}));
