import React from 'react';
import './styles.css';



class FlowerQuantity extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ 
            count: this.state.count + 1 
        }) 
    } 


    decrement = () => {
        if(this.state.count === 0){
            this.state.count = 0
        } else {
            this.setState({ 
                count: this.state.count - 1
            }) 
        }
       
        
    } 

    render() {
        return (
            <div className="flowerQuantity-block">
                <button onClick = {this.decrement}>-</button>
                <input type = 'number' placeholder = {this.state.count} />
                <button onClick = {this.increment}>+</button>
            </div>
        )

    }
}



export default FlowerQuantity;