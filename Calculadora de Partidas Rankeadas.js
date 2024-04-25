function calculadora_rankeada(jogador, vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas;
    
    const FERRO = "Ferro";
    const BRONZE = "Bronze";
    const PRATA = "Prata";
    const OURO = "Ouro";
    const DIAMANTE = "Diamante";
    const LENDARIO = "Lendário";
    const IMORTAL = "Imortal";

    let nivel;
    
    if (saldoVitorias < 10) {
        nivel = FERRO;
    } else if (saldoVitorias <= 20) {
        nivel = BRONZE;
    } else if (saldoVitorias <= 50) {
        nivel = PRATA;
    } else if (saldoVitorias <= 80) {
        nivel = OURO;
    } else if (saldoVitorias <= 90) {
        nivel = DIAMANTE;
    } else if (saldoVitorias <= 100) {
        nivel = LENDARIO;
    } else {
        nivel = IMORTAL;
    }

    print("O Herói " + jogador + " tem saldo de " + saldoVitorias + " e está no nível " + nivel + ".");
    return nivel;
}

calculadora_rankeada("Matheus", 50, 30);