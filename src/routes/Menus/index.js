import React from 'react';
import { Row, Col, Card, Menu, Icon, Button, Switch } from 'antd';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class Menus extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            current: 'mail',
            collapsed: false,
            openKeys: ['sub1'],
            rootSubmenuKeys: ['sub1', 'sub2', 'sub4'],
            mode: 'inline',
            theme: 'light'
        };
    }
    handleClick1 = e => {
        console.log('click', e);
        this.setState({current: e.key});
    }
    handleClick2 = e => {
        console.log('click', e);
    }
    toggleCollapsed = () => {
        this.setState({collapsed: !this.state.collapsed});
    }
    onOpenChange = openKeys => {
        const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
        if (this.state.rootSubmenuKeys.indexOf(latestOpenKey) === -1){
            this.setState({ openKeys });
        } else {
            this.setState({
                openKeys: latestOpenKey ? [latestOpenKey] : []
            });
        }
    }
    changeMode = value => {
        this.setState({
            mode: value ? 'vertical' : 'inline'
        });
    }
    changeTheme = value => {
        this.setState({
            theme: value ? 'dark' : 'light'
        });
    }
    render() {
        const {current, collapsed, openKeys, mode, theme} = this.state;
        return (
            <div>
                <Row gutter={16}>
                    <Col span={24}>
                        <Card title='顶部导航' style={{marginBottom: 10}}>
                            <Menu onClick={this.handleClick1} selectedKeys={[current]} mode='horizontal'>
                                <Menu.Item key='mail'>
                                    <Icon type='mail' />Navigation One
                                </Menu.Item>
                                <Menu.Item key='app' disabled>
                                    <Icon type='appstore' />Navigation Two
                                </Menu.Item>
                                <SubMenu title={<span><Icon type='setting' />Navigation Three - Submenu</span>}>
                                    <MenuItemGroup title='Item 1'>
                                        <Menu.Item key='setting:1'>Option 1</Menu.Item>
                                        <Menu.Item key='setting:2'>Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title='Item 2'>
                                        <Menu.Item key='setting:3'>Option 3</Menu.Item>
                                        <Menu.Item key='setting:4'>Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <Menu.Item key='alipy'>
                                    <a href='https://ant.design' target='_blank'>Navigation Four - Link</a>
                                </Menu.Item>
                            </Menu>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='内嵌菜单'>
                            <Menu
                                onClick={this.handleClick2}
                                style={{width: 256}}
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                mode='inline'
                            >
                                <SubMenu key='sub1' title={<span><Icon type='mail' /><span>Navigation One</span></span>}>
                                    <MenuItemGroup key='g1' title='Item 1'>
                                        <Menu.Item key='1'>Option 1</Menu.Item>
                                        <Menu.Item key='2'>Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup key='g2' title='Item 2'>
                                        <Menu.Item key='3'>Option 3</Menu.Item>
                                        <Menu.Item key='4'>Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key='sub2' title={<span><Icon type='appstore'/><span>Navigation Two</span></span>}>
                                    <Menu.Item key='5'>Option 5</Menu.Item>
                                    <Menu.Item key='6'>Option 6</Menu.Item>
                                    <SubMenu key='sub3' title='Submenu'>
                                        <Menu.Item key='7'>Option 7</Menu.Item>
                                        <Menu.Item key='8'>Option 8</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu key='sub4' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
                                    <Menu.Item key='9'>Option 9</Menu.Item>
                                    <Menu.Item key='10'>Option 10</Menu.Item>
                                    <Menu.Item key='11'>Option 11</Menu.Item>
                                    <Menu.Item key='12'>Option 12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='缩起内嵌菜单'>
                            <div style={{width: 256}}>
                                <Button type='primary' onClick={this.toggleCollapsed} style={{marginBottom: 16}}>
                                    <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'}/>
                                </Button>
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode='inline'
                                    theme='dark'
                                    inlineCollapsed={collapsed}
                                >
                                    <Menu.Item key='1'>
                                        <Icon type='pie-chart'/>
                                        <span>Option 1</span>
                                    </Menu.Item>
                                    <Menu.Item key='2'>
                                        <Icon type='desktop'/>
                                        <span>Option 2</span>
                                    </Menu.Item>
                                    <Menu.Item key='3'>
                                        <Icon type='inbox'/>
                                        <span>Option 3</span>
                                    </Menu.Item>
                                    <SubMenu key='sub1' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
                                        <Menu.Item key='5'>Option 5</Menu.Item>
                                        <Menu.Item key='6'>Option 6</Menu.Item>
                                        <Menu.Item key='7'>Option 7</Menu.Item>
                                        <Menu.Item key='8'>Option 8</Menu.Item>
                                    </SubMenu>
                                    <SubMenu key='sub2' title={<span><Icon type='appstore'/><span>Navigation Two</span></span>}>
                                        <Menu.Item key='9'>Option 9</Menu.Item>
                                        <Menu.Item key='10'>Option 10</Menu.Item>
                                        <SubMenu key='sub3' title='Submenu'>
                                            <Menu.Item key='11'>Option 11</Menu.Item>
                                            <Menu.Item key='12'>Option 12</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='只展开当前父级菜单'>
                            <Menu
                                mode='inline'
                                openKeys={openKeys}
                                onOpenChange={this.onOpenChange}
                                style={{width: 256}}
                            >
                                <SubMenu key='sub1' title={<span><Icon type='mail'/><span>Navigation One</span></span>}>
                                    <Menu.Item key='1'>Option 1</Menu.Item>
                                    <Menu.Item key='2'>Option 2</Menu.Item>
                                    <Menu.Item key='3'>Option 3</Menu.Item>
                                    <Menu.Item key='4'>Option 4</Menu.Item>
                                </SubMenu>
                                <SubMenu key='sub2' title={<span><Icon type='appstore'/><span>Navigation Two</span></span>}>
                                    <Menu.Item key='5'>Option 5</Menu.Item>
                                    <Menu.Item key='6'>Option 6</Menu.Item>
                                    <SubMenu key='sub3' title='SubMenu'>
                                        <Menu.Item key='7'>Option 7</Menu.Item>
                                        <Menu.Item key='8'>Option 8</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu key='sub4' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
                                    <Menu.Item key='9'>Option 9</Menu.Item>
                                    <Menu.Item key='10'>Option 10</Menu.Item>
                                    <Menu.Item key='11'>Option 11</Menu.Item>
                                    <Menu.Item key='12'>Option 12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='垂直菜单'>
                            <Menu style={{width: 256}} mode='vertical'>
                                <SubMenu key='sub1' title={<span><Icon type='mail'/>Navigation One</span>}>
                                    <MenuItemGroup title='Item 1'>
                                        <Menu.Item key='1'>Option 1</Menu.Item>
                                        <Menu.Item key='2'>Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title='Item 2'>
                                        <Menu.Item key='3'>Option 3</Menu.Item>
                                        <Menu.Item key='4'>Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key='sub2' title={<span><Icon type='setting'/><span>Navigation Two</span></span>}>
                                    <Menu.Item key='5'>Option 5</Menu.Item>
                                    <Menu.Item key='6'>Option 6</Menu.Item>
                                    <SubMenu key='sub3' title='Submenu'>
                                        <Menu.Item key='7'>Option 7</Menu.Item>
                                        <Menu.Item key='8'>Option 8</Menu.Item>
                                    </SubMenu>
                                </SubMenu>
                                <SubMenu key='sub4' title={<span><Icon type='setting'/><span>Navigation Three</span></span>}>
                                    <Menu.Item key='9'>Option 9</Menu.Item>
                                    <Menu.Item key='10'>Option 10</Menu.Item>
                                    <Menu.Item key='11'>Option 11</Menu.Item>
                                    <Menu.Item key='12'>Option 12</Menu.Item>
                                </SubMenu>
                            </Menu>
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card title='切换菜单类型'>
                            <div>
                                <Switch onChange={this.changeMode}/>Change mode
                                <span style={{margin: '0 10px'}}/>
                                <Switch onChange={this.changeTheme}/>CHange theme
                                <br/><br/>
                                <Menu
                                    style={{width: 256}}
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode={mode}
                                    theme={theme}
                                >
                                    <Menu.Item key='1'>
                                        <Icon type='mail'/>Navigation One
                                    </Menu.Item>
                                    <Menu.Item key='2'>
                                        <Icon type='calandar'/>Navigation Two
                                    </Menu.Item>
                                    <SubMenu key='sub1' title={<span><Icon type='appstore'/><span>Navigation Three</span></span>}>
                                        <Menu.Item key='3'>Option 3</Menu.Item>
                                        <Menu.Item key='4'>Option 4</Menu.Item>
                                        <SubMenu key='sub1-2' title='Submenu'>
                                            <Menu.Item key='5'>Option 5</Menu.Item>
                                            <Menu.Item key='6'>Option 6</Menu.Item>
                                        </SubMenu>
                                    </SubMenu>
                                    <SubMenu key='sub2' title={<span><Icon type='setting'/><span>Navigation Four</span></span>}>
                                        <Menu.Item key='7'>Option 7</Menu.Item>
                                        <Menu.Item key='8'>Option 8</Menu.Item>
                                        <Menu.Item key='9'>Option 9</Menu.Item>
                                    </SubMenu>
                                </Menu>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}