var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var a = Color.Red;
var b = Color.Green;
var c = Color.Blue;
var colorName = Color[1]; // kết quả sẽ là Green
console.log(c);
