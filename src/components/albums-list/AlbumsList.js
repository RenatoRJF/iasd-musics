import React from 'react';
import AlbumsListItem from './AlbumsListItem';

const albums = [
  {
    id: 1111,
    title: 'Eu sou a mensagem',
    year: '2015',
    thumbnail: 'http://www.livrariaadventista.com.br/media/custom/blog/thumb-blog-1423161495.jpg',
    url: 'https://www.youtube.com/watch?v=fKFlP5FIf48',
    musics: [
      {
        id: 312312,
        name: 'Pressa',
        url: '',
      },
      {
        id: 3123121,
        name: 'A bíblia é',
        url: 'Medley (Só em Jesus / A minha fé e o meu amor)',
      },
      {
        id: 3123122,
        name: 'Eu sou a mensagem',
        url: '',
      },
      {
        id: 3123123,
        name: 'Dez mil razões',
        url: '',
      },
      {
        id: 3123124,
        name: 'Coração aberto',
        url: '',
      },
    ],
  },
  {
    id: 2222,
    title: 'A única esperança',
    year: '2014',
    thumbnail: 'http://www.livrariaadventista.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/a/-/a-unica-esperanca-luxo_1.jpg',
  },
  {
    id: 3333,
    title: 'Gente como Jesus',
    year: '2013',
    thumbnail: 'https://iasdcabo.files.wordpress.com/2013/01/gerac3a7c3a3o-esperanc3a7a-gente-como-jesus.jpg',
  },
  {
    id: 4444,
    title: 'A grande esperança',
    year: '2012',
    thumbnail: 'https://files.adventistas.org/downloads/pt/2013/04/Mouse_pad_VJ__18x18_pt.jpg',
  },
  {
    id: 5555,
    title: 'Amigos da esperança',
    year: '2011',
    thumbnail: 'http://4.bp.blogspot.com/-7e2bRFM5yWc/TWVyjLL6qLI/AAAAAAAAAMg/N8fE-xVSTfA/s320/capa-dvd-ja-2011+%25281%2529.jpg',
  },
  {
    id: 6666,
    title: 'Geração esperança',
    year: '2010',
    thumbnail: 'https://www.cleitonschaefer.com/view/imgAlbuns/ministerio-jovem-2010-geracao-esperanca.jpg',
  },
  {
    id: 7777,
    title: 'Brilha em mim',
    year: '2009',
    thumbnail: 'https://iasddutra.files.wordpress.com/2008/12/brilhaemmim.jpg?w=468',
  },
  {
    id: 8888,
    title: 'Vivo por Jesus',
    year: '2008',
    thumbnail: 'http://2.bp.blogspot.com/_YGyovDMKj9Y/R4KvDoHvZZI/AAAAAAAAAB8/ZSD2h9ZL2BU/s320/cd+jovem+2008+cover.JPG',
  },
  {
    id: 9999,
    title: 'Vencedor cada dia',
    year: '2007',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/vencedor-cada-dia-W320.jpg',
  },
  {
    id: 1212,
    title: 'Sou de Jesus',
    year: '2006',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/sou-de-jesus-W320.jpg',
  },
  {
    id: 1313,
    title: 'Fiel a toda prova',
    year: '2005',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/fiel-a-toda-prova-W320.jpg',
  },
  {
    id: 1414,
    title: 'Senhor, somos tua voz',
    year: '2004',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/senhor-somos-tua-voz-W320.jpg',
  },
  {
    id: 1515,
    title: 'Ensina-me a servir',
    year: '2003',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/ensina-me-a-servir-W320.jpg',
  },
  {
    id: 1616,
    title: 'Você me pertence',
    year: '2002',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/voce-me-pertence-W320.jpg',
  },
  {
    id: 1717,
    title: 'Quase no lar',
    year: '2001',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/quase-no-lar-W320.jpg',
  },
  {
    id: 1818,
    title: 'É tempo de ver Jesus',
    year: '2000',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/e-tempo-de-ver-jesus-W320.jpg',
  },
  {
    id: 1919,
    title: 'Rumo ao porto seguro',
    year: '1990',
    thumbnail: 'https://s2.vagalume.com/ministerio-jovem/discografia/rumo-ao-porto-seguro-W320.jpg',
  },
  {
    id: 1998,
    title: 'Missão evangelismo jovem',
    year: '2001',
    thumbnail: 'https://studiosol-a.akamaihd.net/uploadfile/letras/albuns/e/9/a/b/535451474548665-tb_180.jpg',
  },
];

class AlbumsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { album_seleted: {} };
    this.onSelectAlbum = this.onSelectAlbum.bind(this);
  }

  onSelectAlbum(album) {
    if (album === this.state.album_seleted) {
      this.setState({ album_seleted: {} });
      return;
    }
    this.setState({ album_seleted: album });
  }

  render() {
    return (
      <div className="albums">
        <h1 className="title">Albuns</h1>
        <div className="albums__list">
          {albums.map(album => (
            <AlbumsListItem
              key={album.id}
              album={album}
              albumSelected={this.state.album_seleted}
              onClick={this.onSelectAlbum}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default AlbumsList;
