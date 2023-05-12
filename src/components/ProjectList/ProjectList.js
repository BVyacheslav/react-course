import style from './ProjectList.module.css';

export const ProjectList = ({ projects }) => {

  return (
    <div className={style.projectList}>
      {projects.map((project, i) => <img key={project.img + i} className={style.project} src={project.img} />)}
    </div>
  )
}
