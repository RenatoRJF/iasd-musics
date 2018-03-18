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
      <div className="album__list-item__card" onClick={this.handlerClick} role="presentation">
        <div className="card__thumbnail">
          <img src={this.props.album.thumbnail} alt="thumbnail" />
        </div>
        <span className="card__year">{this.props.album.year && this.props.album.year}</span>
        <h2 className="card__title">{this.props.album.title}</h2>
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
