/*const mongoose = require('mongoose')
const databaseUrl =
  process.env.DATABASE_URL || 'mongodb://localhost/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { useNewUrlParser: true })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}
  */
 //Project-10-Bank-API-Backend\server\database\connection.js
/*const mongoose = require('mongoose')
const databaseUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/argentBankDB'

module.exports = async () => {
  try {
    await mongoose.connect(databaseUrl, { 
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Database successfully connected')
  } catch (error) {
    console.error(`Database Connectivity Error: ${error}`)
    throw new Error(error)
  }
}

*/
/*
const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/argentBankDB';

mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connexion à MongoDB réussie');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });
  */

const mongoose = require('mongoose');
const databaseUrl = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/argentBankDB';

mongoose.connect(databaseUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverSelectionTimeoutMS: 30000, // Augmente le timeout à 30 secondes
})
  .then(() => {
    console.log('Connexion à MongoDB réussie');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB :', err);
  });
