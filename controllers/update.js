const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.post("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      req.session.post = req.body.postid;
      res.status(200).json("yes");
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.put("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const dbComData = await Post.update(
        {
          user_id: req.session.user,
          title: req.body.title,
          content: req.body.content,
        },
        {
          where: { id: req.body.postid },
        }
      );
      res.json({ message: req.session.post });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

router.get("/con", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      res.render("update", {
        postId: req.session.post,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
