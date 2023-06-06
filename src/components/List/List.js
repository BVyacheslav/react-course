
export const List = ({ users, selectedUserId, setSelectedUserId }) => {

  const handleClick = ({ target: { id } }) => {
    setSelectedUserId(Number(id))
  }

  return (
    <div style={{ marginRight: 10 }}>
      {
        users.map((user) =>
          <div style={{ display: 'flex' }} key={user.id}>
            <span
              id={user.id}
              className="info"
              onClick={handleClick}
              style={user.id === selectedUserId ? { background: 'blue', color: 'white' } : {}}>
              {user.name}
            </span>
          </div>
        )
      }
    </div>
  )
}
