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

const ejer13 = () => {
    class Figura {
        area() {
            return 0;
        }
        perimetro() {
            return 0;
        }
    }

    class Cuadrado extends Figura {
        constructor(lado) {
            super();
            this.lado = lado;
        }
        area() {
            return this.lado * this.lado;
        }
        perimetro() {
            return 4 * this.lado;
        }
    }

    class Triangulo extends Figura {
        constructor(base, altura, lado1, lado2, lado3) {
            super();
            this.base = base;
            this.altura = altura;
            this.lado1 = lado1;
            this.lado2 = lado2;
            this.lado3 = lado3;
        }
        area() {
            return (this.base * this.altura) / 2;
        }
        perimetro() {
            return this.lado1 + this.lado2 + this.lado3;
        }
    }

    let lado = parseFloat(prompt("Ingresa el lado del cuadrado:"));
    let cuadrado = new Cuadrado(lado);
    alert(`Cuadrado:\nÁrea: ${cuadrado.area()}\nPerímetro: ${cuadrado.perimetro()}`);

    let base = parseFloat(prompt("Base del triángulo:"));
    let altura = parseFloat(prompt("Altura del triángulo:"));
    let l1 = parseFloat(prompt("Lado 1 del triángulo:"));
    let l2 = parseFloat(prompt("Lado 2 del triángulo:"));
    let l3 = parseFloat(prompt("Lado 3 del triángulo:"));
    let triangulo = new Triangulo(base, altura, l1, l2, l3);
    alert(`Triángulo:\nÁrea: ${triangulo.area()}\nPerímetro: ${triangulo.perimetro()}`);
};


const ejer14 = () => {
    class Usuario {
        constructor(nombre, egmail) {
            this.nombre = nombre;
            this.egmail = egmail;
        }
        mostrarInfo() {
            return `Usuario: ${this.nombre}\nEgmail: ${this.egmail}`;
        }
    }

    class Cliente extends Usuario {
        constructor(nombre, egmail, fidelidad) {
            super(nombre, egmail);
            this.fidelidad = fidelidad;
        }
        mostrarInfo() {
            return `${super.mostrarInfo()}\nNivel de fidelidad: ${this.fidelidad}/5`;
        }
    }

    class Administrador extends Usuario {
        constructor(nombre, egmail, permisos) {
            super(nombre, egmail);
            this.permisos = permisos;
        }
        mostrarInfo() {
            return `${super.mostrarInfo()}\nPermisos: ${this.permisos.join(", ")}`;
        }
    }

    let cliente = new Cliente("David", "david@ggmail.com", 4);
    let admin = new Administrador("Carlos", "carlos@ggmail.com", ["crear", "editar", "eliminar"]);

    alert("Cliente:\n" + cliente.mostrarInfo());
    alert("Administrador:\n" + admin.mostrarInfo());
};


const ejer15 = () => {
    class Usuario {
        constructor(nombre, egmail) {
            this.nombre = nombre;
            this.egmail = egmail;
        }
        mostrarInfo() {
            return `Usuario: ${this.nombre}\nEgmail: ${this.egmail}`;
        }
    }

    class Cliente extends Usuario {
        constructor(nombre, egmail, fidelidad) {
            super(nombre, egmail);
            this.fidelidad = fidelidad;
        }
        mostrarInfo() {
            return `${super.mostrarInfo()}\nFidelidad: ${this.fidelidad}/5`;
        }
    }

    class Administrador extends Usuario {
        constructor(nombre, egmail, permisos) {
            super(nombre, egmail);
            this.permisos = permisos;
        }
        mostrarInfo() {
            return `${super.mostrarInfo()}\nPermisos: ${this.permisos.join(", ")}`;
        }
    }

    let usuarios = [
        new Cliente("Lucía", "lucia@gmail.com", 5),
        new Administrador("José", "jose@gmail.com", ["crear", "editar"]),
        new Cliente("Ana", "ana@gmail.com", 3)
    ];

    usuarios.forEach(u => alert(u.mostrarInfo()));
};


const ejer16 = () => {
    class Empleado {
        constructor(nombre, sueldoBase) {
            this.nombre = nombre;
            this.sueldoBase = sueldoBase;
        }
        calcularSueldo() {
            return this.sueldoBase;
        }
    }

    class Programador extends Empleado {
        constructor(nombre, sueldoBase, lenguaje) {
            super(nombre, sueldoBase);
            this.lenguaje = lenguaje;
        }
        calcularSueldo() {
            return this.sueldoBase * 1.1;
        }
    }

    class ProgramadorSenior extends Programador {
        calcularSueldo() {
            return this.sueldoBase * 1.25;
        }
    }

    let emp = new Empleado("Sofía", 1500);
    let prog = new Programador("Luis", 2000, "JavaScript");
    let senior = new ProgramadorSenior("María", 2500, "Python");

    alert(`Empleado: ${emp.nombre}\nSueldo: S/ ${emp.calcularSueldo()}`);
    alert(`Programador: ${prog.nombre}\nSueldo: S/ ${prog.calcularSueldo()}`);
    alert(`Programador Senior: ${senior.nombre}\nSueldo: S/ ${senior.calcularSueldo()}`);
};



const ejer17 = () => {
    class Cuenta {
        #saldo;
        constructor(saldoInicial) {
            this.#saldo = saldoInicial;
        }

        depositar(monto) {
            this.#saldo += monto;
        }

        retirar(monto) {
            if (monto > this.#saldo) {
                alert("Fondos insuficientes.");
            } else {
                this.#saldo -= monto;
            }
        }

        getSaldo() {
            return this.#saldo;
        }

        transferir(destino, monto) {
            if (monto <= this.#saldo) {
                this.retirar(monto);
                destino.depositar(monto);
                alert("Transferencia realizada.");
            } else {
                alert("No se pudo realizar la transferencia.");
            }
        }
    }

    class CuentaAhorro extends Cuenta {
        retirar(monto) {
            if (monto > this.getSaldo()) {
                alert("No puedes retirar más de tu saldo.");
            } else {
                super.retirar(monto);
                alert("Retiro exitoso (Cuenta Ahorro).");
            }
        }
    }

    class CuentaCorriente extends Cuenta {
        constructor(saldoInicial, limite) {
            super(saldoInicial);
            this.limite = limite;
        }
        retirar(monto) {
            if (monto > this.getSaldo() + this.limite) {
                alert("Has superado tu límite de sobregiro.");
            } else {
                alert("Retiro con sobregiro permitido (Cuenta Corriente).");
            }
        }
    }

    let ahorro = new CuentaAhorro(500);
    let corriente = new CuentaCorriente(300, 200);

    ahorro.retirar(100);
    corriente.retirar(400);
    ahorro.transferir(corriente, 100);
    alert(`Saldo Ahorro: ${ahorro.getSaldo()}\nSaldo Corriente: ${corriente.getSaldo()}`);
};


const ejer18 = () => {
    class Producto {
        constructor(nombre, precio) {
            this.nombre = nombre;
            this.precio = precio;
        }
    }

    class Carrito {
        constructor() {
            this.productos = [];
        }

        agregarProducto(producto) {
            this.productos.push(producto);
        }

        calcularTotal() {
            return this.productos.reduce((acc, p) => acc + p.precio, 0);
        }

        mostrarResumen() {
            let lista = this.productos.map(p => `- ${p.nombre}: S/ ${p.precio}`).join("\n");
            alert(`Productos en carrito:\n${lista}\n\nTotal: S/ ${this.calcularTotal()}`);
        }
    }

    let carrito = new Carrito();
    carrito.agregarProducto(new Producto("Pan", 2.5));
    carrito.agregarProducto(new Producto("Leche", 4.5));
    carrito.agregarProducto(new Producto("Huevos", 6));

    carrito.mostrarResumen();
};


const ejer19 = () => {
    class Notificacion {
        enviar() {
            alert("Enviando notificación...");
        }
    }

    class Egmail extends Notificacion {
        enviar() {
            alert("Enviando notificación por Egmail...");
        }
    }

    class SMS extends Notificacion {
        enviar() {
            alert("Enviando notificación por SMS...");
        }
    }

    class Push extends Notificacion {
        enviar() {
            alert("Enviando notificación Push...");
        }
    }

    const notificaciones = [new Egmail(), new SMS(), new Push()];
    notificaciones.forEach(n => n.enviar());
};
