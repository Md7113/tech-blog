const router = require("express").Router();

const apiRoutes = require("./api");
const home = require("./home.js");
const dashboard = require("./dashboard.js");
const comments = require("./comRoute.js");
const posts = require("./postRoute.js");

router.use("/addpost", posts);
router.use("/addcom", comments);
router.use("/dashboard", dashboard);
router.use("/", home);
router.use("/api", apiRoutes);

module.exports = router;
