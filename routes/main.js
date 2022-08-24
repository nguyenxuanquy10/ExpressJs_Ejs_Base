const express = require('express')
const router = express.Router();

const main = (req, res, next) => {
    res.render('pages/test')
}
router
    .route("")
    .get(main)
module.exports = router;