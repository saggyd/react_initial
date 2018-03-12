import React,{Component} from 'react';
import './home.css';
import Aux from '../../hoc/aux';
import * as actionType from '../../store/action';

import {connect} from 'react-redux';


class Home extends Component {
    clickHandler = (type, value) => {
        switch(type) {
            case 'ADD':
                this.setState({counter: this.state.counter + 10});
                break;
            case 'SUBTRACT':
                this.setState({counter: this.state.counter - 10});
                break;
            case 'MULTIPLY':
                this.setState({counter: this.state.counter * 5});
                break;
            default:
                break;
        }
    }

    render() {
        return (
            <Aux>
                <div className="mainContainer">
                    <ul className="buttonGroup">
                        <li onClick={() => this.props.addClickHandler(10)}>Add 10</li>
                        <li onClick={() => this.props.subtractClickHandler(10)}>Subtract 10</li>
                        <li onClick={() => this.props.mulClickHandler(5)}>Multiply 5</li>
                    </ul>
                    <div className="clearfix"></div>
                    <hr/>
                    <p className="result">The result is: <span>{this.props.counter}</span></p>
                </div>                
            </Aux>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        counter : state.counter
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addClickHandler: (val) => dispatch({type: actionType.ADD, value: val}),
        subtractClickHandler: (val) => dispatch({type: actionType.SUBSTRACT, value: val}),
        mulClickHandler: (val) => dispatch({type: actionType.MULTIPLY, value: val})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);