import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import Clock from './Clock';
import ThemeDisplay from './ThemeDisplay';
import customsearch from '../apis/customsearch';

class App extends React.Component {
  state = {videos: [], selectedVideo: null };

  componentDidMount() {
    this.onTermSubmit('AMEE');
  }

  onTermSubmit = async term => {
    const response = await youtube.get('/search', {
      params: {
        q: term
      }
    });

    const response2 = await customsearch.get('', {
      params: {
        q: term
      }
    });

    console.log(response2);

    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0]
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
