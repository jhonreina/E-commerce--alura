import { productosServicios } from "../service/product-service.js";

const crearNuevaCard = (name, imageUrl, price, id) => {
  const card = document.createElement("div");
    const contenido =`
                    <div class="producto">
                        <img src="${imageUrl}" alt="producto" class="producto__imagen--json">
                        <div class="producto__contenido">
                            <h4 class="producto__titulo">${name}</h4>
                            <p class="producto__precio">$${price}</p>
                            <p class="producto__codigo">#${id}</p>
                            <a href="../producto.html?id=${id}" class="producto__ver">ver producto</a>
                        </div>
                        <div class="iconos">
                           <button class="btn-icono" id="${id}"><img src="./assets/IMG/eliminar.svg" alt="eliminar"></button>
                           <a href="../actualizarProducto.html?id=${id}" class="btn-icono"><img src="./assets/IMG/edit_black_24dp 1.svg" alt="eliminar"></a>
                        </div>
                    </div>
                     `
    card.innerHTML = contenido;
    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productosServicios.eliminarProducto(id).then(() => {
            alert("Producto eliminado con exito")
        }).catch(err => alert("Ocurrio un error"))
    })
    card.dataset.id = id
    return card;
};


const section = document.querySelector("[data-product]");

productosServicios
    .listaProducto()
    .then((producto) => {
        producto.forEach(({name, imageUrl, price, id}) => {
            const nuevaCard = crearNuevaCard(name, imageUrl, price, id);
            section.appendChild(nuevaCard)
        });
    })  
    .catch((error)=>alert("Ocurrio un error"))


