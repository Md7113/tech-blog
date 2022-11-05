const sequelize = require('../config/connection');
const seedUsers = require('./UserData');
const seedPosts = require('./PostData');
const seedComments = require('./CommentData');

const seedAll = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
}
seedAll()