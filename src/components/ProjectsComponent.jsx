import Project from "./Project.jsx";
const ProjectsComponent = (props) => {
  const data = props && props.data;

  return (
    <div className="home-project grid-3">
      {data &&
        data.map((e, i) => {
          return (
            <>
              <Project key={e._id} e={e} />
            </>
          );
        })}
    </div>
  );
};

export default ProjectsComponent;
