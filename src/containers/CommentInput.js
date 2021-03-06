import React, {Component} from 'react'
import PropsType from 'prop-types'
import {connect} from 'react-redux'
import CommentInput from '../components/CommentInput'
import {addComment} from '../reducers/comments'

class CommentInputContainer extends Component {
    static propTypes = {
        comments: PropsType.array,
        onSubmit: PropsType.func
    }
    constructor () {
        super()
        this.state = {
            username: ''
        }
    }

    componentWillMount() {
        this._loadUsername()
    }
    _loadUsername() {
        const username = localStorage.getItem('username')
        if (username) {
            this.setState({username})
        }
    }
    _saveUserName(username) {
        localStorage.setItem('username', username)
    }
    handleSubmitComment(comment) {
        console.log(comment, '----');
        if (!comment) return 
        if (!comment.username) return
        if (!comment.content) return 
        const {comments} = this.props
        const newComments = [...comments, comment]
        localStorage.setItem('comments', JSON.stringify(newComments))
        if (this.props.onSubmit) {
            this.props.onSubmit(comment)
        }
    }
    render() {
        return (
            <CommentInput
            username={this.state.username}
            onUserNameInputBlur={this._saveUserName.bind(this)}
            onSubmit={this.handleSubmitComment.bind(this)}/>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        comments: state.comments
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSubmit: (comment) => {
            dispatch(addComment(comment))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(CommentInputContainer)