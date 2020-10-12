/* 
Voy a realizar diferentes consultas con diferentes query selectors en el terminal,
para despues copiarlo en este documento y poder subirlo como un archivo .js aparte 
*/

/* Consulta $eq */
db.libros.find({"Autor": {$eq: "Brandon Sanderson"}})
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f48"), 
"Titulo" ; "Elantris", "Autor" ; "Brandon Sanderson", "Año" ; 2005 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4b"), 
"Titulo" ; "Escuadrón", "Autor" ; "Brandon Sanderson", "Año" ; 2018 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4e"), 
"Titulo" ; "Aleación de ley", "Autor" ; "Brandon Sanderson", "Año" ; 2011 }

/* Consulta $gt */
db.libros.find({"Año": {$gt: 2011}})
{ "_id" ; ObjectId("5f84c34fff3757e17fb86f42"), 
"Titulo" ; "Una vacante imprevista", "Autor" ; "J.K. Rowling", "Año" ; 2012 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f45"), 
"Titulo" ; "Blanco letal", "Autor" ; "J.K. Rowling", "Año" ; 2018 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4b"), 
"Titulo" ; "Escuadrón", "Autor" ; "Brandon Sanderson", "Año" ; 2018 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4d"), 
"Titulo" ; "La caída de Arturo", "Autor" ; "J.R.R. Tolkien", "Año" ; 2013 }

/* Consulta $gte */
db.libros.find({"Año": {$gte: 2011}})
{ "_id" ; ObjectId("5f84c34fff3757e17fb86f42"), 
"Titulo" ; "Una vacante imprevista", "Autor" ; "J.K. Rowling", "Año" ; 2012 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f45"), 
"Titulo" ; "Blanco letal", "Autor" ; "J.K. Rowling", "Año" ; 2018 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f49"), 
"Titulo" ; "Donde los árboles cantan", "Autor" ; 
"Laura Gallego", "Año" ; 2011 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4b"), 
"Titulo" ; "Escuadrón", "Autor" ; "Brandon Sanderson", "Año" ; 2018 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4d"), 
"Titulo" ; "La caída de Arturo", "Autor" ; "J.R.R. Tolkien", "Año" ; 2013 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4e"), 
"Titulo" ; "Aleación de ley", "Autor" ; "Brandon Sanderson", "Año" ; 2011 }

/* Consulta $lt */
db.libros.find({"Año": {$lt: 1954}}) 
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f44"), 
"Titulo" ; "El hobbit", "Autor" ; "J.R.R. Tolkien", "Año" ; 1937 }

/* Consulta $lte */
db.libros.find({"Año": {$lte: 1954}})
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f44"), 
"Titulo" ; "El hobbit", "Autor" ; "J.R.R. Tolkien", "Año" ; 1937 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f47"), 
"Titulo" ; "La Comunidad del Anillo", "Autor" ; "J.R.R. Tolkien", "Año" ; 1954 }

/* Consulta $ne */
db.libros.find({"Autor": {$ne: "J.R.R. Tolkien"}})
{ "_id" ; ObjectId("5f84c34fff3757e17fb86f42"), 
"Titulo" ; "Una vacante imprevista", "Autor" ; "J.K. Rowling", "Año" ; 2012 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f43"), 
"Titulo" ; "Alas negras", "Autor" ; "Laura Gallego", "Año" ; 2009 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f45"), 
"Titulo" ; "Blanco letal", "Autor" ; "J.K. Rowling", "Año" ; 2018 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f46"), 
"Titulo" ; "Finis Mundi", "Autor" ; "Laura Gallego", "Año" ; 1999 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f48"), 
"Titulo" ; "Elantris", "Autor" ; "Brandon Sanderson", "Año" ; 2005 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f49"), 
"Titulo" ; "Donde los árboles cantan", "Autor" ; "Laura Gallego", "Año" ; 2011 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4b"), 
"Titulo" ; "Escuadrón", "Autor" ; "Brandon Sanderson", "Año" ; 2018 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4c"), 
"Titulo" ; "Alas de fuego", "Autor" ; "Laura Gallego", "Año" ; 2004 }
{ "_id" ; ObjectId("5f84c350ff3757e17fb86f4e"), 
"Titulo" ; "Aleación de ley", "Autor" ; "Brandon Sanderson", "Año" ; 2011 }

