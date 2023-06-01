function guardar(){
     let valorp1,valorp2,valorp3
     valorp1 = document.getElementById("p1").value
      //guardar localmente
     localStorage.setItem("p1",valorp1)
     //enviar el archivo a respuesta html
     window.location="respuesta.html"

     valorp2=document.getElementById("p2").value
     //guardar localmente
     localStorage.setItem("p2",valorp2)
     //enviar el archivo a respuesta html
     window.location="respuesta.html"

     valorp3=document.getElementById("p3").value
     //guardar localmente
     localStorage.setItem("p3",valorp3)
     //enviar el archivo ala respuesta 
     window.location="respuesta.html"
}

