import React from 'react';
import { DragDropContext,DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';

class ContextTest extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            boxes: this.props.componentList
        }
    }
    componentWillReceiveProps(nextProps){
        this.setState({
            boxes: nextProps.componentList
        })
    }
    render(){
        const {boxes} = this.state;
        console.log('------ttt----',boxes);
        return (
            // <DragDropContextProvider backend={HTML5Backend}>
                <Container boxes={boxes}/>
            // </DragDropContextProvider>
        )
    }
}
export default DragDropContext(HTML5Backend)(ContextTest);