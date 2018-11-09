import React from 'react';
import { Button, Modal, Form, Input, Table, Select } from 'antd';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Container from './Container';
import Context from './Context';
const FormItem = Form.Item;
const Option = Select.Option;
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
            choosedCom: '',
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
        let obj = {top: 40, left: 500, comp: <Input placeholder='请输入新组件' />};
        let test = this.state.componentList;
        test.e = obj;
        this.setState({componentList: test});
        this.onCancel();
    }
    chooseComponent = (e) => {
        this.setState({
            choosedCom: e
        })
    }
    render() {
        const { isShow, componentList } = this.state;
        console.log('-----', componentList);
        return (
            <div>
                <div>
                    <Button type='primary' style={{marginBottom: 10}} onClick={this.showModal}>添加</Button>
                    <Context componentList={componentList} />
                </div>
                <Modal 
                    title='添加组件'
                    visible={isShow}
                    onCancel={this.onCancel}
                    onOk={this.onOk}
                >
                    <Select style={{width: 200}} onChange={this.chooseComponent}>
                        <Option value='Select'>Select</Option>
                        <Option value='Input'>Input</Option>
                        <Option value='Button'>Button</Option>
                    </Select>
                </Modal>
            </div>
        );
    }
}