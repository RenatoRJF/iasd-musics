import React from 'react';
import PropTypes from 'prop-types';
import AlbumsListItemCard from './AlbumsListItemCard';

class AlbumsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.onClickHandler = this.onClickHandler.bind(this);
  }

  onClickHandler() {
    this.props.onClick(this.props.album);
  }
  // Criar component mostrando o player com a lista de
  render() {
    return (
      <div className={`albums__list-item ${this.props.className}`}>
        <AlbumsListItemCard
          album={this.props.album}
          onClick={this.onClickHandler}
          role="presentation"
        />
      </div>
    );
  }
}

AlbumsListItem.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  album: PropTypes.shape({}).isRequired,
};

AlbumsListItem.defaultProps = {
  className: '',
};

export default AlbumsListItem;
