import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textColor: ' ',
    };
    this.hover = this.hover.bind(this);
  }
  hover(color) {
    this.setState({
      textColor: color,
    });
  }

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.textColor}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.hover('Coral')}
            onMouseLeave={() => this.hover('')}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.hover('Aqua')}
            onMouseLeave={() => this.hover('')}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.hover('Bisque')}
            onMouseLeave={() => this.hover('')}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
