const usuario = document.getElementById('usuario')
const contraseña = document.getElementById('contraseña')
const idcliente = document.getElementById('titulocliente')

let btn_atras = document.getElementById("iratras")
btn_atras.addEventListener('click', function(){
    window.location.href = "../views/index.html"
});

let boton_iniciar = document.getElementById('btn-iniciar')

boton_iniciar.addEventListener('click', function iniciarsesion(e){
    e.preventDefault()
    const data = {
        user: usuario.value,
        pass: contraseña.value
    }
    console.log(data)
    if(data.user == 'addison' && data.pass == '1234'){
        window.location.href = "../views/miinvya.html"
        idcliente.innerHTML.value = "Grupo Addison"
        console.log(idcliente.value)
    }        
    else{
        alert("el usuario es incorrecto")
    }        
})