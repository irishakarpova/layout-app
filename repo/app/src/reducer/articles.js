import defaultArticles from '../fixtures'
export default (articlesState = defaultArticles, action) =>{

  const { type } = action

  switch (type){
     case "DELETE_ARTICLE":
        return []

    default:
        return articlesState
  }

}
