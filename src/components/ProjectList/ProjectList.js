import style from './ProjectList.module.css';

export const ProjectList = ({ projects }) => {

  return (
    <div className={style.projectList}>
      {projects.map((project) => <img key={project.id} className={style.project} src={project.img} />)}
    </div>
  )
}
