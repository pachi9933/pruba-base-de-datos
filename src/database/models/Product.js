module.exports = (sequelize, dataTypes) => {

    let alias = 'Products';

    let cols = {
        autor: dataTypes.STRING,
        seccion: dataTypes.STRING,
        tiempo: dataTypes.INTEGER,
        image: dataTypes.STRING,
        titulo: dataTypes.STRING,
        resumen: dataTypes.STRING,
        texto: dataTypes.STRING,
        pdf: dataTypes.STRING,
       
    }

    config = {
        tableName: 'products',
        timestamps: true,
        paranoid: true
    }

    let Products = sequelize.define(alias, cols, config);

  

    return Products;

}