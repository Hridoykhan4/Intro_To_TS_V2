var TrainClass;
(function (TrainClass) {
    TrainClass[TrainClass["Shovon"] = 200] = "Shovon";
    TrainClass[TrainClass["Snigdha"] = 400] = "Snigdha";
    TrainClass[TrainClass["AC"] = 100] = "AC";
})(TrainClass || (TrainClass = {}));
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["Success"] = 200] = "Success";
    StatusCode[StatusCode["NotFound"] = 404] = "NotFound";
    StatusCode[StatusCode["ServerError"] = 500] = "ServerError";
})(StatusCode || (StatusCode = {}));
console.log(keyof, typeof StatusCode);
export {};
