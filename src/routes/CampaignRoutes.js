const CampaignController = require('../controllers/CampaignController')
const router = require('express').Router()

router.post('/registerCampaign', CampaignController.registerCampaign)
router.get('/allCampaigns', CampaignController.getCampaigns)
router.put('/editCampaign/:id', CampaignController.editCampaign)
router.delete('/deleteCampaign/:id', CampaignController.removeCampaign)
router.get('/campaignCountry/:country', CampaignController.getBetterCountry)

module.exports = router