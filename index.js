import entradaDados from 'readline-sync';

function verifica(str) {
    let contador = 0;

    for (let i = 0; i <= str.length; i++) {
        if (str[i] === 'a' || str[i] === 'A') {
            contador++;
        }
    }

    if (contador > 0) {
        return `A letra 'a' aparece ${contador} vez(es) na string.`;
    } else {
        return `A letra 'a' não foi encontrada na string.`;
    }
}

let palavra_escolhida = entradaDados.question("Informe uma palavra: ");
console.log(verifica(palavra_escolhida));