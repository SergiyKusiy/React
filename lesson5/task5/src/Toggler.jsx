import React from 'react';

class Toggler extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         toggler: 'Off',
      }
   }

   change = e => {
      this.setState({
         toggler: this.state.toggler === 'Off' ? 'On' : 'Off',
      });
   }

   render() {
      return (
         <button className='toggler'  onClick={this.change}>
            {this.state.toggler}
         </ button>
      )
   }
   
}

export default Toggler;
