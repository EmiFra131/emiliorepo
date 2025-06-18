let form = document.getElementById("mainform");
let cp = document.getElementById("cp");
let nameus = document.getElementById("nombre");
let eda = document.getElementById("edad");
let captcha = document.getElementById("captcha");
let ctext = document.getElementById("text")

let generos = ["masc", "fem", "otro"];
let intereses = ["arte", "musica", "deportes", "tecnologia"];
let paises = ["mex", "esp", "col", "arg", "ven", "per", "chi", "otro"];

let captca1 = Math.floor(Math.random() * 100);
let captca2 = Math.floor(Math.random() * 100);

ctext.textContent = "Resuelve esta suma " + captca1 + " + " + captca2;

console.log( captca1 + "  " + captca2);

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("no se puede enviar este formulario")

    let generous = document.querySelector("input[name='gen']:checked");
    let interesesus = document.querySelector("input[name='pref']:checked");
    let paisus = document.getElementById("pais");

    if(nameus.value == ""){
        console.log("el nombre no puede estar vacio");
        let err = document.getElementById("err1");
        err.textContent = "El nombre no puede estar vacio"
    }
    if(isNaN(eda.value) || eda.value == ""){
        console.log("la edad (" + eda.value + ") no es una edad valida");
        let err = document.getElementById("err2");
        err.textContent = "LA edad no es valida"
    }

    if(isNaN(cp.value) || cp.value.length !== 5 || cp.value == ""){
        console.log("el codigo postal (" + cp.value + ") no es un codigo postal valido");
        let err = document.getElementById("err3");
        err.textContent = "El codigo postal no es correcto"
    }

    if(generos.indexOf(generous.value) == -1){
        console.log("Este genero es invalido");
        let err = document.getElementById("err4");
        err.textContent = "Este genero es invalido"
    }
    else{
        console.log(generous.value);
    }


    if(intereses.indexOf(interesesus.value) == -1){
        console.log("Este interes es invalido");
        let err = document.getElementById("err5");
        err.textContent = "Este interes es invalido"
    }
    
    if(paises.indexOf(paisus.value) == -1){
        console.log("Este pais es invalido");
        let err = document.getElementById("err6");
        err.textContent = "Este pais es invalido"
    }

    if(captcha.value !== captca1 + captca2){
        console.log("captcha invalido");
    }
})


