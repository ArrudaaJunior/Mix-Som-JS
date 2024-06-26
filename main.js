function tocaSom(seletorAudio) {
    elemento = document.querySelector(seletorAudio);
    
    if ( elemento && elemento.localName === 'audio') {
            elemento.play();
    }else {
        //alert('Elemento não encontrado');
        console.log('Elemento não encontrado ou seletor inválido');
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla');

//Para
for (let contador = 0 ; contador < listaDeTeclas.length; contador++) {

    const tecla = listaDeTeclas[contador]
    const instrumento = tecla.classList[1];

    //Template string
    const idAudio = `#som_${instrumento}`;

    // console.log(idAudio)

    tecla.onclick = function() {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (evento) {

        // console.log(evento)

        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }

    // console.log(contador);
}
