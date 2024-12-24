onload = () =>{
        document.body.classList.remove("container");
};

window.addEventListener('load', function () {
        var audio = document.querySelector('audio');
        audio.play().catch(function (error) {
            console.log('Erro ao tentar reproduzir o áudio:', error);
        });
    });
    