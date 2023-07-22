import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here
class Comments extends Component{
  state={nameInp:'',
  commentInp:'',
  commentsList:[],
  }

  toggleIsLiked=id=>{
    this.setState(prevState=>({
      commentsList:prevState.commentsList.map(eachComment=>{
        if(id===eachComment.id){
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
      return eachComment
      })
    }))
  }
  deleteComment=(commentId)=>{
    const {commentsList}=this.state
    this.setState({
      commentsList:commentsList.filter(each=>(each.id!==commentId))
    }) 
  }

  onChangeName=(event)=>{
    this.setState({nameInp:event.target.value})
  }

  onChangeComment=(event)=>{
    this.setState({commentInp:event.target.value})
  }

  onClickAddComment= event => {
    event.preventDefault()
    const {nameInp,commentInp}=this.state
    const colorContainer = `color-container ${initialContainerBackgroundClassNames[Math.ceil(Math.random() * initialContainerBackgroundClassNames.length-1)]}`
    const newComment={
    id:uuidv4(),
    name:nameInp,
    comment:commentInp,
    isLiked:false,
    getInitialLetter:colorContainer,
    date:new Date(),
  }
  this.setState(prevState=>({
    commentsList:[...prevState.commentsList,newComment],
    nameInp:'',
    commentInp:''
  }))
  }

  render(){
    const {nameInp,commentInp,commentsList}=this.state
    return(
      <div className="bg-container">
      <h1 className="heading">Comments</h1>
      <div className="user-input-container">
      <div className="input-elements">
      <form className="comments-form" onSubmit={this.onClickAddComment}>
      <p className="sub-heading">Say something about 4.0 Technologies</p>
      <input type="text" className="name" placeholder="Your Name" onChange={this.onChangeName} value={nameInp}/>
      <textarea className="comments-box" placeholder="Your Comment" rows="6" cols="50" onChange={this.onChangeComment} value={commentInp}/>
      <button type="submit" className="add-comment-btn">Add Comment</button>
      </form>
      </div>
      <img src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png" alt="comments" className="comments-img"/>
      </div>
      <hr/>
      <div className="count">
      <div className="comments-count">{commentsList.length}</div>
      <p className="sub-heading1">Comments</p>
      </div>
      <ul className="comments-list">
      {commentsList.map(eachComment=>
      (<CommentItem key={eachComment.id}
      commentDetails={eachComment}
      toggleIsLiked={this.toggleIsLiked}
      deleteComment={this.deleteComment}/>
      ))}
      </ul>
      </div>
    )
  }
}
export default Comments
