import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

// Primary function  - Used a semantic wrapper for Blog posts

const ArticleContainer = styled.article``;

const Article = ({ children }) => (
  <ArticleContainer>{children}</ArticleContainer>
);

Article.propTypes = {
  children: PropTypes.node.isRequired
};

export { Article };
