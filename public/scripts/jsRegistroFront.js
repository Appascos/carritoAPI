window.addEventListener('load', function () {                      //con esto le pido que primero cargue todo el html
    let formulario = document.querySelector('form.jsFrontRegistro');    // capturo el elemento

    formulario.addEventListener('submit', function (e) {

        let erroresDeRegistro = [];                                 //aquí acumularé errores de validacion en front

        // Validacion de Nombre //
        let campoNombre = document.querySelector('input.nombre');
        let nombreValido = /^[a-zA-Z]{3,20}$/;     // 4 a 16 Letras, numeros, guion y guion_bajo
        // /^[a-zA-Z0-9]{3,20}$/  esta expresion admite numeros
        if (campoNombre.value == "") {
            erroresDeRegistro.push("Debes ingresar tu nombre")
        } else if (!nombreValido.test(campoNombre.value)) {
            erroresDeRegistro.push("El nombre debe tener entre 3 y 20 letras, sin numeros ni caracteres especiales")
        }

        // Validacion de Apellido//
        let campoApellido = document.querySelector('input.apellido')
        let apellidoValido = /^[a-zA-Z]{2,20}$/;     // 4 a 16 Letras, numeros, guion y guion_bajo
        if (campoApellido.value == "") {
            erroresDeRegistro.push("Debes ingresar tu apellido")
        } else if (!apellidoValido.test(campoApellido.value)) {
            erroresDeRegistro.push("El apellido debe tener entre 2 y 20 letras, sin numeros ni caracteres especiales")
        }

        // Validacion de Usuario //
        let campoUsuario = document.querySelector('input.usuario')
        // let usuarioValido=/^[a-zA-Z]{5,20}$/;     // 4 a 16 Letras, numeros, guion y guion_bajo
        if (campoUsuario.value == "") {
            erroresDeRegistro.push("Debes elegir un usuario")
        } else if (campoUsuario.value.length > 200) {
            erroresDeRegistro.push("El usuario no podrá tener más de 200 caracteres")
        }
        // console.log(campoUsuario.value.length)

        //             // Validacion de email//
        let campoEmail = document.querySelector('input.email')
        let expRegMail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
        // /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/   //expresion regular que expresa el formato de emails
        let mailValido = expRegMail.test(campoEmail.value)    //.test es buleano
        if (campoEmail.value == "") {
            erroresDeRegistro.push("Debes ingresar un email")
        }
        else if (mailValido == false) {
            erroresDeRegistro.push("Formato de email incorrecto")
        } else if (campoEmail.value.length > 50) {
            erroresDeRegistro.push("El email no podrá tener mas de 50 caracteres")
        }
        // console.log(campoEmail.value.length)

        //             // Validacion de Telefono//
        let campoTelefono = document.querySelector('input.telefono')
        let expRegTelefono = /^\d{7,20}$/  //7 a 14 numeros
        // /^\(? (\ d {3}) \)? [-]? (\ d {4}) [-]? (\ d {4})$/      //alternativa que no funcionó
        let telefonoValido = expRegTelefono.test(campoTelefono.value);
        if (campoTelefono.value == "") {
            erroresDeRegistro.push("Debes ingresar un teléfono con formato 4444-4444")
        }
        else if (telefonoValido == false) {
            erroresDeRegistro.push("Formato de telefono no válido. No podrá superar los 20 digitos")
        }

        // Validacion de Domicilio //
        let campoDomicilio = document.querySelector('input.domicilio')
        if (campoDomicilio.value == "") {
            erroresDeRegistro.push("Debes ingresar un domicilio")
        }
        else if (campoDomicilio.value.length > 500) {
            erroresDeRegistro.push("El domicilio no podrá tener mas de 500 caracteres")
        }
        // console.log(campoDomicilio.value.length)

        // Validacion de localidad//
        let campoLocalidad = document.querySelector('input.localidad')
        if (campoLocalidad.value == "") {
            erroresDeRegistro.push("Debes ingresar una localidad")
        }
        else if (campoLocalidad.value.length > 500) {
            erroresDeRegistro.push("La localidad no podrá tener mas de 500 caracteres")
        }
        // console.log(campoLocalidad.value.length)

        // Validacion de Contraseña//
        let campoPassword = document.querySelector('input.password')
        let expRegPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{7,16}$/
        let passwordValido = expRegPassword.test(campoPassword.value);
        if (campoPassword.value == "") {
            erroresDeRegistro.push("Debes ingresar una contraseña")
        }
        else if (campoPassword.value.length > 100) {
            erroresDeRegistro.push("La contraseña no podrá tener mas de 100 caracteres")
        }
        else if (passwordValido == false) {
            erroresDeRegistro.push('La contraseña debe tener entre 7 y 16 caracteres')
            erroresDeRegistro.push('La contraseña debe tener al menos un numero')
            erroresDeRegistro.push('La contraseña debe tener al menos una minúscula')
            erroresDeRegistro.push('La contraseña debe tener al menos una mayúscula')
            erroresDeRegistro.push('La contraseña debe tener al menos un caracter especial')
        }
        // console.log(campoPassword.value.length)

        // Validacion de Imagen de Perfil //
        let campoImagen = document.querySelector('input.imagen');
        let extensionValida = /(.jpg|.jpeg|.png|.gif)$/i;    //extensiones válidas

        if (campoImagen.value == "") {
            erroresDeRegistro.push("Debes adjuntar una imagen")
        }
        else if (!extensionValida.exec(campoImagen.value)) {
            erroresDeRegistro.push("La extension de la imagen debe ser jpg, jpeg, png o gif")
        }
        else if (campoImagen.files[0].size > 100000) {
            erroresDeRegistro.push("El peso de la imagen debe ser menor a 100 kb");
        }
        // console.log(campoImagen.files)


        if (erroresDeRegistro.length > 0) {
            e.preventDefault();      // Si el array de errores no está vacio, evito que se submita el formulario

            let ulErrores = document.querySelector('div.ulErroresFrontRegistro')
            ulErrores.innerHTML = ''
            for (let i = 0; i < erroresDeRegistro.length; i++) {
                ulErrores.innerHTML += "<li>" + erroresDeRegistro[i] + "</li>"
            }
        }
    });
})
