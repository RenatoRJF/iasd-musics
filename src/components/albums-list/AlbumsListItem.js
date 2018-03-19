import React from 'react';
import PropTypes from 'prop-types';
import AlbumsListItemCard from './AlbumsListItemCard';
import AlbumsListItemMusics from './AlbumsListItemMusics';

class AlbumsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.onClick(this.props.album);
  }

  setClass() {
    return `albums__list-item ${this.props.albumSelected === this.props.album && 'album-selected'}`;
  }

  render() {
    const { albumSelected, album } = this.props;

    const content = (albumSelected !== album) ? (
      <AlbumsListItemCard
        album={album}
        onClick={this.onClickHandler}
        role="presentation"
      />
    ) : (<AlbumsListItemMusics album={albumSelected} onCloseAlbum={this.onClickHandler} />);

    return (
      <div className={this.setClass(albumSelected, album)}>
        {content}
      </div>
    );
  }
}

AlbumsListItem.propTypes = {
  albumSelected: PropTypes.shape({}).isRequired,
  album: PropTypes.shape({}).isRequired,
  onClick: PropTypes.func.isRequired,
};

export default AlbumsListItem;
