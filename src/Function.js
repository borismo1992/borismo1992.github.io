const play = function () {
    document.getElementById('btn1').disabled = true;
    function bell() {
        var audio1 = new Audio('HKSGI_APPLICATION_bell.m4a');
        audio1.play();
    }
    function chant() {
        var audio2 = new Audio('chant.mp3');
        audio2.play();
    }
    function three() {
        var three = new Audio('027.m4a');
        three.play();
    }
    bell();
    setTimeout(bell, 2000);
    setTimeout(bell, 4000);
    setTimeout(three, 6000);
    setTimeout(chant, 12500);
    setTimeout(bell, 901500);
    setTimeout(bell, 903500);
    setTimeout(bell, 905000);
    setTimeout(three, 907000);
}

export default play;