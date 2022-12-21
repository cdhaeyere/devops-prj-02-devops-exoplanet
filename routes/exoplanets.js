const express = require('express')
const router = express.Router()

const checkNames = require('../services/checkNames.js');

const Exoplanet = require('../models/Exoplanet.js');

/* GET exoplanets index. */
router.get('/', (req, res, next) => {
  res.render('exoplanets/index', { exoplanetsTable: Exoplanet.list() })
})

/* POST add exoplanet. */
router.post('/add', (req, res, next) => {
  console.log("POST ADD EXOPLANET");
  if (!checkNames.checkUniqueName(req.body.uniqueNameExoplanet)) return res.sendStatus(400);
  Exoplanet.save({
    uniqueName: req.body.uniqueNameExoplanet,
    hClass: req.body.hClassExoplanet,
    discoveryYear: req.body.discoveryYearExoplanet
  })
  res.redirect('/exoplanets')
})

/* GET search exoplanet. */
router.get('/search', (req, res, next) => {
  let exoplanetsTable = null
  let min3Char = false
  console.log('GET SEARCH EXOPLANET')
  if (req.query.uniqueNameExoplanet.length >= 3) {
    min3Char = true
    exoplanetsTable = Exoplanet.search(req.query.uniqueNameExoplanet)
  }
  res.render('exoplanets/index', {
    exoplanetsTable,
    min3Char
  })
})

module.exports = router
