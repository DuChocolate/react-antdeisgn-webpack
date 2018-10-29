import React from 'react';
import { Row, Col, Card, Affix, Button } from 'antd';
import './index.scss';

export default class Affixs extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            top: 10,
            bottom: 10
        };
    }
    AddTop = () => {
        this.setState({
            top: this.state.top + 10
        });
    }
    AddBottom = () => {
        this.setState({
            bottom: this.state.bottom + 10
        });
    }
    render() {
        const { top, bottom } = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title='基本'>
                            <Affix offsetTop={top}>
                                <Button type='primary' onClick={this.AddTop}>Affix Top</Button>
                            </Affix>
                            <br />
                            <Affix offsetBottom={bottom}>
                                <Button type='primary' onClick={this.AddBottom}>Affix Bottom</Button>
                            </Affix>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='固定状态改变的回调'>
                            <Affix offsetTop={120} onChange={affixd => console.log(affixd)}>
                                <Button>120px to affix top</Button>
                            </Affix>
                        </Card>
                    </Col>
                    <Col span={12} style={{marginTop: 10}}>
                        <Card title='滚动容器'>
                            <div className='scrollable-container' ref={node => { this.container = node; }}>
                                <div className='background'>
                                    <Affix target={() => this.container}>
                                        <Button type='primary'>Fixed at the top of container</Button>
                                    </Affix>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}