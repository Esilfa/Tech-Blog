const { User } = require('../models');

const userData = [{
    username: 'Steph',
	password: 'a2345678'

},
{
    username: 'MaryS',
    password: 'Gooday'
},
{
    username: 'HeidyJ',
    password: 'Jon'
	}
	];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
