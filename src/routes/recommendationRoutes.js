const express = require('express')

const recommendationRepo = require('../repositories/recommendationRepository')

const recommendationRouter = express.Router()

recommendationRouter.route('/')
  .get((req, res) => {
    const recommendations = recommendationRepo.recommendations()
    res.json(recommendations)
  })
  .post((req, res) => {
    const title = req.body.title
    const content = req.body.content
    const recommendation = recommendationRepo.createRecommendation(title, content)
    res.json(recommendation)
  })

module.exports = recommendationRouter
