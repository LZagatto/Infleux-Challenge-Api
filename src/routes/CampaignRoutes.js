const CampaignController = require('../controllers/CampaignController')
const router = require('express').Router()

router.post('/registerCampaign', CampaignController.registerCampaign)
router.get('/allCampaigns', CampaignController.getCampaigns)

module.exports = router