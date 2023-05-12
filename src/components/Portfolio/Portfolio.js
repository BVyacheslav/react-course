import { useState } from "react";
import { Toolbar, ProjectList } from "../";
import { allProjects } from "./allProjects";
import style from './Portfolio.module.css';

export const Portfolio = () => {

  const filters = ["All", "Websites", "Flayers", "Business Cards"];

  const [selected, setSelected] = useState("All");

  const projects = selected === "All" ? allProjects : allProjects.filter(project => project.category === selected)

  return (
    <div className={style.portfolio}>
      <Toolbar
        filters={filters}
        selected={selected}
        onSelectFilter={setSelected}
      />
      <ProjectList projects={projects} />
    </div>
  )
}