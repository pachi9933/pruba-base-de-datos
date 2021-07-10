// module.exports = (sequelize, dataTypes) => {

//     let alias = 'Actividades';

//     let cols = {
//         autor: dataTypes.STRING,
//         seccion: dataTypes.STRING,
//         tiempo: dataTypes.INTEGER,
//         image: dataTypes.STRING,
//         titulo: dataTypes.STRING,
//         resumen: dataTypes.STRING,
//         texto: dataTypes.STRING,
//         pdf: dataTypes.STRING,
       
//     }
 
//     config = {
//         tableName: 'actividades',
//         timestamps: true,
//         paranoid: true
//     }

//     let Actividades = sequelize.define(alias, cols, config)

  

//     return Actividades;

// }