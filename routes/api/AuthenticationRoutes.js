const express = require('express');
const router = express.Router();

router.get('/new-token', (req, res) => {
  return res.json('Get New Token Route');
});

module.exports = router;
