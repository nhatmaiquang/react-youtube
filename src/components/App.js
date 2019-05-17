import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Clock from './Clock';
import ThemeDisplay from './ThemeDisplay';
//import customsearch from '../apis/customsearch';
import ImageList from './ImageList';
import unsplash from '../apis/unsplash';

class App extends React.Component {
  state = {videos: [], selectedVideo: null, images: [] };

  componentDidMount() {
    this.onTermSubmit('amee');
  }

  onTermSubmit = async term => {
    const responseYoutube = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    /*
const responseCSE = await customsearch.get('', {
      params: {
        q: term,
      }
    });

    console.log(responseCSE);*/

    const responseUnsplash = await unsplash.get('/search/photos', {
      params: {
        query: term
      }
    });

    this.setState({
      videos: responseYoutube.data.items,
      selectedVideo: responseYoutube.data.items[0],
      //images: responseCSE.data.items
      images: responseUnsplash.data.results
    });
  };

  onVideoSelect = video => {
    this.setState({ selectedVideo: video })
  };

  render() {
    return (
      <div className="ui container">
        <ThemeDisplay>
          <div className="ui grid">
            <div className="header row">
              <div className="twelve wide column" >
                <SearchBar onFormSubmit={this.onTermSubmit}/>
              </div>
              <div className="four wide column" >
                <Clock />
              </div>
            </div>
            <div className="videos row">
              <div className="nine wide column">
                <VideoDetail video={this.state.selectedVideo} />
                <ImageList images={this.state.images} />
              </div>
              <div className="seven wide column">
                <VideoList
                  onVideoSelect={this.onVideoSelect}
                  videos={this.state.videos}
                />
              </div>
            </div>
          </div>
        </ThemeDisplay>
      </div>
    );
  }
}

export default App;
