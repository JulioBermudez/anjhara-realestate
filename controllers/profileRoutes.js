const router = require('express').Router();
const { Project, User } = require('../models');
const withAuth = require('../utils/auth');

//http://localhost:3001/profile/admin
router.get("/admin", (req,res) => {

    res.render("admin",{users:"Julio", roles:"Administrator"})
})


module.exports = router;