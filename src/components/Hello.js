import React from 'react';
import * as actionTypes from '../actions/myCount';
import { connect } from 'react-redux';

class Hello extends React.Component{
    constructor(props){
        super(props);
    }
    clickEvent = () => { console.log('hahhaa'); };
    render(){
        const {name, num, dispatch} = this.props;
        return (
            <div>
                <span>{name}---Hello Index哈哈哈哈:{num}</span>
                <button onClick={() => { dispatch(actionTypes.addCount('添加')); }}>+</button>
                <button onClick={() => { dispatch(actionTypes.desCount('减少')); }}>-</button>
            </div>
        );
    }
}
const mapStateToProps = state => {
    const {name, num} = state.myCount;
    return {name, num};
};
export default connect(mapStateToProps)(Hello);