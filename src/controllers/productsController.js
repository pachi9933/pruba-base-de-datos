const fs = require("fs");
const path = require("path");

const {Products} = require('../database/models/Product');


const {Op} = require('sequelize');

// const pathJsonProducts = path.join(__dirname , "/../data/products.JSON");

// const leerJsonProducts = () => {
//     let jsonProducts = fs.readFileSync(pathJsonProducts);
//     return JSON.parse(jsonProducts);
// };

const productsController={
           
      

//     listar:  async (req,res) =>{ 

// try{  
    // const count = await Products.count()
    // const productJson = await Products.findByPk(count)

    // const productJson = await Products.findAll()
      // const productJs =  await productJson.json();
    
//       res.render("listadoProductos", {productJson});  
        
//       }

// catch (error){ 
//               console.log(error);
//      }
//     },


     detalle:  async (req,res) =>{ 

      try{  
            const productJson = await Products.findByPk(req.params.id)
            //const productJs =  await productJson;

             res.render("detalleProductos", {productJson});  
            //  res.json(productJson);  
            }
      
      catch (error){ 
                    console.log(error);
           }
      
      
      // try {
      //   const categories = await Categories.findAll({include:{all: true}});
      //   const subcategories = await SubCategories.findAll({include:{all: true}});
      //   let products = await Products.findAll({include:{all: true}});
      //   res.render("products/productSearch", {title: "Productos", products, subcategories, categories});  
      // } catch (error) {
      //   console.log(error)
      // };

    }

      
  }
  
  module.exports = productsController;
  