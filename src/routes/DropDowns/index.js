import React from 'react';
import { Row, Col, Card, Dropdown, Icon, Menu, Button, message } from 'antd';
import SubMenu from 'antd/lib/menu/SubMenu';

export default class DropDowns extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        };
    }
    getMenu = () => <Menu>
        <Menu.Item>
            <a target='_blank' href=''>1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target='_blank' href=''>2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target='_blank' href=''>3rd menu item</a>
        </Menu.Item>
    </Menu>
    getDisMenu = () => <Menu>
        <Menu.Item key='0'>
            <a target='_blank' href='#'>1st menu item</a>
        </Menu.Item>
        <Menu.Item key='1'>
            <a target='_blank' href='#'>2nd menu item</a>
        </Menu.Item>
        <Menu.Divider />
        <Menu.Item key='3' disabled>3rd menu item</Menu.Item>
    </Menu>
    menuClick = ({ key }) => {
        message.info(`Click on item ${key}`);
    }
    getKeyMenu = () => <Menu onClick={this.menuClick}>
        <Menu.Item key='1'>1st menu item</Menu.Item>
        <Menu.Item key='2'>2nd menu item</Menu.Item>
        <Menu.Item key='3'>3rd menu item</Menu.Item>
    </Menu>
    getCascadMenu = () => <Menu>
        <Menu.Item>1st menu item</Menu.Item>
        <Menu.Item>2nd menu item</Menu.Item>
        <SubMenu title='sub menu'>
            <Menu.Item>3rd menu item</Menu.Item>
            <Menu.Item>4th menu item</Menu.Item>
        </SubMenu>
        <SubMenu title='disabled sub menu' disabled>
            <Menu.Item>5th menu item</Menu.Item>
            <Menu.Item>6th menu item</Menu.Item>
        </SubMenu>
    </Menu>
    handleButtonClick = e => {
        message.info('Click on left button');
        console.log('click left button', e);
    }
    handleMenuClick = e => {
        message.info('Click on menu item.');
        console.log('click', e);
    }
    getIconMenu = () => <Menu onClick={this.handleMenuClick}>
        <Menu.Item key='1'><Icon type='user' />1st menu item</Menu.Item>
        <Menu.Item key='2'><Icon type='user' />2nd menu item</Menu.Item>
        <Menu.Item key='3'><Icon type='user' />3rd menu item</Menu.Item>
    </Menu>
    handleVisibleChange = flag => {
        console.log('-----', flag);
        this.setState({visible: flag});
    }
    handleMenuClick2 = e => {
        if (e.key === '3') {
            this.setState({visible: false});
        }
    }
    getClickMenu = () => <Menu onClick={this.handleMenuClick2}>
        <Menu.Item key='1'>Clicking me will not close the menu.</Menu.Item>
        <Menu.Item key='2'>Clicking me will not close the menu also.</Menu.Item>
        <Menu.Item key='3'>Clicking me will close the menu.</Menu.Item>
    </Menu>
    render() {
        const {visible} = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card title='基本'>
                            <Dropdown overlay={this.getMenu()}>
                                <a href='#'>
                                    Hover me <Icon type='down' />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={this.getDisMenu()}>
                                <a href='#' style={{marginLeft: 20}} >
                                    Hover me <Icon type='down' />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={this.getKeyMenu()}>
                                <a href='#' style={{marginLeft: 20}} >
                                    Hover me,Click menu item <Icon type='down' />
                                </a>
                            </Dropdown>
                            <br/><br/>
                            <Dropdown overlay={this.getCascadMenu()}>
                                <a href='#'>
                                    Cascading menu <Icon type='down' />
                                </a>
                            </Dropdown>
                            <Dropdown overlay={this.getMenu()} trigger={['contextMenu']}>
                                <span style={{ marginLeft: 10}}>Right Click on Me</span>
                            </Dropdown>
                            <Dropdown overlay={this.getMenu()} trigger={['click']}>
                                <a href='#' style={{marginLeft: 10}}>
                                    Click me <Icon type='down' />
                                </a>
                            </Dropdown>
                            <br/><br/>
                            <Dropdown.Button onClick={this.handleButtonClick} overlay={this.getIconMenu()}>
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown.Button onClick={this.handleButtonClick} overlay={this.getIconMenu()} disabled style={{marginLeft: 10}}>
                                Dropdown
                            </Dropdown.Button>
                            <Dropdown overlay={this.getMenu()}>
                                <Button style={{marginLeft: 10}}>
                                    Button <Icon type='down' />
                                </Button>
                            </Dropdown>
                            <br/><br/>
                            <Dropdown overlay={this.getClickMenu()} visible={visible} onVisibleChange={this.handleVisibleChange}>
                                <a href='#'>
                                    Hover me <Icon type='down' />
                                </a>
                            </Dropdown>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='弹出位置'>
                            <Dropdown overlay={this.getMenu()} placement='bottomLeft'>
                                <Button>bottomLeft</Button>
                            </Dropdown>
                            <Dropdown overlay={this.getMenu()} placement='bottomCenter'>
                                <Button>bottomCenter</Button>
                            </Dropdown>
                            <Dropdown overlay={this.getMenu()} placement='bottomRight'>
                                <Button>bottomRight</Button>
                            </Dropdown>
                            <br /><br />
                            <Dropdown overlay={this.getMenu()} placement='topLeft'>
                                <Button>topLeft</Button>
                            </Dropdown>
                            <Dropdown overlay={this.getMenu()} placement='topCenter'>
                                <Button>topCenter</Button>
                            </Dropdown>
                            <Dropdown overlay={this.getMenu()} placement='topRight'>
                                <Button>topRight</Button>
                            </Dropdown>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}