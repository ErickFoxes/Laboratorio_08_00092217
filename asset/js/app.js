
const navSlide = ()=>{
    const burger = document.querySelector(".burger"); 
    const nav = document.querySelector(".nav-links");
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener("click", ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) =>{
            
            if(link.style.animation)
            {
                link.style.animation = '';
            }
            else{
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7+0.3}s`;
            }
            
        });
        burger.classList.toggle('toggle');
    });

}

navSlide();
/*********************************Colocar aca el desarrollo de su ejercicio***************************/

var cont = 1;
var bitacoras =[];
var formulario = document.getElementById("bitacora");
//

formulario.addEventListener("submit",(evt) => {
    evt.preventDefault();
    let bitacora = {
        cant:cont,
        fecha:formulario[1].value,
        descripcion: formulario[2].value,
        cantidad: formulario[3].value
    }
    bitacoras.push(bitacora);
    cont++;
    mostrar();
});
const crearElemento = (bitacora,tbody) =>{
    let tr = document.createElement("tr");
    Object.values(bitacora).forEach(item => {
        let td = document.createElement("td");
        let content = document.createTextNode(item);
        td.appendChild(content);
        tr.appendChild(td);
        tr.setAttribute('class','click');
    });
    tbody.appendChild(tr);
}
/*
1. la variable form con el id formulario y todo los elementos que se encuentra dentro.
2. nada en este caso, pero previene que un evento suceda.
3. El formulario[0] contiene todos las etiquetas dentro del form, formulario[1] contiene el input de la fecha, el formulario[2] contiene el text area, formulario[3] contiene el input number de cantidad de horas y formulario[4] contiene el input submit del formulario.
4. tr contiene a los td y los td contienen la variable content.
5. El contenido(texto,numeros,etc) que se encuentre dentro de bitacora.
6. tbody contendrá todos los tr(y los td y content dentro de estos).
7. Obtiene de arreglo bitacora el contenido que podrá en las celdas de la tabla, guardandolas en tbody.
8. Obtiene el primer nodo del tbody.
9. Se obtiene el texto que contiene el nodo seleccionado.
10. los elementos que tengan la clase tabla-tbc y que dentro tengan un tbody.
11. cuenta los nodos hijos de elemento.
12. a cada tr, en sus tds se les agregarán los valores dentro de los nodos que recorra el for each
13. elimina los datos de la tabla y los agrega de nuevo

*/
const eliminar = (tbody)=>{
    while(tbody.firstChild){
        tbody.removeChild(tbody.firstChild);
    }
}
const agregar= ()=>{
    var eventtr = document.querySelectorAll(".click");
    eventtr.forEach((item,index)=> {
        item.addEventListener("click",() =>{
            document.querySelector("#fecha").value = item.childNodes[0].textContent;
            document.querySelector("#descp").value = item.childNodes[1].textContent;
            document.querySelector("#cant").value = item.childNodes[2].textContent;
        });
    })
}

const mostrar = () =>{
    if (document.querySelector(".tabla-btc tbody").childElementCount > 0) {
        eliminar(document.querySelector(".tabla-btc tbody"));
    }
    bitacoras.forEach(item =>{
        crearElemento(item, document.querySelector(".tabla-btc tbody"));
    });
    agregar();
}
