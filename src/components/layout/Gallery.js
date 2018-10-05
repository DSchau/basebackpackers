import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Lightbox from 'react-images';
import Img from 'gatsby-image';
import styled from 'styled-components';

const GalleryLink = styled.a`
  transition: transform 1s;
`;
const Caption = styled.p`
  margin: 0px;
  overflow: hidden;
  position: absolute;
  z-index: 2;
  padding: 10px;
  bottom: 0;
  right: 0;
  font-size: 0.7rem;
  letter-spacing: 0.04rem;
  background: ${props => props.theme.secondaryColor};
  color: ${props => props.theme.white};
`;

const GalleryItem = styled.div`
  box-shadow: ${props => props.theme.shadow};
  margin: 0;
  overflow: hidden;
  position: relative;
  z-index: 2;
  min-height: 140px;
  padding: 0 0 1rem;
  &:hover {
    transform: scale(1.05);
  }
`;

export default class Gallery extends Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }

  renderGallery() {
    const { images } = this.props;

    if (!images) return;

    const gallery = images.map((obj, i) => {
      return (
        <GalleryLink
          href={obj.src}
          key={i}
          onClick={e => this.openLightbox(i, e)}
        >
          <GalleryItem>
            <Img
              fluid={obj.fluid}
              style={{
                position: 'absolute',
                left: 0,
                top: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                zIndex: 1
              }}
            />
            <Caption>{obj.caption}</Caption>
          </GalleryItem>
        </GalleryLink>
      );
    });

    return <>{gallery}</>;
  }

  render() {
    return (
      <>
        {this.renderGallery()}

        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
          caption={this.props.images}
        />
      </>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array
};

export { Gallery };
