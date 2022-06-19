import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'antd';
import { v4 as uuidv4 } from 'uuid';
import './Chatbox.css';
import Message from './Message.js'
import { WEBSOCKET } from './const';

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
    this.keypress = this.keypress.bind(this);
    this.msgId = uuidv4();
  }

  inputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  sendMessage() {
    let messages = this.state.messageList;
    messages.push(this.state.inputValue);
    this.setState({ message: messages, })
    this.setState({ inputValue: "" });
    WEBSOCKET.send(this.msgId +","+this.state.inputValue);
    console.log(this.state.inputValue);
  }
  keypress(e) {
    if (e.which === 13 && e.altKey) {
      this.setState({ inputValue: this.state.inputValue + "\n" })
    } else if (e.which === 13) {
      this.sendMessage() //发送消息
      e.preventDefault();//禁止回车的默认换行
    }
  }

  render() {
    return <div className="chatbox">
      <Row className="chatbox-row">
        <Col className="chatbox-col" span={12} offset={6}>
          <div className="chatbox-header">
          </div>
          <div className="chatbox-content">
            <Message msgId={this.msgId}></Message>
          </div>
          <Row className="chatbox-input">
            <Col span={18}>
              <TextArea type="textarea" rows={8} onChange={this.inputChange} onKeyPress={this.keypress} value={this.state.inputValue} />
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