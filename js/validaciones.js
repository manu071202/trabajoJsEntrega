//type mdule

// / import { validarEmail } from "./validaciones";
// const email = document.getElementById("email").value
// const btnIdentificarse = document.getElementById("btn-identificarse");
// btnIdentificarse.addEventListener("click", (() => {identificarse}))

// const identificarse = () => {
//     if(validarEmail(email)){
//         Swal.fire('Any fool can use a computer')
//     } else {
//         Swal.fire({
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             footer: '<a href="">Why do I have this issue?</a>'
//           })
//     }

export function validarEmail(email){
const regExp = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi
    if(!regExp.test(email.value)){
        email.className = "form-control invalid-feedback"
        return false

    } else {
        email.className = "form-control valid-feedback"
        return true
    }
}

export function validarNombre(nombre){
    if( nombre.value.trim().length >= 1 && nombre.value.trim().length <=50 ){
        nombre.className = 'form-control is-valid';
        return true;
    }else{
        nombre.className = 'form-control is-invalid';
        return false;
    }
}


export function validarImagen(imagen){

   let patron = /(?:(?:https?:\/\/))[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b(?:[-a-zA-Z0-9@:%_\+.~#?&\/=]*(\.jpg|\.png|\.jpeg))/g

    if(patron.test(imagen.value)){
        imagen.className = 'form-control is-valid';
        return true;
    }else{
        imagen.className = 'form-control is-invalid';
        return false;
    }
}

export function validarDescription(descripcion){
    let expReg = /^[a-zA-Z0-9][a-zA-Z0-9\s]+$/ig;
    if(expReg.test(descripcion.value)){
        descripcion.className = 'form-control is-valid';
        return true;
    }else{
        descripcion.className = 'form-control is-invalid';
        return false;
    }
}

export function validarGenero(genero){
    if(genero.value !== ""){
        genero.className = "form-control is-valid"
        return true
    } else {
        genero.className = "form-control is-invalid"
        return false
    }
}

export function validarCantidad(cantidad){
    if(isNaN(cantidad)){
    cantidad.className = "form-control is-valid"
    console.log("DAtazo")
    return true;
    } else {
        cantidad.className="form-control is-invalid"
        console.log("adsasdasDAtazo")
        return false
    }
}