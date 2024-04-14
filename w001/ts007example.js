var Calculator = /** @class */ (function () {
    // Sınıf yapıcı yöntemi (constructor)
    function Calculator() {
        // Yapıcı yöntem sadece başlatma işlemleri için kullanılmalıdır.
        // Bu örnekte herhangi bir başlatma işlemi yapılması gerekmeyebilir.
    }
    Calculator.prototype.add = function (a, b) {
        return a + b;
    };
    Calculator.prototype.sub = function (a, b) {
        return a - b;
    };
    Calculator.prototype.div = function (a, b) {
        return a / b;
    };
    Calculator.prototype.mul = function (a, b) {
        return a * b;
    };
    return Calculator;
}());
