module.exports={
  "development": {
    "username": "root",
    "password": "root",
    "database": "OED",
    "port":8889,
    "host": "127.0.0.1",
    "dialect": "mysql",
    define:{
      underscored:true,
      // paranoid:true
    }
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
