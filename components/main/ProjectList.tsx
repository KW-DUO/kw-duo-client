import ProjectCard from "./ProjectCard";

const projects = [
  {
    id: 1,
    type: "🏫 수업 프로젝트",
    date: "2024.01.01",
    title: "[딥러닝 실습 팀원 구합니다!]",
    department: "소프트웨어학부",
    course: "딥러닝 실습",
    position: ["상관 없음"],
    techStack: ["spring"],
    nickname: "닉네임",
  },
];

const ProjectList = () => {
  const test = Array.from({ length: 20 }, (_, index) =>
    projects.map((project) => ({
      ...project,
      id: project.id + index * projects.length,
    }))
  ).flat();
  return (
    <ul className="max-w-maxWidth grid grid-cols-4 gap-7">
      {/* {projects.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))} */}
      {test.map((project) => (
        <ProjectCard key={project.id} {...project} />
      ))}
    </ul>
  );
};

export default ProjectList;
