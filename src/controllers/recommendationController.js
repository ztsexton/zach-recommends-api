const recommendationRepo = require('../repositories/recommendationRepository')

const recommendationController = () => {
  const get = (req, res) => {
    const recommendations = recommendationRepo.recommendations()
    return res.json(recommendations)
  }

  const post = (req, res) =>  {
    const title = req.body.title
    const content = req.body.content
    const recommendation = recommendationRepo.createRecommendation(title, content)
    return res.json(recommendation)
  }

  return { post, get }
}

module.exports = recommendationController
