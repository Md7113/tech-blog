const router = require("express").Router();
const { User, Post, Comment } = require("../models");


router.get("/", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
      } else {
        try {

            res.render("addpost", 
            { 
            loggedIn: req.session.loggedIn 
            });


        } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
        }
})


router.post("/", async (req, res) => {
    if (!req.session.loggedIn) {
        res.redirect("/login");
      } else {
        try {

            const dbComData = await Post.create({
                user_id: req.session.user,
                title: req.body.title,
                content: req.body.content,
              });
              res.send({message: req.session.post});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
          }
        }
})
module.exports = router;