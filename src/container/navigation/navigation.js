import React, { Component } from 'react';
import './navigation.module.scss';
import { NavLink } from 'react-router-dom'
import { Layout, Menu } from 'antd';

const { Header } = Layout;

class Navigation extends Component {
    render () {
        return (
            <div styleName='Navigation' className='Navigation'>
                <Layout className='layout'>
                    <Header>
                        <div className='logo' />
                        <Menu theme='dark' mode='horizontal' defaultSelectedKeys={['2']} style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key='1'>
                                <NavLink to='/home/resume' activeClassName='selected'>
                                    resume
                                </NavLink>
                            </Menu.Item>
                            <Menu.Item key='2'>
                                <NavLink to='/home/discribtion' activeClassName='selected'>
                                    discribtion
                                </NavLink></Menu.Item>
                            <Menu.Item key='3'>nav 3</Menu.Item>
                        </Menu>
                    </Header>
                </Layout>

            </div>
        );
    }
}

export default Navigation;
