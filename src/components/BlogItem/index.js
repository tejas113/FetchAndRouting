import './index.css'
// eslint-disable-next-line
import {Link} from 'react-router-dom'

const BlogItem = props => {
  const {details} = props
  // eslint-disable-next-line
  const {id, imageUrl, avatarUrl, author, topic, title} = details
  return (
    <li className="listEdit">
      <Link to={`/blogs/${id}`}>
        <img src={imageUrl} className="imgEdit" alt="img" />
        <div className="list2contEdit">
          <p className="paraEdit">{topic}</p>
          <h1 className="headEdit">{title}</h1>
          <div className="avatarCont">
            <img src={avatarUrl} alt="img" />
            <p className="paraEdit">{author}</p>
          </div>
        </div>
      </Link>
    </li>
  )
}

export default BlogItem
