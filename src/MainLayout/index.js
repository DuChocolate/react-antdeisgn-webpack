/*
* 导航布局
*
* */

import React from 'react';
import './index.scss';
import '../commonCss/reset.css';
import { LocaleProvider, Layout, Menu, Button, Icon } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import { Link } from 'react-router-dom';
import menuList from './menuConfig';
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item;

export default class MainLayout extends React.Component {
    state = {
        collapsed: true,
        menu: []
    }
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        // sendFetch('admin/main', {}, 'get')
        //     .then(res => {
        //         if (res.code == 1) {
        //             this.setState({ menu: res.data.menus });
        //         } else {
        //             alert(res.code)
        //         }
        //     })
        // //暴露该方法到全局函数
        // window.setMenus = this.setMenus;
        // let menu = localStorage.getItem('menus');
        // this.setState({ menu });
    }
    //设置菜单
    setMenus = menu => {
        this.setState({
            menu
        });
    }
    onCollapse = collapsed => {
        this.setState({ collapsed });
    }
    exitSystem = () => {
        // sendFetch('admin/logout',{},'get')
        //     .then(data=>{
        //         if(data.code === 1) {
        //             location.href = '/';
        //         } else {
        //             alert(data.msg);
        //         }
        //     })
    }
    renderMenu = menu => {
        if (menu.subs instanceof Array && menu.subs.length !== 0) {
            return (
                <SubMenu key={menu.key} title={<span><Icon type={menu.icon || 'snippets'} /><span>{menu.title}</span></span>}>
                    {menu.subs.map(item => {
                        return this.renderMenu(item);
                    })}
                </SubMenu>
            );
        } else {
            return <MenuItem key={menu.key}><Link to={menu.key}><Icon type={menu.icon || 'snippets'} /><span>{menu.title}</span></Link></MenuItem>;
        }
    }
    render() {
        return (
            <LocaleProvider locale={zhCN}>
            <Layout style={{ minHeight: '100%' }} >
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logoIndex" style={{ height: 64 }}></div>
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            menuList.map(item => { return this.renderMenu(item); })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#108EE9', paddingLeft: 20, color: '#fff', fontSize: 20, overflow: 'hidden' }} >
                        <span style={{ float: 'left' }} >Antdesign 后台组件</span>
                        <Button onClick={this.exitSystem} style={{ float: 'right', marginTop: 17 }} >退出</Button>
                    </Header>
                    <Content style={{ margin: '0 16px', minHeight: '90%', height: 500, overflow: 'auto' }}>
                        {/* <Breadcrumb style={{ margin: '12px 0' }} /> */}
                        <div style={{ padding: 15, background: '#fff', minHeight: '95%', maxWidth: 1400, margin: '0 auto'}}>
                            <div style={{ background: '#fff'}}>{this.props.children}</div>
                        </div>
                    </Content>
                </Layout>
            </Layout>
            </LocaleProvider>
        );
    }
}