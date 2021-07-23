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

const updateButton = document.getElementById("update");
updateButton.addEventListener('click',update);

function update(){
    var r =document.getElementById("right").value;
    var l =document.getElementById("left").value;
    var t =document.getElementById("top").value;
    var b =document.getElementById("bottom").value;

    document.getElementById("e").innerHTML=l;
    document.getElementById("s").innerHTML=b;
    document.getElementById("w").innerHTML=r;
    document.getElementById("n").innerHTML=t;

    if((document.getElementById("e").value === 'n' || document.getElementById("e").value === 'N') && (document.getElementById("s").value === 'w' || document.getElementById("s").value === 'W') && (document.getElementById("w").value === 's' || document.getElementById("w").value === 'S') && (document.getElementById("n").value === 'e' || document.getElementById("n").value === 'E'))
    {
        document.getElementById("vitoria").innerHTML = "Victory";
        console.log('v');
    }
    else
    {
        document.getElementById("vitoria").innerHTML = "Defeat";
        console.log('d')
    }
}


