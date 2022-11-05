const { Comment } = require('../models');

const CommentData = [
{
    content: "well said",
    user_id: 2,
    post_id: 1,
},
{
    content: "Here Here",
    user_id: 3,
    post_id: 1,
},
{
    content: "I disagree",
    user_id: 4,
    post_id: 1,
},
{
    content: "no",
    user_id: 5,
    post_id: 1,
},
{
    content: "well said",
    user_id: 1,
    post_id: 2,
},
{
    content: "Here Here",
    user_id: 3,
    post_id: 2,
},
{
    content: "I disagree",
    user_id: 4,
    post_id: 2,
},
{
    content: "no",
    user_id: 5,
    post_id: 2,
},

]

const seedComments = () => Comment.bulkCreate(CommentData);

module.exports = seedComments;