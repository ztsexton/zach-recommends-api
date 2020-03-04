const recs = [
  { id: 1, title: 'Recommendation 1', content: 'here be the details' }
]

const recommendations = () => {
  return recs
}

const createRecommendation = (title, content) => {
  const id = recs.length + 1
  const recommendation = {
    id: id,
    title: title,
    content: content
  }
  recs.push(recommendation)

  return recommendation
}

module.exports.recommendations = recommendations
module.exports.createRecommendation = createRecommendation
