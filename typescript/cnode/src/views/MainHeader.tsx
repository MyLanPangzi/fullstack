import React, {Component, FC, ReactNode} from "react";
import {Button, Col, Divider, Dropdown, Icon, Layout, Menu, Row} from "antd";
import './index.css';
import {Link} from "react-router-dom";

const Nav: FC = () => (
    <Menu className={'Menu'} theme={"dark"} mode={"horizontal"}>
        <Menu.Item>
            <Link to={'/index'}>
                <Icon type="home"/>
                首页
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={'/book'}>
                <Icon type={'book'}/>
                教程
            </Link>
        </Menu.Item>
        <Menu.Item>
            <Link to={'/about'}>
                <Icon type="info-circle"/>
                关于
            </Link>
        </Menu.Item>
    </Menu>
);

export class MainHeader extends Component {
    render(): ReactNode {
        return (
            <Layout.Header>
                <Row className={'Wrap'}>
                    <Col md={6} xs={24}>
                        <h1 id={'logo'}>cNode</h1>
                    </Col>
                    <Col md={18} xs={0}>
                        <Divider className={'Divider'} type={'vertical'}/>
                        <Nav/>
                    </Col>
                    <Col md={0} xs={24} className='Dropdown'>
                        <Dropdown overlay={Nav} trigger={["click"]}>
                            <Button>
                                <Icon type="bars"/>
                            </Button>
                        </Dropdown>
                    </Col>
                </Row>
            </Layout.Header>
        );
    }
}