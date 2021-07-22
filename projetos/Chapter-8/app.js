document.getElementById("e").innerHTML='';
document.getElementById("s").innerHTML='';
document.getElementById("w").innerHTML='';
document.getElementById("n").innerHTML='';

const button = document.getElementById('seta1');
button.addEventListener('click',mudaPosicao);

const button1 = document.getElementById('seta2');
button1.addEventListener('click',mudaPosicao);

const button2 = document.getElementById('seta3');
button2.addEventListener('click',mudaPosicao);

function mudaPosicao()
{
    var vetor = ['E','S','N','W']
    let randomNumber;
    let tmp;
    for (let i = vetor.length; i;) 
    {
        randomNumber = Math.random() * i-- | 0;
        tmp = vetor[randomNumber];
        // troca o número aleatório pelo atual
        vetor[randomNumber] = vetor[i];
        // troca o atual pelo aleatório
        vetor[i] = tmp;
    }
    //console.log(vetor)
    document.getElementById("e").innerHTML=vetor[0];
    document.getElementById("s").innerHTML=vetor[1];
    document.getElementById("w").innerHTML=vetor[2];
    document.getElementById("n").innerHTML=vetor[3];
}


const restartButton = document.getElementById("restart");
restartButton.addEventListener('click',apagaLetras);

function apagaLetras(){
    document.getElementById("e").innerHTML='';
    document.getElementById("s").innerHTML='';
    document.getElementById("w").innerHTML='';
    document.getElementById("n").innerHTML='';

    document.getElementById("right").value='';
    document.getElementById("left").value='';
    document.getElementById("top").value='';
    document.getElementById("bottom").value='';
}


