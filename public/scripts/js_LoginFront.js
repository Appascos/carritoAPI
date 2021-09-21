window.addEventListener('load', function () {                      //con esto le pido que primero cargue todo el html
    let formulario = document.querySelector('form.front-js');    // capturo el elemento

    formulario.addEventListener('submit', function (e) {

        let erroresDeAcceso = [];                                 //aquí acumularé errores de validacion en front

        let campoUsuario = document.querySelector('input.usuario')
        if (campoUsuario.value == "") {
            erroresDeAcceso.push("ingresa tu nombre de usuario")
        }
        else if (campoUsuario.value.length > 200) {
            erroresDeAcceso.push("El usuario no podrá tener más de 200 caracteres")
        }
        // console.log(campoUsuario.value.length)


        let password = document.querySelector('input.clave')
        let expRegPassword = /^(?=.*\d)(?=.*[\u0021-\u002b\u003c-\u0040])(?=.*[A-Z])(?=.*[a-z])\S{7,16}$/
        let passwordValido = expRegPassword.test(password.value);
        if (password.value == "") {
            erroresDeAcceso.push("Debes ingresar una contraseña")
        }
        else if (passwordValido == false) {
            erroresDeAcceso.push('La contraseña debe tener entre 7 y 16 caracteres')
            erroresDeAcceso.push('La contraseña debe tener al menos un numero')
            erroresDeAcceso.push('La contraseña debe tener al menos una minúscula')
            erroresDeAcceso.push('La contraseña debe tener al menos una mayúscula')
            erroresDeAcceso.push('La contraseña debe tener al menos un caracter especial')
        }
        // console.log(password.value.length)




        if (erroresDeAcceso.length > 0) {
            e.preventDefault();      // Si el array de errores no está vacio, evito que se submita el formulario

            let ulErrores = document.querySelector('div.ul_errores ul')
            ulErrores.innerHTML = ''
            for (let i = 0; i < erroresDeAcceso.length; i++) {
                ulErrores.innerHTML += "<li>" + erroresDeAcceso[i] + "</li>"
            };

        }
    });
})