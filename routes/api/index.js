const path = require("path");
const router =require("express").Router();
const bookRoutes = require("./books");
const googleRoutes = require("./google");

//Book routes
router.use("/books", bookRoutes);

//Google routes
router.use("/google", googleRoutes);

//for anything else
router.use(function(req,res) {
    res.sendFile(path.join(__dirname, "../../client/build/index.hmtl"))
});

module.exports = router;