import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import ru from 'dayjs/locale/ru';

dayjs.extend(relativeTime);
dayjs.locale('ru')

export const Posts = ({ posts, setSelectedPost }) => {

  const navigate = useNavigate();

  const handleClick = ({ target: { id, innerText } }) => {
    setSelectedPost({ id: Number(id), content: innerText });
    navigate(`/posts/${id}`);
  }

  return (
    <>
      <Link to="/posts/new">
        <button className="createButton">Создать пост</button>
      </Link>
      {posts?.map(post =>
        <div key={post.id} className="post">
          <span>🧔</span>
          <span>User name</span>
          <div>
            <span>Основатель группы </span>
            <span>{dayjs(post.created).fromNow()}</span>
          </div>
          <p id={post.id} className="content" onClick={handleClick}>{post.content}</p>
          <div>
            <button className="postButton">👍 Нравится</button>
            <button className="postButton">💬 Комментировать</button>
          </div>
          <div>
            🧔
            <input placeholder="Напишите комментарий" />
          </div>
        </div>
      )}
    </>
  )
}