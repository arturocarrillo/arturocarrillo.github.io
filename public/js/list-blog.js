//Crear lista para index

/* listar los titulos del article */
const listItems = document.getElementById('itemsList');
const arrayItems = document.querySelectorAll(".title");
const fragment = document.createDocumentFragment();

arrayItems.forEach(item => {
    const btnItem = document.createElement("a");
    //clase de estilos para el enlace
    btnItem.classList.add('listItem');
    //clase para aumentar el size del texto
    btnItem.classList.add('text-read');
    // pasamos el contenido del arrego al enlace
    btnItem.textContent = item.textContent;
    //creamos la etiqueta enlace en el DOM
    fragment.appendChild(btnItem);

});
//agregamos el enlace dentreo del contenedor en el DOM
listItems.appendChild(fragment);


/* fixed menu list */

window.onscroll = function() { fixedTop() };

const itemsList = document.getElementById("itemsGroup");
const fixedList = itemsList.offsetTop;

function fixedTop() {

    if (window.pageYOffset > fixedList) {
        itemsList.classList.add("fixedList");
    } else {
        itemsList.classList.remove("fixedList");
    }

}