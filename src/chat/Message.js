import React, { Component } from 'react';
import { List, Avatar } from 'antd';
import './Message.css';

class Message extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messageList: props.message
        }
    //    let messages = this.state.messageList;
    //    messages.push(props);
    //     this.setState({messageList:messages})
    }
    componentWillReceiveProps(nextProps) {
        this.setState({messageList: nextProps.message});
      }
    render(){
        return (typeof(this.state.messageList) != "undefined" && this.state.messageList.length!==0) ? 
 <List className='message-list'
        size="small"
        dataSource={this.state.messageList}
        renderItem={item => <List.Item>
        
          <div>{item}</div>
          <Avatar src="https://joeschmoe.io/api/v1/random" />

    </List.Item>}
    />:<div></div>
    
    }
}

export default Message