function isObject(subject) {
  return typeof subject == "object";
}

function isArray(subject) {
  return Array.isArray(subject);
}

function requiredParam(param) {
  throw new Error(param + " es obligatorio");
}

function LearningPath({
	name = requiredParam("name"), // Campo es obligatorio
	courses = [], // Lista de Cursos que pertencen a la ruta de aprendizaje
}) {
  this.name = name;
  this.courses = courses;

  {
    // const private= { // Atributos privados
    // 	"_name": name,
    // 	"_courses": courses,
    // };
  
    // const public = { // Getters y Setters
    // 	get name() {
    // 		return private["_name"];
    // 	},
    // 	set name(newName) {
    // 		if (newName.length != 0) {
    // 			private["_name"] = newName;
    // 		} else {
    // 			console.warn("El nombre debe tener al menos 1 caracter");
    // 		}
    // 	},
    // 	get courses() {
    // 		return private["_courses"];
    // 	},
    // };

    // return public;
  }
}

function Student({
  name = requiredParam("name"),
  email = requiredParam("email"),
  age,
  twitter,
  instagram,
  facebook,
  approvedCourses = [],
  learningPaths = [],
} = {}) {
  
  this.name = name;
  this.email = email;
  this.age = age;
  this.socialMedia = {
    twitter,
    instagram,
    facebook,
  }
  this.approvedCourses = approvedCourses;

  if (isArray(learningPaths)) {
    this.learningPaths = [];
  

    for (learningPath of learningPaths) {
      console.log(learningPath instanceof LearningPath);
      if (!(learningPath instanceof LearningPath)) {
        console.warn("learningPath no es un verdadero learning path");
        this.learningPaths.push(learningPathArray);
      }
    } 
  }

  {
    // const privateAtributos = {
      //   "_name": name,
      // 	"_learningPaths": learningPaths, // 👈👈
      // };
      
    // const publicAtributos = {
    //   email,
    //   age,
    //   approvedCourses,
    //   //learningPaths,👈👈
    //   socialMedia: {
    //     twitter,
    //     instagram,
    //     facebook,
    //   },
    // 	get name() {
    //     return privateAtributos["_name"];
    //   },
    // 	set name(newName) {
    //     if (newName.length != 0) {
    //       privateAtributos["_name"] = newName;
    //     } else {
    //       console.warn("Tu nombre debe tener al menos 1 caracter");
    //     }
    //   },
    // 	get learningPaths() { // 👈👈
    // 		return privateAtributos["_learningPaths"];
    // 	},
    // 	set learningPaths(newLP) { // 👈👈
    // 		// AQUÍ empezamos a aplicar DUCK TYPING 👀🦆
    //     if (!newLP.name) {
    // 			// Si la nueva ruta de aprendizaje NO tiene el atributo "name"...
    //       console.warn("Tu LP no tiene la propiedad name");
    //       return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
    //     }

    //     if (!newLP.courses) {
    // 			// Si la nueva ruta NO tiene asignado un array
    // 			// en el atributo "courses"
    //       console.warn("Tu LP no tiene courses");
    //       return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
    //     }

    //     if (!isArray(newLP.courses)) {
    // 			// Si el atributo "courses" en la nueva ruta de aprendizaje NO es un Array
    //       console.warn("Tu LP no es una lista (*de cursos)");
    //       return; // Cortamos el proceso y no agregamos la ruta de aprendizaje
    //     }

    // 		// Si la nueva ruta de aprendizaje pasó por todas las validaciones
    // 		// correctamente...Quiere decir que SÍ es una ruta válida tal como
    // 		// la deseamos que fuese. Por tanto, procedemos a añadir ese Learning Path
    // 		// a la lista de rutas del estudiante:
    //     privateAtributos["_learningPaths"].push(newLP);
    //   },
    // };

    // return publicAtributos;
  }
}

// ESCUELA
const escuelaWeb = new LearningPath({name:"escuela de WebDev"});
const escuelaData = new LearningPath({ name: "escuela de DataSci" });
const escuelaImpostora = { name: "escuela" }

// NUEVO ESTUDIANTE:
const juan = new Student({
  email: "juanito@frijoles.co",
  name: "Juanito",
  learningPaths: [
    escuelaWeb,
    escuelaData,
    // escuelaImpostora
  ],
});

