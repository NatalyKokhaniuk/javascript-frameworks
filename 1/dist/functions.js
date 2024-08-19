function processInput(message, count) {
    if (count === void 0) { count = 1; }
    console.log("Message: ".concat(message));
    console.log("Count: ".concat(count));
    for (var i = 0; i < count; i++) {
        console.log(message);
    }
}
processInput.call(null, "Message");
processInput.call(null, "Message2", 5);
processInput.call(null, "Message3", 7);
//# sourceMappingURL=functions.js.map