import React, {Component, ReactNode} from "react";
import {Col, Menu, Row} from "antd";
import {Link} from "react-router-dom";
import './index.css';

export class Index extends Component {
    render(): ReactNode {
        return (
            <Row className={'Nav'}>
                <Col md={6}>
                    <Menu>
                        <Menu.Item>
                            <Link to={'/index'}>
                                全部
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/good'}>
                                精华
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/ask'}>
                                问题
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/share'}>
                                分享
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/job'}>
                                招聘
                            </Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to={'/test'}>
                                测试
                            </Link>
                        </Menu.Item>
                    </Menu>
                </Col>
                <Col md={18} className={'content'}>

                </Col>
            </Row>
        );
    }
}