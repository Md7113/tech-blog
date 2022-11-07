const { User } = require("../models");

const UserData = [
  {
    username: "Carlos Erepo",
    password: "45walabee",
  },
  {
    username: "david44",
    password: "notpassword",
  },
  {
    username: "davinchi",
    password: "trolip1010",
  },
  {
    username: "teslaMan",
    password: "notedison",
  },
  {
    username: "bruceWayne",
    password: "vengence84",
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
