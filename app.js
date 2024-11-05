document.addEventListener("DOMContentLoaded",function(){


    //Imprime un mensaje de bienvenida en la consola (console.log)
    
    console.log("Sistema EBAC de Registro de Alumnos");
    
    var form = document.getElementById("registration-form");
    var addButton = document.getElementById("add-button");
    var consultButton = document.getElementById("consult-button")
    var deleteButton = document.getElementById("delete-button")
    
    form.addEventListener("submit",agregarAlumno);
    
    form.style.display="none";
    
    addButton.addEventListener("click", function(event){
        form.style.display = "flex"
    })
    
    consultButton.addEventListener("click", consultarRegistros);
    
    deleteButton.addEventListener("click", eliminarAlumno);
    
    //Se define un arreglo de registro con datos de alumnos en EBAC
    var registro = [
    
        //Se muestra lista de alumnos por medio de objetos
        {nombre: "Salvador Mora", edad: "30", zonaResidencia: "CDMX", nombrePrograma: "Desarrollador Front End DE Cero a Pro", email: "salvadormora@ebac.mx"},
        {nombre: "Maria Hubert", edad: "34", zonaResidencia: "Edo Mex", nombrePrograma: "Desarrollo Back End con Phyton", email: "mariaa@ebac.mx"},
        {nombre: "Juan López", edad: "28", zonaResidencia: "GDL", nombrePrograma: "Data Science Avanzado", email: "juanlopez@ebac.mx"},
        {nombre: "Alejandra Ramirez", edad: "32", zonaResidencia: "MTY", nombrePrograma: "Marketing Digital", email: "Alejandrarmz@ebac.mx"},
        {nombre: "Carlos Rodríguez", edad: "29", zonaResidencia: "CDMX", nombrePrograma: "UX/UI Design", email: "carlosrodriguez@ebac.mx"},
        
    ];
    
    //Función que permite agregar un nuevo alumno al arreglo de registro
    function agregarAlumno(event){
    
        event.preventDefault();
    
        //Se le solicita información al usuario para el registro de un nuevo alumno
        var nombre = document.getElementById("name-input").value;
        var zonaResidencia = document.getElementById("locality-input").value;
        var edad = document.getElementById("age-input").value;
        var nombrePrograma = document.getElementById("course-input").value;
        var email = document.getElementById("email-input").value;
    
        //Crea un objeto que se llama nuevoAlumno con los datos ingresados
        var nuevoAlumno = {nombre: nombre, edad: edad, zonaResidencia: zonaResidencia, nombrePrograma: nombrePrograma, email: email};
    
        //Agrega la información de nuevoAlumno al arreglo
        registro.push(nuevoAlumno);
    
        var nombre = document.getElementById("name-input").value = "";
        var zonaResidencia = document.getElementById("locality-input").value = "";
        var edad = document.getElementById("age-input").value = "";
        var nombrePrograma = document.getElementById("course-input").value = "";
        var email = document.getElementById("email-input").value = "";
    
        form.style.display = "none";
    
    
    }
    
    //Función para consultar los registros de los alumnos
    function consultarRegistros(){
    
        //Este ciclo for itera sobre cada uno de los registros del arreglo
        /*for(var i = 0; i < registro.length; i++){
    
            //Esta lista de console.log permite ver al usuario el registro en la consola
            console.log("Nombre: " + registro[i].nombre);
            console.log("Edad: " + registro[i].edad);
            console.log("Zona de residencia: " + registro[i].zonaResidencia);
            console.log("Nombre del programa: " + registro[i].nombrePrograma);
            console.log("Email: " + registro[i].email);
        };*/    
         console.table(registro);
    }
    
    //Esta función permite generar un nuevo arreglo que no contenga la información del alumno deseado
    function eliminarAlumno(){
        var nombreAeliminar = prompt ("Ingresa el nombre del alumno a eliminar");
    
        //Utiliza el método filter para crear un nuevo arreglo sin el alumno a eliminar
        registro = registro.filter(alumno => alumno.nombre !== nombreAeliminar);
    
    }
    
    //Ciclo de while permite repetir el menú cuando es indicado hasta que no se cumpla la condición
    //do{
    
     //Varuavble que toma la elección del usuario para ejectutar la función indicada
     //var opcion = prompt("Seleccione una opción: \n1. Agregar registro \n2. Consultar registro de alumnos \n3. Eliminar registro \n4. Salir");
    
     //Se declara este if para dar a elegir al usuario la opción que quiera
    /*    if (opcion === "1"){
       agregarAlumno();
         } else if (opcion === "2"){
        consultarRegistros();
         } else if (opcion === "3"){
        eliminarAlumno();
         } else if ("salida"){
        alert("Salir del sistema");
         } else{
        alert ("Opción invalida, elige otra")
         }
      //Esta variable nos permite elegir si hacemos otra acción o cerramos el ciclo
      var continuar = prompt ("¿Deseas hacer otra acción?  (S/N)")
    
      //While que se encarga de cerrar el ciclo
    }   while(continuar === "S");
    */
    })
    