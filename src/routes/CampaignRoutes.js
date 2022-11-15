const CampaignController = require('../controllers/CampaignController')
const router = require('express').Router()

router.post('/registerCampaign', CampaignController.registerCampaign)

module.exports = router