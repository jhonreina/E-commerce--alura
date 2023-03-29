import { productosServicios } from "../service/product-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault()
    const imageUrl = document.querySelector("[data-Url]").value; 
    const name = document.querySelector("[data-nombre]").value
    const price = document.querySelector("[data-precio]").value
    productosServicios.crearProducto(imageUrl,name, price).then(() => {
        alert('Registro exitoso')
    }).catch(err => console.log(err))
    
})