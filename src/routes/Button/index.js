import React from 'react';
import { Row, Col, Button, Radio, Card, Icon, Dropdown, Menu } from 'antd';
import './index.scss';

export default class ButtonList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            size: 'default',
            loading: false,
            iconLoading: false
        };
    }
    handleSizeChange = e => {
        this.setState({ size: e.target.value });
    }
    enterLoading = () => {
        this.setState({ loading: true });
    }
    enterIconLoading = () => {
        this.setState({ iconLoading: true });
    }
    handleMenuClick = e => {
        console.log('click', e);
    }
    getMenu = () => {
        return (
            <Menu onClick={this.handleMenuClick}>
                <Menu.Item key='1'>1st item</Menu.Item>
                <Menu.Item key='2'>2nd item</Menu.Item>
                <Menu.Item key='3'>3rd item</Menu.Item>
            </Menu>
        );
    }
    render() {
        const { size } = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <div>
                            <Card title='按钮类型' bordered={false}>
                                <Button type='primary'>Primary</Button>
                                <Button>Default</Button>
                                <Button type='dashed'>Dashed</Button>
                                <Button type='danger'>Danger</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <Card title='图标按钮' bordered={false}>
                                <Button type='primary' shape='circle' icon='search'/>
                                <Button type='primary' icon='search'>Search</Button>
                                <Button shape='circle' icon='search'/>
                                <Button icon='search'>Search</Button>
                                <Button type='dashed' icon='search' shape='circle'/>
                                <Button type='dashed' icon='search'>Search</Button>
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <Card title='按钮尺寸' bordered={false}>
                                <Radio.Group value={size} onChange={this.handleSizeChange}>
                                    <Radio.Button value='large'>Large</Radio.Button>
                                    <Radio.Button value='default'>Default</Radio.Button>
                                    <Radio.Button value='small'>Small</Radio.Button>
                                </Radio.Group>
                                <br/> <br/>
                                <Button type='primary' size={size}>Primary</Button>
                                <Button size={size}>Normal</Button>
                                <Button size={size} type='dashed'>Dashed</Button>
                                <Button type='danger' size={size}>Danger</Button>
                                <br/> <br/>
                                <Button type='primary' shape='circle' icon='download' size={size} />
                                <Button type='primary' icon='download' size={size}>DownLoad</Button>
                                <br/> <br/>
                                <Button.Group size={size}>
                                    <Button type='primary'>
                                        <Icon type='left' />Backward
                                    </Button>
                                    <Button type='primary'>
                                        Forward<Icon type='right' />
                                    </Button>
                                </Button.Group>
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <Card title='不可用状态' bordered={false}>
                                <Button type='primary' disabled>Primary(disabled)</Button>
                                <Button disabled>Default(disabled)</Button>
                                <Button type='dashed' disabled>Dashed(disabled)</Button>
                                <div style={{ marginTop: '8px', padding: '8px', background: 'rgb(190,200,200)' }}>
                                    <Button ghost>Ghost</Button>
                                    <Button ghost disabled>Ghost(disabled)</Button>
                                </div>
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <Card title='加载中状态' bordered={false}>
                                <Button type='primary' loading>Loading</Button>
                                <Button type='primary' size='small' loading>Loading</Button>
                                <Button type='primary' loading={this.state.loading} onClick={this.enterLoading}>Click me</Button>
                                <Button type='primary' icon='poweroff' loading={this.state.iconLoading} onClick={this.enterIconLoading}>Click me</Button>
                                <Button shape='circle' loading />
                                <Button type='primary' shape='circle' loading />
                            </Card>
                        </div>
                    </Col>
                    <Col span={12}>
                        <div>
                            <Card title='多个按钮组合' bordered={false}>
                                <Button type='primary'>primary</Button>
                                <Button>Secondary</Button>
                                <Dropdown overlay={this.getMenu()}>
                                    <Button>Actions <Icon type='down' /></Button>
                                </Dropdown>
                            </Card>
                        </div>
                    </Col>
                </Row>
            </div>
        );
    }
}