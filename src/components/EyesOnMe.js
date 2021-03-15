import React, {Component} from 'react'
export default class EyesOnMe extends Component {
    handleFocusListener = () => {console.log('Good!')}
    handleButtonListener = () => {console.log('Hey! Eyes on me!')}
    
    render(){
        return(
            <button 
                onFocus={this.handleFocusListener} 
                onBlur={this.handleButtonListener}>
            </button>
            
        )
    }
}
