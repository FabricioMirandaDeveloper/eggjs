/* ESTO ES UN OBJETO
 */
const produto1 = {
    nombre: "Celular",
    precio: 800,
    stock: 2
}
console.log(produto1);
produto1.id = "01563"
produto1["foto"] = "https://i.postimg.cc/Jn2C5W84/galaxy1.webp"
console.log(produto1);
console.log(produto1.nombre);

/* ESTO ES UNA CLASE
 */
class Product {
    constructor(id, title, price, stock, images, onsale, supplier) {
        this.id = id
        this.title = title
        this.price = price
        this.stock = stock
        this.images = images
        this.onsale = onsale
        this._supplier = supplier;
    } 
    get getSupplier() {
        return this._supplier;
    }
    set setSupplier(newName) {
        this._supplier = newName;
    }     
}

const prod1 = new Product()
const prod2 = new Product("01567","Leche", 2.5)
const prod3= new Product("01568", "Toallitas Humedas", 7, 20, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true)
console.log(prod1,prod2,prod3)
const prod4 = new Product("01478","Cuates",1,40,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp)", false, "Frito Lays")
console.log(prod4);
/* console.log(prod4.setSupplier("
Doritos"))
console.log(prod4._supplier)
 */