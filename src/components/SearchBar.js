import React from 'react';

class SearchBar extends React.Component {
  state = { term : ''};

  onInputChange = event => {
    this.setState({ term: event.target.value })
  };

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Tìm kiếm</label>
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
              placeholder="Tìm gì bạn êi"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
