interface Calculation {
    add(a: number, b: number): number;
    sub(a: number, b: number): number;
    mul(a: number, b: number): number;
    div(a: number, b: number): number;
}

class Calculator implements Calculation {

    // Sınıf yapıcı yöntemi (constructor)
    constructor() {
        // Yapıcı yöntem sadece başlatma işlemleri için kullanılmalıdır.
        // Bu örnekte herhangi bir başlatma işlemi yapılması gerekmeyebilir.
    }

    add(a: number, b: number): number {
        return a + b;
    }

    sub(a: number, b: number): number {
        return a - b;
    }

    div(a: number, b: number): number {
        return a / b;
    }

    mul(a: number, b: number): number {
        return a * b;
    }
}
