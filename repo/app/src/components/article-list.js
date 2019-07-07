import React, { Component } from 'react'
import {connect} from 'react-redux'
import Article from "./article"
import accordion from "../decorators/accordion"

class ArticleList extends Component {

  render(){
    return(
      <ul className="article-list article-list-bg">
        {this.articleItems}
      </ul>
    )
  }

  get articleItems(){
    const {articles, openItemId, toggleOpenItem} = this.props

    return articles.map(article =>
      <li className="article-list-li" key={article.id}>
        <Article
          article={article}
          isOpen = {openItemId === article.id}
          toggleOpen = {toggleOpenItem(article.id)}
          cssColor= {openItemId === article.id}
        />
      </li>
    )
  }
}
export default connect((state) => {

  const {selected} = state.filters

  const filtratedArticles =  state.articles.filter((article) => {

  return(
    (selected !== null)  ? (!selected.length || selected.find((selected) =>
      selected.value === article.id)) : (!selected)
  )})

  return {articles: filtratedArticles }

})(accordion(ArticleList))
