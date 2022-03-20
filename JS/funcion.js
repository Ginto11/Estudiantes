const app = new Vue({
	el: "#app",
	data: {
		titulo: "NOTAS  DE  ALUMNOS",
		alumnos: [ ],
		nombreAlumno: "",
		edadAlumno: "",
		nota1: "",
		nota2: "",
		nota3: "",
		nota4: "",
		promedio: ""
	},
	methods: {

		agregarAlumno(){
			if (this.nombreAlumno == "" || this.edadAlumno == "" || this.nota1 == "" || this.nota2 == "" || this.nota3 == "" || this.nota4 == "") {
				alert("Rellena los campos")
			}
			else{
				
				this.alumnos.push({
				name: this.nombreAlumno, 
				years: this.edadAlumno,
				nota_1: this.nota1,
				nota_2: this.nota2,
				nota_3: this.nota3,
				nota_4: this.nota4,
				promedio: (this.nota1 + this.nota2 + this.nota3+ this.nota4) /4
				})
			}

			this.nombreAlumno = "";
			this.edadAlumno = "";
			this.nota1 = "";
			this.nota2 = "";
			this.nota3 = "";
			this.nota4 = "";
		}

	}
})