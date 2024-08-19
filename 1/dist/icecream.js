function IceCream(big, chocolate, caramel, berries, marshmallow) {
    if (big === void 0) { big = false; }
    if (chocolate === void 0) { chocolate = false; }
    if (caramel === void 0) { caramel = false; }
    if (berries === void 0) { berries = false; }
    if (marshmallow === void 0) { marshmallow = false; }
    var sizeCost = big == true ? 25 : 10;
    var str = big == true ? "велике морозиво (25грн)" : "маленьке морозиво (10грн)";
    var toppingsCost = 0;
    if (chocolate) {
        toppingsCost += 5;
        str += ", з шоколадом (+5грн)";
    }
    if (caramel) {
        toppingsCost += 6;
        str += ", з карамеллю (+6грн)";
    }
    if (berries) {
        toppingsCost += 10;
        str += ", з ягодами (+10грн)";
    }
    if (marshmallow) {
        toppingsCost += 5;
        str += " додатково посипане маршмеллоу (+5грн)";
    }
    str += ".";
    console.log("Ви замовили " + str);
    return sizeCost + toppingsCost;
}
function getFromPrompt(message) {
    var numb;
    while (true) {
        var input = prompt(message);
        numb = parseFloat(input || '');
        if (numb === 0 || numb === 1)
            break;
        else
            alert('Invalid input. Please enter 0 or 1.');
    }
    return (numb == 1);
}
function main() {
    var size = getFromPrompt('Enter the size of the ice cream (for small enter "0", for large enter "1"):');
    var chocolate = getFromPrompt('Add chocolate topping? ("1" for yes/"0" for no)');
    var caramel = getFromPrompt('Add caramel topping? ("1" for yes/"0" for no)');
    var berries = getFromPrompt('Add berries topping? ("1" for yes/"0" for no)');
    var withMarshmallow = getFromPrompt('Add marshmallow topping? ("1" for yes/"0" for no)');
    var totalCost = IceCream(size, chocolate, caramel, berries, withMarshmallow);
    console.log("\u0412\u0441\u044C\u043E\u0433\u043E: ".concat(totalCost, " \u0433\u0440\u043D"));
}
main();
//# sourceMappingURL=icecream.js.map