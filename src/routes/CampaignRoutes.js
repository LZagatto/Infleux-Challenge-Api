const CampaignController = require('../controllers/CampaignController')
const router = require('express').Router()

router.post('/registerCampaign', CampaignController.registerCampaign)
router.get('/allCampaigns', CampaignController.getCampaigns)
router.put('/editCampaign/:id', CampaignController.editCampaign)

module.exports = router