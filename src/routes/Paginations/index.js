import React from 'react';
import { Row, Col, Card, Pagination } from 'antd';
export default class Paginations extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: 3
        };
    }
    onShowSizeChange = (current, pageSize) => {
        console.log('-----current--', current, '----pageSize---', pageSize);
    }
    onChange = (pageNumber, pageSize) => {
        console.log('Page:', pageNumber, pageSize);
    }
    onControlChange = page => {
        console.log(page);
        this.setState({
            current: page
        });
    }
    itemRender = (current, type, originalElement) => {
        if (type === 'prev') {
            return <a>Previous</a>;
        } if (type === 'next') {
            return <a>Next</a>;
        }
        return originalElement;
    }
    render() {
        const {current} = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title='基础分页'>
                            <Pagination defaultCurrent={1} total={50}/>
                            <Pagination defaultCurrent={6} total={500} style={{margin: '10px 0'}}/>
                            <Pagination showSizeChanger onShowSizeChange={this.onShowSizeChange} defaultCurrent={3} total={500} style={{margin: '10px 0'}}/>
                            <Pagination showQuickJumper defaultCurrent={2} total={500} onChange={this.onChange} style={{margin: '10px 0'}}/>
                            <Pagination simple defaultCurrent={2} total={50} style={{margin: '10px 0'}}/>
                            <Pagination current={current} onChange={this.onControlChange} total={500} style={{margin: '10px 0'}}/>
                            <Pagination total={85} showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`} pageSize={20} defaultCurrent={1}  style={{margin: '10px 0'}}/>
                            <Pagination total={500} itemRender={this.itemRender}/>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}