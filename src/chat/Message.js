import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import { WEBSOCKET } from './const';
import './Message.css';


class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: []
        }
        this.msgId = props.msgId;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
    this.scrollToBottom();
    
    }
    scrollToBottom = () => {
        this.messagesEndRef.scrollIntoView({ behavior: 'smooth' })
        // const messagesEndRef = document.getElementsByClassName("messageRef");
        // if(messagesEndRef.length !==0){
        //     messagesEndRef.scrollIntoView({ behavior: "smooth" });

        // }
    };
    componentDidMount() {
  
        WEBSOCKET.onmessage = (msg) => {
            let messages = this.state.messageList;
            messages.push(msg.data);
            this.setState({ messageList: messages, })
        }
    }
    render(){
        return typeof(this.state.messageList) != "undefined" ? 
 <List id="messageRef"
        className='message-list'
        size="small"
        dataSource={this.state.messageList}
        renderItem={item => 
         {return this.msgId === item.split(",")[0] ?
        <List.Item className='my-message'>
          <div>{item.split(",")[1]}</div>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
        </List.Item>
        :<List.Item className='others-message'>
              <Avatar src="https://joeschmoe.io/api/v1/random" />
        <div>{item.split(",")[1]}</div>
        </List.Item>}}
    >        
    <div ref={el => { this.messagesEndRef = el; }} />
    </List>:<div></div>
    
    }
}

export default Message