const ejer3 = () =>{
    let num = parseFloat(prompt("ingresa un numero decimal: "));
    let abajo = Math.floor(num);
    let arriba = Math.ceil(num);
    let redondeo = Math.round(num);

    alert("el numero"+num+"\nredondeo hacia abajo:"+abajo+"\n redondeo hacia arriba: "+arriba+"\nredondeo normal: ")
}
const ejer4 = () =>{
    let min = parseInt(prompt("ingresa el minimo:"));
    let max = parseInt(prompt("ingresa el maximo: "));
    let aleatorio = Math.random()*(max-min)+min;
    alert("el numero aleatorio entre "+min+" y "+max+" es "+aleatorio);
}
const ejer5 = () =>{
    const lanzar2Dados = () =>{
        let dado1 = Math.floor(Math.random()*(6-1)+1);
        let dado2 = Math.floor(Math.random()*(6-1)+1);
        let suma = dado1+dado2;
        alert("la suma del dado 1:"+dado1+"\nmas el dado 2: "+dado2+"\nes igual a"+suma);
    }
    lanzar2Dados();
}

const ejer6 = () =>{
    let num = parseInt(prompt("ingresa un numero"));
    const operaciones = num =>{
        let cuadrado = Math.pow(num, 2);
        let cubo = Math.pow(num, 3);
        let raiz = Math.sqrt(num, 2);

        alert("de"+num+"su:\ncuadrado: "+cuadrado+"\ncubo : "+cubo+"\nraiz: "+raiz);
    }
    operaciones(num);
}


const ejer7 = () =>{
    let grados = parseInt(prompt("ingrese grados: "));
    let radianes = parseInt(prompt("ingrese radianes: "));

    const convertirARadianes = grados =>{
        let radianes = grados*(Math.PI/180);
        alert("convertimos "+grados+" a radianes "+radianes)
    }
    const convertirAGrados = radianes =>{
        let grados = radianes*(180/Math.PI);
        alert("convertimos "+radianes+" a grados "+grados)

    }
    convertirARadianes(grados);
    convertirAGrados(radianes);
}

const ejer8 = () =>{
    const aleatorio = () =>{
        let contraseña = "";
        for (let i = 0; i < 6; i++) {
        let digito = Math.floor(Math.random()*(9-0)-0);
        contraseña+=digito;            
        }
        return contraseña;
    }
    alert("la contraseña sera: "+aleatorio());

}

const ejer9 = () =>{
    let x1 = parseInt(prompt("ingrese x1"));
    let y1 = parseInt(prompt("ingrese y1"));
    let x2 = parseInt(prompt("ingrese x2"));
    let y2 = parseInt(prompt("ingrese y2"));

    const distanciaDosPuntos =(a, b, c, d )=>{
        let distancia = Math.sqrt(Math.pow(c-a,2)+Math.pow(b-d,2));
        let distOrigen1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        let distOrigen2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        let sumaDistancias = distOrigen1 + distOrigen2;
        alert("la distancia de los puntos es: "+distancia)
        alert("la suma de las distancias con respecto al origen es "+ sumaDistancias);
    }

    distanciaDosPuntos(x1,y1,x2,y2);
}

const ejer10 = () => {
    let arreglo = [];
    let num = parseInt(prompt("¿Cuántos números ingresarás?"));
    
    for (let i = 0; i < num; i++) {
        arreglo[i] = parseFloat(prompt("Ingresa tu nota (0 a 20):"));
    }

    const normalizacion = (arreglo) => {
        let max = Math.max(...arreglo);
        for (let i = 0; i < arreglo.length; i++) {
            arreglo[i] = (arreglo[i] / max).toFixed(2);
        }
        return arreglo;
    }

    let resultado = normalizacion(arreglo);
    alert("Notas normalizadas (0 a 1): " + resultado.join(", "));
}

const ejer11 = () =>{
    class Producto {
        #nombre;
        #precio;
        #stock;
        constructor(nombre, precio, stock) {
            this.#nombre = nombre;
            this.setPrecio(precio);
            this.setStock(stock);
        }
        setPrecio(precioNew){
            let precio = Number(precioNew);
            if(precio<=0){
                alert("precio no valido");
                this.#precio=0;
            }else{
                this.#precio=precio;
            }
        }
        setStock(stock){
            if(stock<=0){
                alert("stock insuficiente")
            } else {
                this.#stock = stock;
            }
        }
        getPrecio(){
            let precio = this.#precio.toFixed(2)
            return precio;
        }
        getInfo() {
            return "Producto: " + this.#nombre + "\nPrecio: S/ " + this.#precio + "\nStock: " + this.#stock;

        }
        venderProducto(){
            let num = parseInt(prompt("cuantos productos quieres comprar?"));
            if(this.stock===0){
                alert("no se puede vender el producto por falta de stock");
            } else {
                this.#stock = this.#stock-num;
            }
        }
    }
    let nombre = prompt("Ingresa el nombre del producto:");
    let precio = parseFloat(prompt("Ingresa el precio del producto:"));
    let stock = parseInt(prompt("Ingresa el stock disponible:"));

    const producto = new Producto(nombre, precio, stock);
    alert(producto.getInfo());
    producto.venderProducto()
    alert(producto.getInfo());

}

