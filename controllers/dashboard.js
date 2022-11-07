const router = require("express").Router();
const { User, Post, Comment } = require("../models");

router.get("/", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      const dbdashData = await Post.findAll({
        where: {
          user_id: req.session.user,
        },
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });
      const dbCommData = await Comment.findAll({
        where: {
          user_id: req.session.user,
        },
        include: [
          {
            model: Post,
            attributes: ["title"],
          },
        ],
      });

      const dashContent = dbdashData.map((post) => post.get({ plain: true }));
      const dashComment = dbCommData.map((post) => post.get({ plain: true }));
      res.render("dashboard", {
        dashContent,
        dashComment,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
