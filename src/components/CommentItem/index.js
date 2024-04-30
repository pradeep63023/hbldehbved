// Write your code here

import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {CommentDetails} = props
  const {id,name, comment, isLiked, initialClassName, date} = CommentDetails
  const initial = name ? name[0].toupperCase() : ''
  const likeTextClassName = isLiked ? 'button-active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleisLiked} = props
    toggleisLiked(id)
  }

  const onDelelteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="commcontainer">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div className="buttons-container">
          <p className="username">{name}</p>
          <p className="time">{postedTime} ago</p>
        </div>
        <p>{comment}</p>
      </div>
      <div className="buttonscontainer">
        <div>
          <img src={likeImageUrl} alt="like" className="like-imag" />
          <button
            type="button"
            onClick={onClickLike}
            className={likeTextClassName}
          >
            Like
          </button>
        </div>
        <button
          className="b"
          type="button"
          onClick={onDelelteComment}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png "
            alt="delete"
          />
        </button>
      </div>
      <hr className="Comment-line" />
    </li>
  )
}

export default CommentItem
