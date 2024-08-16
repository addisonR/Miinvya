function iniciar(){
    let boton_iniciar = document.getElementById('iniciar')
    boton_iniciar.addEventListener('click', iniciarsesion)
}
function iniciarsesion(){
    let usuario = document.getElementById("usuario");
    let contraseña = document.getElementById("contraseña");
    if(usuario == "addison" && contraseña == "1234"){
        window.location = "miinvya.ejs"
    }
    else
        alert("Datos incorrectos")
}