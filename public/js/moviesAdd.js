window.onload = function(){
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inputTitle = document.getElementById("titulo");
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.addEventListener('mouseover',function(){
        titulo.style.color='red';
    });
    titulo.addEventListener('mouseout',function(){
        titulo.style.color='black';
    });

    let estadoSecreto = 0;
    inputTitle.onkeypress = (e) => {
    switch (estadoSecreto) {
        case 0:
            e.key == "s" ? estadoSecreto++ : (estadoSecreto = 0);
            break;
        case 1:
            e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
            break;
        case 2:
            e.key == "c" ? estadoSecreto++ : (estadoSecreto = 0);
            break;
        case 3:
            e.key == "r" ? estadoSecreto++ : (estadoSecreto = 0);
            break;
        case 4:
            e.key == "e" ? estadoSecreto++ : (estadoSecreto = 0);
            break;
        case 5:
            e.key == "t" ? estadoSecreto++ : (estadoSecreto = 0);
            break;
        case 6:
            if (e.key == "o") {
            alert("SECRETO MAGICO");
            }
        estadoSecreto = 0;
        break;
    }
    console.log(estadoSecreto);
    };
    // let secretVar =0;
    // let input = document.getElement = document.getElementById("titulo")
    // input.addEventListener("keyup", newKey);
    // function newKey(){
    //     console.log(input.value)
    //     switch (input.value){
    //         case "s" : secretVar == 0 ? secretVar =1:secretVar =0; break;
    //         // case  secretVar==0:
    //         case "se" :  secretVar == 1 ? secretVar =2:secretVar =0; break;
    //         // case  secretVar==1:
    //         case "sec" : secretVar == 2 ? secretVar =3:secretVar =0; break;
    //         // case  secretVar==2:
    //         case "secr" : secretVar == 3 ? secretVar =4:secretVar =0; break;
    //         // case  secretVar==3:
    //         case "secre" :  secretVar == 4 ? secretVar =5:secretVar =0; break;
    //         // case  secretVar==4:
    //         case "secret" : secretVar == 5 ? secretVar =6:secretVar =0; break;
    //         // case  secretVar==5:
    //         case "secreto" : if( secretVar == 6){alert("secreto ok"); secretVar = 0} ; break;
    //         default : console.log("default"); secretVar=0; break;
    //     }
    // }

}