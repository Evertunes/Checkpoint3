function Aluno(nome, faltas, notas) {
  this.nome = nome;
  this.faltas = faltas;
  this.notas = notas;

  this.mediaNotas = function (notas) {
    var i = 0; //Valor do array
    let soma = 0;
    let lendoarray = this.notas.length; // lê a quantidade de arrays
    while (i < lendoarray) {
      soma = soma + this.notas[i];
      i++;
    }
    return soma / lendoarray;
  };

  this.calculaFaltas = function (faltas) {
    let numeroFaltas = this.faltas;
    let soma = 0;
    soma = numeroFaltas + 1;
    return soma;
  };
}

const aluno1 = new Aluno("Everton Alves", 10, [10, 7, 5]);
const aluno2 = new Aluno("José da Silva", 5, [8, 5, 6]);
const aluno3 = new Aluno("Dona Maria", 20, [6, 8, 10]);
const aluno4 = new Aluno("Nicolas Alves", 1, [10, 8, 8]);
const aluno5 = new Aluno("João Da Silva", 3, [5, 10, 8]);

/*console.log(aluno1.nome);
console.log(aluno1.mediaNotas());
console.log("O numero de faltas é: " + aluno1.calculaFaltas());
console.log(aluno2.nome);
console.log(aluno2.mediaNotas());
console.log("O numero de faltas é: " + aluno2.calculaFaltas());
console.log(aluno3.nome);
console.log(aluno3.mediaNotas());
console.log("O numero de faltas é: " + aluno3.calculaFaltas());
console.log(aluno4.nome);
console.log(aluno4.mediaNotas());
console.log("O numero de faltas é: " + aluno4.calculaFaltas());
*/

let curso = {
  nomeDoCurso: "CTD",
  notaAprovacao: 7,
  faltaMAx: 5,
  listaDeEstudante: [aluno1, aluno2, aluno3, aluno4],

  addAluno(aluno) {
    let i = 0;
    for (i = 0; i < Array.length; i++) {
      this.listaDeEstudante.push(aluno);
      return;
    }
  },
  aprovacao(aprov) {
    if (aprov > this.listaDeEstudante.length - 1) return "Numero invalido";
    let aluno = this.listaDeEstudante[aprov];
    return aluno.faltas < this.maxFaltas &&
      aluno.mediaNotas() >= this.notaAprovacao
      ? "Aprovado"
      : aluno.mediaNotas() >= this.notaAprovacao * 1.1
      ? "Aprovado"
      : "Reprovado";
  },
  listaAprovacao() {
    let listaAprov = [];
    for (let i = 0; i < this.listaDeEstudante.length; i++) {
      listaAprov.push(this.aprovacao(i));
    }
    return listaAprov;
  },
};
curso.addAluno(aluno5);

/*
 console.log(curso.listaDeEstudante[0].nome);
 console.log(curso.aprovacao(0));

 console.log(curso.listaDeEstudante[1].nome);
 console.log(curso.aprovacao(1));

 console.log(curso.listaDeEstudante[2].nome);
 console.log(curso.aprovacao(2));

 console.log(curso.listaDeEstudante[3].nome);
 console.log(curso.aprovacao(3));

 console.log(curso.aprovacao(0));

console.log(curso.listaAprovacao());
*/