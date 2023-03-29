// GET
const listaProducto = () => 
    fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json())
        // .catch(error => console.log(error));

const crearProducto = (imageUrl,name,price) => {
    return fetch("http://localhost:3000/producto", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify({imageUrl,name, price, id: uuid.v4()}),
    });
}

const eliminarProducto = (id) => {
  return fetch( `http://localhost:3000/producto/${id}`, {
      method:"DELETE"
    })

}

const detalleProducto = (id) => {
  return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json());
}


const actualizarProducto = (imageUrl, name, price, id) => {
  return fetch(`http://localhost:3000/producto/${id}`, {
    method: "PUT",
    headers: {
      "content-Type": "application/json"
    },
    body:JSON.stringify({imageUrl,name,price})
  })
    .then(respuesta => (respuesta))
    .catch(err => console.log(err))
}
export const productosServicios = {
  listaProducto,
  crearProducto,
  eliminarProducto,
  detalleProducto,
  actualizarProducto,
};