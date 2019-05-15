import React from 'react';

class Clock extends React.Component {

  state = { date: '', time : '' };

  componentDidMount() {
    /*
setInterval(() => {
      this.setState( { time: new Date().toLocaleTimeString() } )
    }, 1000);
  }*/
    setInterval(() => {
      let current = new Date(Date.now());
      let currentYear = current.getFullYear();
      let currentMonth = (current.getMonth() + 1 < 10 ? "0" : "") + (current.getMonth() + 1);
      let currentDay = (current.getDate() < 10 ? "0" : "") + current.getDate();
      let currentHour = (current.getHours() < 10 ? "0" : "") + current.getHours();
      let currentMin = (current.getMinutes() < 10 ? "0" : "") + current.getMinutes();
      let currentSec = (current.getSeconds() < 10 ? "0" : "") + current.getSeconds();
      let currentDate = currentDay + "/" + currentMonth + "/" + currentYear;
      let currentTime = currentHour + ":" + currentMin + ":" + currentSec;
      this.setState({ date: currentDate, time: currentTime });
    }, 1000);
  }

  render() {
    return (
      <div className="ui huge blue labels" >
        <div className="ui label">{this.state.time}</div>
        <div className="ui label">{this.state.date}</div>
      </div>
    );
  }
}

export default Clock;
