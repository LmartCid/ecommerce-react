import blackshirt from "./assets/images/blackshirt.png"
import hoodie from "./assets/images/hoodie.png"
import sneakers from "./assets/images/sneakers.png"

const products = [
    {
        id: 1,
        name: "Camiseta Negra",
        image: blackshirt,
        description: "Camiseta de algodón premium",
        detailInfo: "Camiseta de algodón 100 % premium. Muy cómoda y resistente",
        price: 19.99
    },
    {
        id: 2,
        name: "Sudadera Essentials",
        image: hoodie,
        description: "Comodidad y estilo",
        detailInfo: "Comodidad y estilo. Con capucha para protegerse del frio",
        price: 39.99
    },

    { 
    id: 3, 
    name: "Zapatillas Urban", 
    image: sneakers, 
    description: "Perfectas para el día a día", 
    detailInfo:"Perfectas para el día a día. Suela acolchada para un mayor confort al caminar",
    price: 59.99 
    }
]
export default products 