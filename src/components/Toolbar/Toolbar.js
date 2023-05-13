import style from './Toolbar.module.css';

export const Toolbar = ({ filters, selected, onSelectFilter }) => {

  const handleSelectFilter = (e) => {
    onSelectFilter(e.target.innerText)
  }

  return (
    <div className={style.toolbar}>
      {
        filters.map((filter) =>
          <button
            key={filter}
            className={filter === selected ? style.selectedButton : style.button}
            onClick={handleSelectFilter}>
            {filter}
          </button>
        )
      }
    </div>
  )
}