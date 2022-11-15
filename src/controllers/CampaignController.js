const Campaign = require("../models/Campaign");

module.exports = class CampaignController {

    static async registerCampaign(req, res) {

        const { nameCampaign, country, conversion, bid } = req.body

        if (!nameCampaign) {
            res.status(422).json({ msg: 'Campo nameCampaign obrigatório!' })
            return
        }
        if (!country) {
            res.status(422).json({ msg: 'Campo country obrigatório!' })
            return
        }
        if (!conversion) {
            res.status(422).json({ msg: 'Campo conversion obrigatório!' })
            return
        }
        if (!bid) {
            res.status(422).json({ msg: 'Campo bid obrigatório!' })
            return
        }


        const campaign = new Campaign({
            nameCampaign: nameCampaign,
            country: country,
            conversion: conversion,
            bid: bid
        })
        try {
            await campaign.save()
            res.status(201).json({ msg: 'Campanha salva com sucesso!' })


        } catch (err) {
            res.status(500).json({ msg: err })
        }
    }

  }