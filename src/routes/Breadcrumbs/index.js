import React from 'react';
import { Row, Col, Card, Breadcrumb, Icon } from 'antd';

export default class Breadcrumbs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title='基本'>
                            <Breadcrumb>
                                <Breadcrumb.Item>Home</Breadcrumb.Item>
                                <Breadcrumb.Item><a href=''>Application Center</a></Breadcrumb.Item>
                                <Breadcrumb.Item><a href=''>Application List</a></Breadcrumb.Item>
                                <Breadcrumb.Item>An Application</Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='带有图标的'>
                            <Breadcrumb>
                                <Breadcrumb.Item href=''>
                                    <Icon type='home' />
                                </Breadcrumb.Item>
                                <Breadcrumb.Item href=''>
                                    <Icon type='user' />
                                    <span>Application List</span>
                                </Breadcrumb.Item>
                                <Breadcrumb.Item>
                                    Application
                                </Breadcrumb.Item>
                            </Breadcrumb>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}