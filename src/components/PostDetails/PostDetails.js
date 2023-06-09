import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { EditForm } from '../EditForm';

export const PostDetails = ({ selectedPost, fetchPosts }) => {

  const [isEdit, setIsEdit] = useState(false);

  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:7070/posts/${selectedPost.id}`, { method: 'DELETE' }).then(() => fetchPosts());
    navigate('/');
  }

  return (
    <>
      {isEdit ?
        <EditForm selectedPost={selectedPost} fetchPosts={fetchPosts} />
        :
        <div className="post">
          <span>🧔</span>
          <span>User name</span>
          <div>Основатель группы</div>
          <p>{selectedPost.content}</p>
          <div>
            <button className="postButton">👍 Нравится</button>
            <button className="postButton">💬 Комментировать</button>
          </div>
          <button className="createButton" onClick={() => setIsEdit(true)}>Изменить</button>
          <button className="deleteButton" onClick={handleDelete}>Удалить</button>
        </div>
      }
    </>
  )
}