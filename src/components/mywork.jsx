import axios from "axios";
import { useEffect, useState } from "react";
import Displaymyworks from "./tools/displaymyworks";

import { Row, CardColumns } from "reactstrap";

const Mywork = () => {
  // eslint-disable-next-line no-unused-vars
  const [projectsList, setProjectsList] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("http://localhost:4000/projects");
        console.log(result);
        setProjectsList(result.data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="condiv">
      <h1 className="subtopic">My Work</h1>
      <br></br>

      <Row className="d-flex justify-content-center">
        <CardColumns className="cardscolumslayout px-3">
          {projectsList &&
            projectsList.map((project) => (
              <Displaymyworks
                key={project.id}
                title={project.title}
                year_project={project.year_project}
                description_project={project.description_project}
                project_url={project.project_url}
                id_techno={project.id_techno}
              />
            ))}
        </CardColumns>
      </Row>
    </div>
  );
};

export default Mywork;
