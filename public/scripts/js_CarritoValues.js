validacionesFront = window.addEventListener('load', function () {
    let btnCompra = document.querySelector('.buttonValidar');
    btnCompra.addEventListener('click', function () {
        // TODO ESTO FUNCIONA, LO COMENTO PARA PROBAR EL ID DEL PACK Y USUARIO
        var serviciosSolicitados = {
            traslado: false,
            asistente: false,
            embalaje: false,
            cajas: false,
            cintas: false,
            espuma: false,
            depoT: false,
            depoP: false
        };

        traslado = document.querySelector('.traslado');
        asistente = document.querySelector('.asistente');
        embalaje = document.querySelector('.embalaje');
        cajas = document.querySelector('.cajas');
        cintas = document.querySelector('.cintas');
        espuma = document.querySelector('.espuma');
        depoT = document.querySelector('.depoT');
        depoP = document.querySelector('.depoP');
        if (traslado.checked) {
            serviciosSolicitados.traslado = true;
        };
        if (asistente.checked) {
            serviciosSolicitados.asistente = true;
        }
        if (embalaje.checked) {
            serviciosSolicitados.embalaje = true;
        };
        if (cajas.checked) {
            serviciosSolicitados.cajas = true;
        };
        if (cintas.checked) {
            serviciosSolicitados.cintas = true;
        };
        if (espuma.checked) {
            serviciosSolicitados.espuma = true;
        };
        if (depoT.checked) {
            serviciosSolicitados.depoT = true;
        };
        if (depoP.checked) {
            serviciosSolicitados.depoP = true;
        };

        let settings = {
            "method": "POST",
            "headers": {
                "content-type": "application/json",

            },
            "body": JSON.stringify(serviciosSolicitados)
        }
        fetch("http://localhost:3000/products/preCompra", settings)
            .then(function (response) {
                return response.json()
            })
            .then(function (info) {
                console.log(info)
            })
            .catch(function (e) {
                console.log(e);
            })
    });
})


// OTRA forma: 


// validacionesFront = window.addEventListener('load', function () {
//     let btnCompra = document.querySelector('.buttonValidar');
//     btnCompra.addEventListener('click', function () {


//         var serviciosSolicitados = {
//             traslado: document.querySelector('.traslado').target,
//             asistente: false,
//             embalaje: false,
//             cajas: false,
//             cintas: false,
//             espumas: false,
//             depoT: false,
//             depoP: false
//         };
//         traslado = document.querySelector('.traslado');
//         asistente = document.querySelector('.asistente');
//         embalaje = document.querySelector('.embalaje');
//         cajas = document.querySelector('.cajas');
//         cintas = document.querySelector('.cintas');
//         espuma = document.querySelector('.espuma');
//         depoT = document.querySelector('.depoT');
//         depoP = document.querySelector('.depoP');


//         // traslado.addEventListener("change", function (e) {
//         //     serviciosSolicitados.traslado = e.target.checked; // Guardo info en objeto
//         //     sessionStorage.setItem('traslado', JSON.stringify(e.target.checked)) // Guardo info en sessionStorage
//         //     console.log(serviciosSolicitados.traslado)

//         // });
//         asistente.addEventListener("change", function (e) {
//             serviciosSolicitados.asistente = e.target.checked;  // Guardo info en objeto
//             sessionStorage.setItem('asistente', JSON.stringify(e.target.checked))  // Guardo info en sessionStorage
//             console.log(serviciosSolicitados.asistente)
//         });
//         embalaje.addEventListener("change", function (e) {
//             serviciosSolicitados.embalaje = e.target.checked;  // Guardo info en objeto
//             sessionStorage.setItem('embalaje', JSON.stringify(e.target.checked))  // Guardo info en sessionStorage
//             console.log(serviciosSolicitados.embalaje)
//         });
//         cajas.addEventListener("change", function (e) {
//             serviciosSolicitados.cajas = e.target.checked;  // Guardo info en objeto
//             sessionStorage.setItem('cajas', JSON.stringify(e.target.checked))  // Guardo info en sessionStorage
//             console.log(serviciosSolicitados.cajas)
//         });
//         cintas.addEventListener("change", function (e) {
//             serviciosSolicitados.cintas = e.target.checked;  // Guardo info en objeto
//             sessionStorage.setItem('cintas', JSON.stringify(e.target.checked))  // Guardo info en sessionStorage
//             console.log(serviciosSolicitados.cintas)
//         });
//         espuma.addEventListener("change", function (e) {
//             serviciosSolicitados.espuma = e.target.checked;  // Guardo info en objeto
//             sessionStorage.setItem('espuma', JSON.stringify(e.target.checked))  // Guardo info en sessionStorage
//             console.log(serviciosSolicitados.espuma)
//         })
//         depoT.addEventListener("change", function (e) {
//             serviciosSolicitados.depoT = e.target.checked;  // Guardo info en objeto
//             sessionStorage.setItem('depoT', JSON.stringify(e.target.checked))  // Guardo info en sessionStorage
//             console.log(serviciosSolicitados.depoT)
//         })

//         depoP.addEventListener("change", function (e) {
//             serviciosSolicitados.depoP = e.target.checked;  // Guardo info en objeto
//             sessionStorage.setItem('depoP', JSON.stringify(e.target.checked))  // Guardo info en sessionStorage
//             console.log(serviciosSolicitados.cintas)
//         })
//         let settings = {
//             "method": "POST",
//             "headers": {
//                 "content-type": "application/json"
//             },
//             "body": JSON.stringify(serviciosSolicitados)
//         }
//         fetch("http://localhost:3000/products/preCompra", settings)
//             .then(function (response) {
//                 return response.json()
//             })
//             .then(function (info) {
//                 console.log(info)
//             })
//             .catch(function (e) {
//                 console.log(e);

//             })
//     }
//     )
// })
