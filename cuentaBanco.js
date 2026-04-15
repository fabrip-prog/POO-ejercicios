class CuentaBancaria {
    #saldo;
    constructor(titular, saldoInicial) {
        this.titular = titular;
        this.#saldo = saldoInicial;
    }
    depositar(monto) {
        if (monto <= 0) {
            throw new Error("Monto inválido");
        }
        this.#saldo += monto;
    }
    retirar(monto) {
        if (monto > this.#saldo) {
            throw new Error("Fondos insuficientes");
        }
        this.#saldo -= monto;
    }

    getSaldo() {
        return this.#saldo;
    }
}
const cuenta1 = new CuentaBancaria("Fabrizio", 1000);
cuenta1.depositar(500);
console.log(cuenta1.getSaldo()); 
cuenta1.retirar(200);
console.log(cuenta1.getSaldo());
