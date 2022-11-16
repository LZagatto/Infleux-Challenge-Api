const Campaign = require("../models/Campaign");

module.exports = class CampaignController {

    static async registerCampaign(req, res) {

        const { nameCampaign, country, conversion, bid } = req.body

        if (!nameCampaign) {
            res.status(422).json({ msg: 'Nome da campanha obrigatório!' })
            return
        }
        if (!country) {
            res.status(422).json({ msg: 'Nome do País obrigatório!' })
            return
        }
        if (!conversion) {
            res.status(422).json({ msg: 'Valor da conversão obrigatório!' })
            return
        }
        if (!bid) {
            res.status(422).json({ msg: 'Lance obrigatório!' })
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

    static async getCampaigns(req, res) {
      try {
          const campaigns = await Campaign.find();
          return res.status(200).json({ campaigns });

      } catch (err) {
          res.status(500).json({ error: err.msg });
      }
  }

  static async editCampaign(req, res) {

    const id = req.params.id
    const { nameCampaign, country, conversion, bid } = req.body

    const updateData = {}

    const campaign = await Campaign.findOne({ _id: id })
    if (!campaign) {
        return res
            .status(422)
            .json({ error: "Campanha não encontrada" });
    }

    if (!nameCampaign) {
        res.status(422).json({ msg: 'Nome da campanha obrigatório!' })
        return
    } else {
        updateData.nameCampaign = nameCampaign
    }
    if (!country) {
        res.status(422).json({ msg: 'Nome do País obrigatório!' })
        return
    } else {
        updateData.country = country
    }
    if (!conversion) {
        res.status(422).json({ msg: 'Valor da conversão obrigatório!' })
        return
    } else {
        updateData.conversion = conversion
    }
    if (!bid) {
        res.status(422).json({ msg: 'Lance obrigatório!' })
        return
    } else {
        updateData.bid = bid
    }
    await Campaign.findByIdAndUpdate(id, updateData, {
        new: true
      });
    res.status(200).json({ msg: 'campanha atualizada' });

}

static async removeCampaign(req, res) {

  const id = req.params.id

  const campaign = await Campaign.findOne({ _id: id })

  if (!campaign) {
      return res
          .status(404)
          .json({ error: "Campanha não encontrada" });
  }

  await Campaign.findByIdAndRemove(id)

  res.status(200).json({ msg: "removido com sucesso" })

}

  }