let derrotas = 15;
let vitorias = 50;

let saldo = obterSaldo(vitorias, derrotas);
let nivel = obterNivel(vitorias);

function obterSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

function obterNivel(vitorias) {
  if (vitorias < 10) {
      return "Ferro";
  } else if (vitorias >= 11 && vitorias <= 20) {
      return "Bronze";
  } else if (vitorias >= 21 && vitorias <= 50) {
      return "Prata";
  } else if (vitorias >= 51 && vitorias <= 80) {
      return "Ouro";
  } else if (vitorias >= 81 && vitorias <= 90) {
      return "Diamante";
  } else if (vitorias >= 91 && vitorias <= 100) {
      return "Lendário";
  } else if (vitorias >= 101) {
      return "Imortal";
  } else {
      return "Default";
  }
}

console.log("O Herói tem de saldo de " + saldo + "está no nível de " + nivel);
