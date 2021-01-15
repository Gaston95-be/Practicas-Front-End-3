let alumnos =[{
	nombre: "Gaston Be",
	email: "Gastnbe@gmail.com",
	materia: "Fisica",
},{
	nombre: "Franco Lope",
	email: "Frank@gmail.com",
	materia: "Matematica",
},{
	nombre: "Cristian Brok",
	email: "Cristianbrok@gmail.com",
	materia: "Sistemas II",
},{
	nombre: "Cristina Pe",
	email: "Cris@gmail.com",
	materia: "Logica",
},{
	nombre: "Usuario",
	email: "Usuario@gmail.com",
	materia: "Quimica",
}];

const boton = document.querySelector(".btn_confirmar");
const contenedor = document.querySelector(".grid_container");

let htmlCode = "";

for (alumno in alumnos){
	let datos = alumnos[alumno];
	let nombre = datos["nombre"];
	let email = datos["email"];
	let materia = datos["materia"];
	htmlCode += `
		<div class="grid_item nombre">${nombre}</div>
		<div class="grid_item email">${email}</div>
		<div class="grid_item materia">${materia}</div>
		<div class="grid_item semana">
			<select class="semana_elegida">
				<option value="Semana 1">Semana 1</option>
				<option value="Semana 2">Semana 2</option>
			</select>
		</div>`;
}

contenedor.innerHTML = htmlCode;


boton.addEventListener("click",()=>{
	let confirmar = confirm("¿Realmente quieres confirmar?");
	if (confirmar){
	document.body.removeChild(boton);
	let elementos = document.querySelectorAll(".semana");
	let semanaElegida = document.querySelectorAll(".semana_elegida");
	for (elemento in elementos){
		semana = elementos[elemento];
		semana.innerHTML = semanaElegida[elemento].value;
	}
	}
})