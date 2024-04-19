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
    sellUnits(units) {
    if(this.stock < units) {
        console.log("No hay la cantidad de productos suficientes")
    }else {
        this.stock = this.stock - units
    }
    }     
}

const prod1 = new Product()
const prod2 = new Product("01567","Leche", 2.5)
const prod3= new Product("01568", "Toallitas Humedas", 7, 20, "https://i.postimg.cc/Jn2C5W84/galaxy1.webp", true)
console.log("--------------");
console.log("--------------");
console.log("--------------");
console.log(prod1,prod2,prod3)
console.log(prod2.title)
console.log(prod3.onsale);
const prod4 = new Product("01478","Cuates",1,40,"https://i.postimg.cc/Jn2C5W84/galaxy1.webp)", false, "Frito Lays")
prod4.setSupplier ="Alicorp"
console.log(prod4.getSupplier)
const prod5 = new Product("03636","Doritos",2,12,[], false, "Bombo SAC")
console.log(prod5.stock);
prod5.sellUnits(13)
console.log(prod5.stock);