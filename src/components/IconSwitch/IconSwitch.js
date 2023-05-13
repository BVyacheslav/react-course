import style from './IconSwitch.module.css';

export const IconSwitch = ({ icon, onSwitch }) => {

  const handleSwitch = (e) => {
    onSwitch(icon === 'view_list' ? 'view_module' : 'view_list')
  }

  return (
    <div className={style.iconSwitch}>
      <button className="material-icons" onClick={handleSwitch}>{icon}</button>
    </div>
  )
}