import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';
import './Chatbox.css';
import Message from './Message.js'

const { TextArea } = Input;

class Chatbox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      messageList: []
    }
    this.inputChange = this.inputChange.bind(this);
    this.sendMessage = this.sendMessage.bind(this);

  }

  inputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  sendMessage() {
    let messages = this.state.messageList;
    messages.push(this.state.inputValue);
    this.setState({ message: messages,  })
    this.setState({ inputValue: "" });
    console.log(this.state.inputValue);
  }

  render() {
    return <div className="chatbox">
      <Row className="chatbox-row">
        <Col className="chatbox-col" span={12} offset={6}>
          <div className="chatbox-header">
          </div>
          <div className="chatbox-content">
            <Message message={this.state.message}></Message>
          </div>
          <Row className="chatbox-input">
            <Col span={18}>
              <TextArea type="textarea" rows={8} onChange={this.inputChange} value={this.state.inputValue} />
            </Col>
            <Col span={6}>
              <Button type="primary" size="large" onClick={this.sendMessage} style={{ width: "100%", height: "100%", marginLeft: "2px" }}>
                发送
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  }

}

export default Chatbox