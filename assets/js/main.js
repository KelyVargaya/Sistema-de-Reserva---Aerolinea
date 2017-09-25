
//Funcion para Limpiar los Imput
/*function limpiar(){
   document.getElementById("nombre").value="";
   document.getElementById("apellido").value="";
   document.getElementById("dni").value="";
   
}*/

var celdas = document.getElementsByTagName("td");
var aerolinea = new Aerolinea (32) ;

for(var i = 0; i < celdas.length; i++)
{
    celdas[i].onclick = function (event) {
        aerolinea.seleccionar(event);
    }
}

btnReservar.onclick  = function () {
   aerolinea.reservar();
}


function Pasajero(nombre, apellido, dni, asiento){
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.asiento = asiento;
}

function Aerolinea (nroAsientos) {   
   this.arreglo = new Array (nroAsientos); 
   for (var i = 0; i  < nroAsientos; i++)
      this.arreglo[i] = new Pasajero(undefined, undefined, undefined, undefined);

   this.numAsiento = undefined;
   this.asiento = document.getElementById("asiento");
   this.nombre = document.getElementById("nombre").value;
   this.apellido = document.getElementById("apellido").value;
   this.dni = document.getElementById("dni").value;
   this.celda = undefined;
   
   this.seleccionar = function(event)
   {
       this.celda = event.target;
       this.numAsiento = (event.target.textContent);
       this.asiento.value = this.numAsiento;
       this.mostrar(parseInt (this.numAsiento) - 1);
       this.nombre.focus();
   }
   
   this.reservar =  function ()    {
       if(this.asiento.value != "" && this.nombre.value != "" && this.apellido.value != "" && this.dni.value != "")
       {
           this.arreglo[this.numAsiento - 1] = new Pasajero(this.nombre.value, this.apellido.value, this.dni.value, this.numAsiento);
           this.limpiar(true);
           this.celda.style.backgroundColor ="#f927a9";           
       }
       else
       {
           nombre.focus();
       }
   }

    this.resultado = document.getElementById("resultado");
      resultado.innerHTML = "<center><H2>DATOS DEL PASAJERO REGISTRADO</H2><p><strong>Nombre: </strong>"+this.nombre+ " </p><p><strong>Apellido: </strong>" +this.apellido+ "</p><p><strong>DNI: </strong>" + this.dni+ "</p></center><br>" ;

   this.mostrar = function(num)
   {
       if(this.arreglo[num].nombre != undefined)
       {
           this.nombre.value = this.arreglo[num].nombre;
           this.apellido.value = this.arreglo[num].apellido;
           this.dni.value = this.arreglo[num].dni;
       }
       else
       {
           this.limpiar(false);
       }
   }
   
   this.limpiar = function(todo)
   {
       this.nombre.value = "";
       this.apellido.value = "";
       this.dni.value = "";
       if(todo)
       {
           this.asiento.value = "";
       }
   }

}


/*
class Pasajero {
    constructor(nombre, apellido, dni, asiento) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.asiento = asiento;
    }
    listar() {
        let resultado = "";
        resultado += "Nro Asiento: " + this.asiento + "<br><hr>";
        resultado += "Nombre: " + this.nombre + "<br>";
        resultado += "Apellido: " + this.apellido + "<br>";
        resultado += "DNI: " + this.dni + "<br>";
    
        return resultado;
    }
}

class reservar {
    constructor() {
        this.asientos = [];
    }

    }

*/