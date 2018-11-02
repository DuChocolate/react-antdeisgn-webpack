import React from 'react';
import { Button, Modal, Form, Input, Table } from 'antd';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';
const FormItem = Form.Item;
const columns = [{
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
}, {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
}, {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
}];
const dataSource = [{
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号'
}, {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号'
}];
export default class Index extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isShow: false,
            componentList: {
				a: { top: 20, left: 20, comp: <Input placeholder='请输入' />},
                c: { top: 20, left: 200, comp: <Button type='primary'>点击</Button>},
                d: { top: 70, left: 20, comp: <Table dataSource={dataSource} columns={columns}/>}
            }
        };
    }
    showModal = () => {
        this.setState({isShow: true});
    }
    onCancel = () => {
        this.setState({isShow: false});
    }
    onOk = () => {
        this.onCancel();
    }
    render() {
        const { isShow, componentList } = this.state;
        return (
            <div>
                <DragDropContextProvider backend={HTML5Backend}>
                    <div>
                        <Button type='primary' style={{marginBottom: 10}} onClick={this.showModal}>添加</Button>
                        <Container boxes={componentList}/>
                    </div>
                </DragDropContextProvider>
                <Modal 
                    title='添加组件'
                    visible={isShow}
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                >
                    哈哈哈哈
                </Modal>
            </div>
        );
    }
}