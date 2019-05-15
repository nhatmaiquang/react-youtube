import '../css/ThemeDisplay.css';
import React from 'react';

const themeConfig = {
  light: {
    text: 'Chào buổi sáng bạn êi',
    iconName: 'sun'
  },
  dark: {
    text: 'Chào buổi tối bạn êi',
    iconName: 'moon outline'
  }
};

const getTheme = (hour) => {
  if (hour > 20 || hour < 4) {
    return 'dark';
  }
  else {
    return 'light';
  }
};

const ThemeDisplay = (props) => {
  const theme = getTheme(new Date().getHours());
  const { text, iconName } = themeConfig[theme];

  return (
    <div className = {`theme-display ${theme}`}>
      <h1>{text}</h1>
      <i className = {`${iconName} icon`}></i>
      <div>{props.children}</div>
    </div>
  );
};

export default ThemeDisplay;
