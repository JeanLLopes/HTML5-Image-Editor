$(function () {
    //INICIALIZA AS VARIAVEIS 
    var imagemREsultado = document.getElementById('imagemResultado');
    var escalaCinza;
    var blur;
    var brilho;
    var contraste;
    var hueRotate;
    var opacidade;
    var invert;
    var saturacao;



    $('#btnUrlImage').on('click', function () {
        var imageUrl = $('#inputImgUrl').val();
        $('img').attr('src', imageUrl);
        $('#inputImgUrl').val('');
    });


    $('input[type=range]').on('change', function () {
        escalaCinza =   $("#inputEscalaCinza").val();
        blur =          $("#inputBlur").val();
        brilho =        $("#inputBrilho").val();
        contraste =     $("#inputContraste").val();
        hueRotate =     $("#inputHueRotate").val();
        opacidade =     $("#inputOpacidade").val();
        invert =        $("#inputInvert").val();
        saturacao =     $("#inputSaturacao").val();


        //CASO DESEJE USAR O MESMO CODIGO EM NAVEDORES ANTIGOS 
        //COLOQUE O PREFIXO PARA RENDERIZAÇÃO
        //EX:
        //CHROME = -webkit-filter
        //OPERA = -o-filter

        //A MANEIRA APRESENTADA ABAIXO É A MANEIRA DEFAULT
        $('img').css(
            '-webkit-filter',
            'grayscale(' + escalaCinza + '%) ' +
            'blur(' + blur +'px) ' + 
            'brightness('+ brilho + '%) ' +
            'contrast('+ contraste +'%) ' +
            'hue-rotate(' + hueRotate + 'deg) ' +
            'opacity(' + opacidade + '%) ' +
            'invert(' + invert + '%) ' +
            'saturate(' + saturacao + '%)');
        
    });



    $('#btnBaixarImagem').on('click', function () {
        imagemREsultado = document.getElementById('imagemResultado');

        var altura = imagemREsultado.offsetHeight;
        var largura = imagemREsultado.offsetWidth;

        var canvas = document.getElementById("canvas");
        canvas.width = largura + 100;
        canvas.height = altura ;

        rasterizeHTML.drawHTML(imagemREsultado.outerHTML, canvas);

        $('#divCanvas').css('display', 'inline');
        $('#imagemResultado').css('display', 'none');
    });
})

