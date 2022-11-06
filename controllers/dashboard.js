const router = require("express").Router();
const { User, Post } = require("../models");

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
      console.log(dbdashData)
      const dashContent = dbdashData.map((post) =>
      post.get({ plain: true })
    );
      res.render("dashboard", { dashContent, loggedIn: req.session.loggedIn });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
});

module.exports = router;
