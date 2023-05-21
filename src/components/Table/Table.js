export const Table = ({ workouts, setWorkouts }) => {

  const handleRemove = (date) => () => {
    setWorkouts(workouts.filter((workout) => workout.date !== date))
  }

  return (
    <div>
      <div className="header">
        <span>Дата (ДД.ММ.ГГ)</span>
        <span>Пройдено км</span>
        <span>Действия</span>
      </div>

      <div className="table">
        {workouts.map(workout =>
          <div className="workout" key={workout.date}>
            <span>{workout.date}</span>
            <span>{workout.distance}</span>
            <button className="deleteButton" onClick={handleRemove(workout.date)}>✘</button>
          </div>
        )}
      </div>
    </div>
  )
}
