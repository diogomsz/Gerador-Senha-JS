const randNum = (min, max) => Math.floor(Math.random() * (max - min) + min);

const geraMaiuscula = () => String.fromCharCode(randNum(65, 91));
const geraMinuscula = () => String.fromCharCode(randNum(97, 123));
const geraNumero = () => String.fromCharCode(randNum(48, 58));

const simbolos = ',.;-^[]{}!@#$%*()_+=-';
const geraSimbolo = () => simbolos[randNum(0, simbolos.length)];

export default function geraSenha(qtde, maiusculas, minusculas, numero, simbolo) {
    const senhaArray = [];
    qtde = Number(qtde);

    for(let i = 0; i < qtde; i++) {
        maiusculas && senhaArray.push(geraMaiuscula());
        minusculas && senhaArray.push(geraMinuscula());
        numero && senhaArray.push(geraNumero());
        simbolo && senhaArray.push(geraSimbolo());
    }

    return senhaArray.sort(() => 0.5 - Math.random()).join('').slice(0, qtde);
}
