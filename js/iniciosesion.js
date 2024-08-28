
    let boton_iniciar = document.getElementById('btn-iniciar')
    boton_iniciar.addEventListener('click', iniciarsesion)


function iniciarsesion(){
    let usuario = document.getElementById('usuario').value;
    let contraseña = document.getElementById('contraseña').value;

    if(usuario == 'addison'){
        if(contraseña == '1234'){
            window.location.href = "../views/miinvya.html";
        }
        else{
            alert("contraseña erronea");
        }        
    }
    else{
        alert("Datos incorrectos");
    }        
}
