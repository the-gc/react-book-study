import React, {Component} from 'react'

class Comment extends Component {
    render() {
        return (
            <div className='comment'>
                <div className='commnet-user'>
                    <span>{this.props.comment.username}：</span>
                </div>
                <p>{this.props.comment.content}</p>
            </div>
        )
    }
}
export default Comment