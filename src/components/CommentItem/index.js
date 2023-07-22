// Write your code here
import './index.css'
import {formatDistanceToNow} from 'date-fns'
const CommentItem=props=>{
    const {commentDetails}=props
    const {id,name,comment,isLiked,getInitialLetter,date}=commentDetails
    const commentPostedDate=formatDistanceToNow(date)
    const initialLetter=name ? name[0].toUpperCase() : ''
    const likeImageUrls=isLiked ? "https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png" : "https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png"
    const likeBtn=isLiked ? "active" : "non-active"
    const onClickLike=()=>{
        const {toggleIsLiked}=props
        toggleIsLiked(id)
    }
    const onClickDelete=()=>{
        const {deleteComment}=props
        deleteComment(id)
    }
    return(
        <li className="comments-list">
        <div className="comments-container">
        <div className="comment-details">
        <div className={getInitialLetter}>
        <p className="initial-letter">{initialLetter}</p>
        </div>
        <p className="commentor-name">{name}</p>
        <p className="commented-time">{commentPostedDate} ago</p>
        </div>
        <p className="comment">{comment}</p>
        <div className="footer">
        <div>
        <img src={likeImageUrls} className="like-img" alt="like"/>
        <button type="button" onClick={onClickLike} className={likeBtn}>
        Like</button>
        </div>
        <button type="button" onClick={onClickDelete} data-testid="delete" className="delete-btn">
        <img src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png" alt="delete" className="delete-img"/>
        </button>
        </div>
        </div>
        <hr/>
        </li>
    )
}
export default CommentItem
