import React from 'react';
import PropTypes from 'prop-types';

class AlbumListItemMusics extends React.Component {
  constructor(props) {
    super(props);
    this.handleCloseAlbum = this.handleCloseAlbum.bind(this);
  }

  handleCloseAlbum() {
    this.props.onCloseAlbum({});
  }

  render() {
    const { album } = this.props;

    return (
      <div className="albums__list-item__musics">
        <i
          className="icon-cross icon-close"
          onClick={this.handleCloseAlbum}
          role="presentation"
        />

        <h1>{`${album.year} - ${album.title}`}</h1>
        <p>{album.musics.length} musics</p>

        <div className="musics-video-player">
          video
        </div>

        <h2 className="playing"><span>1</span> {album.musics[0].name}</h2>

        <ul className="musics-list">
          {album.musics.map((music, i) => (
            <li className="musics-list__music" key={music.id}>
              <i className="icon-play3" /> {`${i + 1} - ${music.name}`}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

AlbumListItemMusics.propTypes = {
  onCloseAlbum: PropTypes.func.isRequired,
  album: PropTypes.shape({
    title: PropTypes.string,
    year: PropTypes.string,
    url: PropTypes.string,
    musics: PropTypes.array,
  }).isRequired,
};

export default AlbumListItemMusics;
