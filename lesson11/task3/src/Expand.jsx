import React, { Component } from 'react';

class Expand extends Component {
   state = {
      isHide: false,
   };

   toggleBtn = () => {
      this.setState({ isHide: !this.state.isHide });
   }
   


   render() {
      return (
         <div className="expand border">
            <div className='expand__header'>
               <span className="expand__title">{this.props.title}</span>
               <button onClick={this.toggleBtn} className="expand__toggle-btn">
                  {this.state.isHide
                     ? <i className="fas fa-chevron-up">-</i>
                     : <i className="fas fa-chevron-down">+</i>
                  }
               </button>
            </div>
            {this.state.isHide ? <div className="expand__content">{this.props.children}</div> : null}
         </div>
      );
   }; 
}
export default Expand;
