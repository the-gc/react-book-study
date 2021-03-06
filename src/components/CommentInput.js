import React, {Component} from 'react'
import PropTypes from 'prop-types'


class CommentInput extends Component {
    static propTypes = {
        username: PropTypes.any,
        onSubmit: PropTypes.func,
        onUserNameInputBlur: PropTypes.func
    }
    static defaultProps = {
        username: ''
    }
    constructor(props) {
        super(props);
        this.state = {
            username: props.username,
            content: ''
        }
    }
    componentDidMount() {
        this.textarea.focus()
    }
    handleUsernameChange(e) {
        this.setState({
            username: e.target.value
        })
    }
    handleContentChange(e) {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit() {
        if (this.props.onSubmit) {
            this.props.onSubmit({
                username: this.state.username,
                content: this.state.content,
                createdTime: + new Date()
            })
        }
        this.setState({content: ''})
    }
    render(){
        return (
            <div className='comment-input'>
                <div className='comment-filed'>
                    <span className='comment-filed-name'>用户名：</span>
                    <div className='comment-filed-input'>
                        <input 
                            value={this.state.username}
                            onChange={this.handleUsernameChange.bind(this)}
                            onBlur={this.handleUsernameChange.bind(this)}/>
                    </div>
                </div>

                <div className='comment-filed'>
                    <span className='comment-filed-name'>评论内容：</span>
                    <div className='comment-filed-input'>
                        <textarea
                            ref={(textarea) => this.textarea = textarea} 
                            value={this.state.content}
                            onChange={this.handleContentChange.bind(this)}/>
                    </div>
                </div>
                <div className='comment-filed-button'>
                    <button
                    onClick={this.handleSubmit.bind(this)}>发布</button>
                </div>
            </div>
        )
    }
}

export default CommentInput
