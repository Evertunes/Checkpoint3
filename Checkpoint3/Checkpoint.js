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
    }

    this.faltascont = function (faltas) {
        var i = 0; 
    }

}
const aluno1 = new Aluno('Everton Alves', 10, [10, 7, 5]);
const aluno2 = new Aluno('José da Silva', 5, [8, 5, 6]);
const aluno3 = new Aluno('Dona Maria', 20, [6, 8, 10]);
const aluno4 = new Aluno('Nicolas Alves', 1, [10, 8, 8]);


console.log(aluno1.mediaNotas());
console.log(aluno2.mediaNotas());
console.log(aluno3.mediaNotas());
console.log(aluno4.mediaNotas());

/*
function Aluno(nome, qtdFaltas, notas) {
    this.nome = nome;
    this.qtdFaltas = qtdFaltas;
    this.notas = notas;

    this.mediaNotas = function (notas) {
        var i = 0;
        let summ = 0;
        let arrayLen = this.notas.length;

        while (i < arrayLen) {
            summ = summ + this.notas[i++];
        }
        return summ / arrayLen;
    }
}

const aluno1 = new Aluno('Ariane França', 2, [10, 9, 10]);
const aluno2 = new Aluno('João Pedro', 10, [8, 9, 9]);
const aluno3 = new Aluno('Maria Souza', 5, [9, 5, 10]);

console.log(aluno1.mediaNotas());
console.log(aluno2.nome);
console.log(aluno3.mediaNotas());
console.log(aluno3.qtdFaltas);
*/