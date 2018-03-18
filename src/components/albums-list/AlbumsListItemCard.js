import React from 'react';
import PropTypes from 'prop-types';

class AlbumListItemCard extends React.Component {
  constructor(props) {
    super(props);
    this.handlerClick = this.handlerClick.bind(this);
  }

  handlerClick() {
    this.props.onClick(this.props.album);
  }

  render() {
    return (
      <div onClick={this.handlerClick} role="presentation">
        <div className="albums__list-item__thumbnail">
          <img src={this.props.album.thumbnail} alt="thumbnail" />
        </div>
        <span className="albums__list-item__year">{this.props.album.year && this.props.album.year}</span>
        <h2 className="albums__list-item__title">{this.props.album.title}</h2>
      </div>
    );
  }
}

AlbumListItemCard.propTypes = {
  onClick: PropTypes.func.isRequired,
  album: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    thumbnail: PropTypes.string,
  }).isRequired,
};

export default AlbumListItemCard;
