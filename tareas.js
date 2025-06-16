let contenedor = document.getElementById("conte");

let anadirbut = document.getElementById("ana");
let eliminarbut = document.getElementById("eliminar");



anadirbut.addEventListener("click", ()=> {
    let tarea = document.createElement("div");
    tarea.textContent = "Tarea";
    tarea.classList.add("tarea");
    contenedor.append(tarea);
});

eliminarbut.addEventListener("click", ()=> {
    contenedor.lastChild.remove()
});
