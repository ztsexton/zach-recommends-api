const express = require('express')

const recommendationController = require('../controllers/recommendationController')

const routes = () => {
  const recommendationRouter = express.Router()
  const controller = recommendationController();

  recommendationRouter.route('/')
    .get(controller.get)
    .post(controller.post)

  return recommendationRouter;
}


module.exports = routes
