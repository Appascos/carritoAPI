window.addEventListener('load', function () {                      //con esto le pido que primero cargue todo el html
    let formulario = document.querySelector('form.cargaFront-js');    // capturo el elemento

    formulario.addEventListener('submit', function (e) {

        let erroresDeEdicion = [];                                 //aquí acumularé errores de validacion en front


        // Validacion de Pack//
        let campoPack = document.querySelector('input.numeroPack')
        let expRegPack = /^\d{1,3}$/  // 1 a 3 numeros
        let numeroPackValido = expRegPack.test(campoPack.value);
        if (campoPack.value == "" || campoPack.value == 0) {
            erroresDeEdicion.push("Debes asignar un numero mayor a 0 al Pack")
        }
        else if (numeroPackValido == false) {
            erroresDeEdicion.push("Debes asignar caracteres numéricos al Pack")
        }
        else if (campoPack.value > 999) {
            erroresDeEdicion.push("El numero de Pack no podrá ser mayor a 999")
        }

        // Validacion de KM//
        let campoKm = document.querySelector('input.km')
        let expRegKm = /^\d{1,4}$/  // 1 a 4 numeros
        let kmValido = expRegKm.test(campoKm.value);
        if (campoKm.value == "") {
            erroresDeEdicion.push("Debes definir un kilometraje de radio máximo para el Pack")
        }
        else if (kmValido == false) {
            erroresDeEdicion.push("El campo Radio sólo podrá contener caracteres numericos y no podrá superar los 9.999 km")
        }
        else if (campoKm.value == 0) {
            erroresDeEdicion.push("El Radio de distancia deberá ser mayor a cero")
        }

        // Validacion de precio//
        let campoPrecio = document.querySelector('input.precio')
        let expRegPrecio = /^\d{1,6}$/  // 1 a 6 numeros
        let precioValido = expRegPrecio.test(campoPrecio.value);
        if (campoPrecio.value == "") {
            erroresDeEdicion.push("Debes definir un precio para el Pack")
        }
        else if (campoPrecio.value == 0) {
            erroresDeEdicion.push("El Precio no podrá ser cero")
        }
        else if (precioValido == false) {
            erroresDeEdicion.push("El Precio debe contener numeros y no puede superar los $ 999.999")
        }

        // Validacion de Medidas //
        let campomedida = document.querySelector('input.medida')
        let expRegmedida = /^\d{1,3}$/  // 1 a 3 numeros
        let medidaValido = expRegmedida.test(campomedida.value);
        if (campomedida.value == "") {
            erroresDeEdicion.push("Debes definir los m2 máximos para el Pack")
        }
        else if (campomedida.value == 0) {
            erroresDeEdicion.push("La Medida disponible no podrá ser cero")
        }
        else if (medidaValido == false) {
            erroresDeEdicion.push("El campo Medida debe contener numeros y no podrá superar los 999 m2")
        }

        // Validacion de Imagen de Perfil //
        let campoImgProd = document.querySelector('input.imagenProducto');
        let extensionImgValida = /(.jpg|.jpeg|.png|.gif)$/i;    //extensiones válidas

        if (campoImgProd.value == "") {
            erroresDeEdicion.push("Debes adjuntar una imagen")
        }
        else if (!extensionImgValida.exec(campoImgProd.value)) {
            erroresDeEdicion.push("La extension de la imagen debe ser jpg, jpeg, png o gif")
        }
        else if (campoImgProd.files[0].size > 200000) {
            erroresDeEdicion.push("El peso de la imagen debe ser menor a 200 kb");
        }
        console.log(campoImgProd.files)




        if (erroresDeEdicion.length > 0) {
            e.preventDefault();      // Si el array de errores no está vacio, evito que se submita el formulario

            let ulErroresEdit = document.querySelector('div.erroresEdit')
            ulErroresEdit.innerHTML = ''
            for (let i = 0; i < erroresDeEdicion.length; i++) {
                ulErroresEdit.innerHTML += "<li>" + erroresDeEdicion[i] + "</li>"
            };

        }
    });
})
