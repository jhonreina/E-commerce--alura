import { productosServicios } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]")

const obtenerInformacion = async () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    if (id === null) {
        alert("ocurrio un error")
    }

    const imageUrl = document.querySelector("[data-Url]")
    const name = document.querySelector("[data-nombre]")
    const price = document.querySelector("[data-precio]")

    try {
        const producto = await productosServicios.detalleProducto(id)
        imageUrl.value = producto.imageUrl;
        name.value = producto.name;
        price.value = producto.price;
    
    } catch (error) {
        console.log("catch Error -", error)    
    }

    
};

obtenerInformacion();

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

    const imageUrl = document.querySelector("[data-Url]").value;
    const name = document.querySelector("[data-nombre]").value;
    const price = document.querySelector("[data-precio]").value;

    productosServicios.actualizarProducto(imageUrl, name, price, id).then(() => {
        window.location.href = "../productos.html"
    
    })
})