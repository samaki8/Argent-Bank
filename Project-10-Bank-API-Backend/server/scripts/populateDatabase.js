//Project-10-Bank-API-Backend\server\scripts\populateDatabase.js
/*const axios = require('axios')
const signupApi = 'http://localhost:3001/api/v1/user/signup'

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123'
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456'
  }
]

users.forEach(user => {
  axios
    .post(signupApi, user)
    .then(response => console.log(response))
    .catch(error => console.log(error))
})
*/
const axios = require('axios');

const users = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    email: 'tony@stark.com',
    password: 'password123',
  },
  {
    firstName: 'Steve',
    lastName: 'Rogers',
    email: 'steve@rogers.com',
    password: 'password456',
  },
];

async function populateDatabase() {
  for (const user of users) {
    try {
      console.log(`Tentative d'ajout de l'utilisateur : ${user.email}`);
      const response = await axios.post('http://localhost:3001/api/v1/user/signup', user);
      console.log('Utilisateur ajouté avec succès :', response.data);
    } catch (error) {
      if (error.response && error.response.data.message === 'Email already exists') {
        console.log(`L'utilisateur avec l'email ${user.email} existe déjà.`);
      } else {
        console.error('Erreur lors de l\'ajout de l\'utilisateur :', error.response?.data || error.message);
      }
    }
  }
}

populateDatabase();
