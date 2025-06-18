let form = document.getElementById("mainform");
let cp = document.getElementById("cp");
let nameus = document.getElementById("nombre");
let eda = document.getElementById("edad");

let generos = ["masc", "fem", "otro"];
let intereses = ["arte", "musica", "deportes", "tecnologia"];

form.addEventListener("submit", function(event){
    event.preventDefault();
    alert("no se puede enviar este formulario")

    let generous = document.querySelector("input[name='gen']:checked");
    let interesesus = document.querySelector("input[name='pref']:checked");

    if(nameus.value == ""){
        console.log("el nombre no puede estar vacio");
    }
    if(isNaN(eda.value) || eda.value == ""){
        console.log("la edad (" + eda.value + ") no es una edad valida");
    }

    if(isNaN(cp.value) || cp.value.length !== 5 || cp.value == ""){
        console.log("el codigo postal (" + cp.value + ") no es un codigo postal valido");
    }

    if(generos.indexOf(generous.value) == -1){
        console.log("La carrera es invalidEste genero es invalido");
    }
    else{
        console.log(generous.value);
    }


    if(intereses.indexOf(interesesus.value) == -1){
        console.log("Este interes es invalido");
    }
    
    
})


