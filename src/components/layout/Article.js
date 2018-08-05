import React from 'react'
import styled from 'styled-components'


const ArticleContainer = styled.article`


`;



const Article = ({children}) => (
  <ArticleContainer>{children}</ArticleContainer> 
)

export { Article };