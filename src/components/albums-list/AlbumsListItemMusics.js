import React from 'react';
import PropTypes from 'prop-types';

const AlbumListItemMusics = props => (
  <div className="albums__list-item__musics">
    <h1>{`${props.album.title} - ${props.album.year}`}</h1>
    <p>12 musics</p>

    <div className="musics-video-player">
      video
    </div>

    <h2 className="playing"><span>Playing:</span> {props.album.title}</h2>

    <ul className="musics-list">
      <li className="musics-list__music">
        <i className="icon-play" /> Music name
      </li>
    </ul>
  </div>
);

AlbumListItemMusics.propTypes = {
  album: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
};

export default AlbumListItemMusics;
