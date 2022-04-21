import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import './Chatbox.css';

const { TextArea } = Input;

class Chatbox extends Component {
  render() {
    return <div className="chatbox">
      <Row className="chatbox-row">
        <Col className="chatbox-col" span={12} offset={6}>
           <div className="chatbox-header">
          </div>
          <div className="chatbox-content">
          </div>
          <Row className="chatbox-input">
            <Col span={18}>
              <TextArea type="textarea" rows={4} />
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  }

}

export default Chatbox