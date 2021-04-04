document.addEventListener('DOMContentLoaded', function () {
            new Vue({
                el: '#app',
                data: {
                    nombre: '',
                    edad: '',
                    formActualizar: false,
                    idActualizar: -1,
                    nombreActualizar: '',
                    edadActualizar: '',
                    elementos: [] 
                },
                methods: {
                    crearElemento: function () {
                        this.elementos.push({
                            id: + new Date(),
                            nombre: this.nombre,
                            edad: this.edad
                        });
                        this.nombre = '';
                        this.edad = '';
                    },
                    verFormActualizar: function (elemento_id) {
                        this.idActualizar = elemento_id;
                        this.nombreActualizar = this.elementos[elemento_id].nombre;
                        this.edadActualizar = this.elementos[elemento_id].edad;
                        this.formActualizar = true;
                    },
                    borrarElemento: function (elemento_id) {
                        this.elementos.splice(elemento_id, 1);
                    },
                    guardarActualizacion: function (elemento_id) {
                        this.formActualizar = false;
                        this.elementos[elemento_id].nombre = this.nombreActualizar;
                        this.elementos[elemento_id].edad = this.edadActualizar;
                    }
                }
            });
        });
