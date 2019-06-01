import React, {Component, ReactNode} from "react";
import {Col, Layout, Row} from "antd";


export class MainHeader extends Component {
    render(): ReactNode {
        return (
            <Layout.Header>
                <Row className={'Wrap'}>
                    <Col md={6} xs={24}>
                        <h1 id={'logo'}>cNode</h1>
                    </Col>
                    <Col md={18} xs={0}></Col>
                </Row>
            </Layout.Header>
        );
    }
}