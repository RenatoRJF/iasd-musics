import React from 'react';
import PropTypes from 'prop-types';

const AlbumsListItem = props => (
  <div className={`albums__list-item ${props.className}`}>
    <div className="albums__list-item__thumbnail">
      <img src={props.album.thumbnail} alt="thumbnail" />
    </div>
    <span className="albums__list-item__year">{props.album.year && props.album.year}</span>
    <h2 className="albums__list-item__title">{props.album.title}</h2>
  </div>
);

AlbumsListItem.propTypes = {
  className: PropTypes.string,
  album: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    thumbnail: PropTypes.string,
  }),
};

AlbumsListItem.defaultProps = {
  className: '',
  album: {
    title: 'Eu sou a mensagem',
    year: '2015',
    thumbnail: 'http://www.livrariaadventista.com.br/media/custom/blog/thumb-blog-1423161495.jpg',
  },
};

export default AlbumsListItem;
