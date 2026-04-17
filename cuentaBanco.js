class CuentaBancaria {
    #saldo;
    #historial;
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
        this.#historial = [];
    }
    depositar(monto) {
        if (monto <= 0) {
            throw new Error("Monto inválido");
        }
        this.#saldo += monto;
        this.#historial.push({ tipo: "depósito", monto });
    }
    retirar(monto) {
        if (monto > this.#saldo && monto <= 1000000) {
            throw new Error("Fondos insuficientes");
        }
        this.#saldo -= monto;
        this.#historial.push({ tipo: "retiro", monto });
    }

    getSaldo() {
        return this.#saldo;
    }

    getHistorial() {
        return this.#historial;
    }
}
const cuenta1 = new CuentaBancaria("Fabrizio", 1000);
cuenta1.depositar(500);
console.log(cuenta1.getSaldo()); 
cuenta1.retirar(200);
console.log(cuenta1.getSaldo());
console.log(cuenta1.getHistorial());
