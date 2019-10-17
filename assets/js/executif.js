// Boutons 3 scènes
document.getElementById("b1").addEventListener("click", scene1);
document.getElementById("b2").addEventListener("click", scene2);
document.getElementById("b3").addEventListener("click", scene3);

function scene_name() {
    document.getElementById("b1").innerText = "Scène 1";
    document.getElementById("b2").innerText = "Scène 2";
    document.getElementById("b3").innerText = "Scène 3";
}


// Le temps entre chaque lettres
let temps = 5000;
// Le temps entre chaque phrase
let sentence = 5000
    // Les accumulateurs
let i = 0;
let ii = 0;
let iii = 0;
// Les fonctions des scènes
function scene1() {
    if (i < s1.length) {
        scene1m();
        i++;

        document.getElementById("b1").innerText = i + "/" + (s1.length) + "  >>";
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").style.display = "none";
        if (i === s1.length) {
            document.getElementById("b1").innerText = i + "/" + (s1.length) + "  >|";

        }
    } else {
        scene_name();
        document.getElementById("b2").style.display = "inline-block";
        document.getElementById("b3").style.display = "inline-block";
        document.getElementById("b1").style.display = "none";
        window.location.reload()


    }

    function scene1m() {
        let x = s1[i]
        switch (x.e) {
            case 0:
                temps = 500;
                break;
            case 1:
                temps = 200;
                break;
            case 2:
                temps = 750;
                break;
            case 3:
                temps = 1000;
                break;
            default:
                temps = 500;
        }
        name.innerText = x.p;
        tb.innerText = x.s;
        bg.style.backgroundImage = 'url(' + 'assets/img/decors/' + x.d + '.png)';
        if (x.pos==="droite") {
            t.style.backgroundImage = 'url(assets/img/TextBox-droite.png)';
            p2.src = "assets/img/personnages/" + x.p + "/" + x.e + ".png";
            p2.alt = x.p;
            p1.style.filter="brightness(50%)";
            p2.style.filter="brightness(100%)";
            if(x.a===1){
                p2.classList.add("entrep2");
            }else{
                p2.classList.remove("entrep2");

            }
        } else {
            t.style.backgroundImage = 'url(assets/img/TextBox-gauche.png)';
            p1.src = "assets/img/personnages/" + x.p + "/" + x.e + ".png";
            p1.alt = x.p;
            p2.style.filter="brightness(50%)";
            p1.style.filter="brightness(100%)";
            if(x.a===1){
                p1.classList.add("entrep1");
            }else{
                p1.classList.remove("entrep1");
  
            }
        }
    }
}

function scene2() {
    if (ii < s2.length) {
        scene2m();
        ii++;

        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").innerText = ii + "/" + (s2.length) + "  >>";
        document.getElementById("b3").style.display = "none";
        if (ii === s2.length) {
            document.getElementById("b2").innerText = ii + "/" + (s2.length) + "  >|";

        }
    } else {
        scene_name();
        document.getElementById("b1").style.display = "inline-block";
        document.getElementById("b3").style.display = "inline-block";
        document.getElementById("b2").style.display = "none";
        window.location.reload()

    }

    function scene2m() {
        let xx = s2[ii]
        switch (xx.e) {
            case 0:
                temps = 500;
                break;
            case 1:
                temps = 200;
                break;
            case 2:
                temps = 750;
                break;
            case 3:
                temps = 1000;
                break;
            default:
                temps = 500;
        }

        name.innerText = xx.p;
        tb.innerText = xx.s;
        bg.style.backgroundImage = 'url(' + 'assets/img/decors/' + xx.d + '.png)';
        if (xx.pos==="droite") {
            t.style.backgroundImage = 'url(assets/img/TextBox-droite.png)';
            p2.src = "assets/img/personnages/" + xx.p + "/" + xx.e + ".png";
            p2.alt = xx.p;
            p1.style.filter="brightness(50%)";
            p2.style.filter="brightness(100%)";           
            if(xx.a===1){
                p2.classList.add("entrep2");
            }else{
                p2.classList.remove("entrep2");
  
            }
        } else {
            t.style.backgroundImage = 'url(assets/img/TextBox-gauche.png)';
            p1.src = "assets/img/personnages/" + xx.p + "/" + xx.e + ".png";
            p1.alt = xx.p;
            p2.style.filter="brightness(50%)";
            p1.style.filter="brightness(100%)";
            if(xx.a===1){
                p1.classList.add("entrep1");
            }else{
                p1.classList.remove("entrep1");

            }
        }

    }
}

function scene3() {
    if (iii < s3.length) {
        scene3m();
        document.getElementById("b1").style.display = "none";
        document.getElementById("b2").style.display = "none";
        document.getElementById("b3").innerText = iii + "/" + (s3.length) + "  >>";
        iii++;
        if (iii === s3.length) {
            document.getElementById("b3").innerText = iii + "/" + (s3.length) + "  >|";

        }
    } else {
        scene_name();
        document.getElementById("b1").style.display = "inline-block";
        document.getElementById("b2").style.display = "inline-block";
        document.getElementById("b3").style.display = "none";
        window.location.reload()

    }

    function scene3m() {

        let xxx = s3[iii]
        switch (xxx.e) {
            case 0:
                temps = 500;
                break;
            case 1:
                temps = 200;
                break;
            case 2:
                temps = 750;
                break;
            case 3:
                temps = 1000;
                break;
            default:
                temps = 500;
        }
        name.innerText = xxx.p;
        tb.innerText = xxx.s;
        bg.style.backgroundImage = 'url(' + 'assets/img/decors/' + xxx.d + '.png)';
        if (xxx.pos==="droite") {
            t.style.backgroundImage = 'url(assets/img/TextBox-droite.png)';
            p2.src = "assets/img/personnages/" + xxx.p + "/" + xxx.e + ".png";
            p1.style.filter="brightness(50%)";
            p2.style.filter="brightness(100%)";
            p2.alt = xxx.p;
            if(xxx.a===1){
                p2.classList.add("entrep2");
            }else{
                p2.classList.remove("entrep2");
            }

        } else {
            t.style.backgroundImage = 'url(assets/img/TextBox-gauche.png)';
            p1.src = "assets/img/personnages/" + xxx.p + "/" + xxx.e + ".png";
            p1.alt = xxx.p;
            p2.style.filter="brightness(50%)";
            p1.style.filter="brightness(100%)";
            if(xxx.a===1){
                p2.classList.add("entrep1");
            }else{
                p2.classList.remove("entrep1");
  
            }
        }
    }
}