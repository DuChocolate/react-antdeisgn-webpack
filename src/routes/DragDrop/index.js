import React from 'react';
import { Row, Col, Card } from 'antd';
import Container from './Dustbin/Container';
import Naive from './Naive/index';
export default class DragDrop extends React.Component{
    render() {
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title='Dustbin-Single Target'>
                            {/* <Container /> */}
                        </Card>
                    </Col>
                    <Col span={24}>
                        <Card title='Drag Around-Naive'>
                            <Naive />
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}