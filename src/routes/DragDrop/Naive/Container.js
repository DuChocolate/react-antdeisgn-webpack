import React from 'react';
import { DropTarget } from 'react-dnd';
import ItemTypes from './ItemTypes';
import Box from './Box';
const update = require('immutability-helper');
const styles = {
	width: 900,
	height: 300,
	border: '1px solid black',
	position: 'relative'
};
const boxTarget = {
	drop(props, monitor, component) {
		if (!component) {
			return;
		}
		const item = monitor.getItem();
		const delta = monitor.getDifferenceFromInitialOffset();
		const left = Math.round(item.left + delta.x);
		const top = Math.round(item.top + delta.y);
		component.moveBox(item.id, left, top);
	}
};
function collect(connect){
    return {
        connectDropTarget: connect.dropTarget()
    };
}
class Container extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            boxes: this.props.boxes
        };
    }
    componentWillReceiveProps(nextProps){
        console.log('========');
        this.setState({
            boxes: nextProps.boxes
        })
    }
    moveBox = (id, left, top) => {
        const boxes = this.state.boxes;
        boxes[id].left = left;
        boxes[id].top = top;
        this.setState({ boxes });
	}
    render() {
        const { connectDropTarget } = this.props;
        const { boxes } = this.state;
        console.log('---cccccc----',boxes);
        return (
            connectDropTarget(
                <div style={styles}>
                    {Object.keys(boxes).map(key => {
                        const { left, top, title, comp } = boxes[key];
                        return (
                            <Box
                                key={key}
                                id={key}
                                left={left}
                                top={top}
                            >
                                {comp}
                            </Box>
                        )
                    })}
                </div>
            )
        );
    }
}
export default DropTarget(ItemTypes.BOX, boxTarget, collect)(Container);