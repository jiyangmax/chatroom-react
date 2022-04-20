import React, {Component } from 'react';
import { Row, Col } from 'antd';
import './Chatbox.css';


class Chatbox extends Component {
    render() {
        return <div className="chatbox">
        <Row className="chatbox-row">
          <Col className="chatbox-col" span={12} offset={6}>
            <div className="chatbox-content"></div>
          
          </Col>
        </Row>
      </div>
    }

}

export default Chatbox