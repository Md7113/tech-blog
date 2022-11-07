const router = require("express").Router();
const { User, Post, Comment } = require("../../models");

router.get("/:id", async (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
  } else {
    try {
      req.session.post = req.params.id;
      const dbPostData = await Post.findByPk(req.params.id, {
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });
      const dbCommData = await Comment.findAll({
        where: {
          post_id: req.params.id,
        },
        include: [
          {
            model: User,
            attributes: ["username"],
          },
        ],
      });
      const dashComment = dbCommData.map((com) => com.get({ plain: true }));
      const dashPost = dbPostData.get({ plain: true });
      res.render("post-data", {
        dashComment,
        dashPost,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
