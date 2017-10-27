const express = require('express');
const router = express.Router();

router.post('/logout', function(req, res) {

  res.json({message : "Logout route"});

});

module.exports = router;
