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
            this.setState({ message: messages, })
        }
    }
    render(){
        return typeof(this.state.messageList) != "undefined" ? 
 <List id="messageRef"
        className='message-list'
        size="small"
        dataSource={this.state.messageList}
        renderItem={item => <List.Item>
        
          <div>{item}</div>
          <Avatar src="https://joeschmoe.io/api/v1/random" />
    </List.Item>}
    >        <div ref={el => { this.messagesEndRef = el; }} />
    </List>:<div></div>
    
    }
}

export default Message