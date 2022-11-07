const { Post } = require("../models");

const PostData = [
  {
    user_id: 1,
    title: "the start of something new",
    content:
      "this is the start of something glorious in nature, that I can build a website from scratch",
  },
  {
    user_id: 2,
    title: "to ask a question",
    content:
      "this is, by all means, the hardest part of understanding a concept. asking the question",
  },
  {
    user_id: 3,
    title: "gettting past staring at the void",
    content: "step 1, stop looking",
  },
  {
    user_id: 4,
    title: "corner the market on concepts",
    content:
      "I dont know anything about doing this but im going to pretend like i do cause i want your money",
  },
];

const seedPosts = () => Post.bulkCreate(PostData);

module.exports = seedPosts;
