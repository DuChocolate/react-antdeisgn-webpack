import React from 'react';
import { message } from 'antd';
import { DragSource } from 'react-dnd';
import ItemTypes from './ItemTypes';
const style = {
    border: '1px dashed gray',
    backgroundColor: 'white',
    padding: '0.5rem 1rem',
    marginRight: '1.5rem',
    marginBottom: '1.5rem',
    cursor: 'move',
    float: 'left'
};
const cardSource = {
    beginDrag(props, monitor, component) {
        // Return the data describing the dragged item
        const item = {
            name: props.name,
            source: component
        };
        return item;
    },
    endDrag(props, monitor, component) {
        const item = monitor.getItem();
        const dropResult = monitor.getDropResult();
        // /dropResult.target.props.children
        console.log(dropResult.target.props.children, '------', item, dropResult);
		if (dropResult) {
			message.info(`You dropped ${item.name} into ${dropResult.name}!`);
		}
	}
};
  /**
   * Specifies the props to inject into your component.
   */
function collect(connect, monitor) {
    return {
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    };
}
class Box extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        };
    }
    render() {
        const { isDragging, connectDragSource, name } = this.props;
        const opacity = isDragging ? 0.4 : 1;
        return connectDragSource(
            <div style={{...style, opacity}}>
                {name}
            </div>
        );
    }
}
export default DragSource(ItemTypes.BOX, cardSource, collect)(Box);