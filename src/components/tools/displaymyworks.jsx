import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardSubtitle,
  CardBody,
} from "reactstrap";

import "./../../App.css";

const Displaymyworks = ({
  title,
  year_project,
  description_project,
  project_url,
}) => {
  return (
    <Card>
      <CardImg
        top
        width="100%"
        src="https://zupimages.net/up/21/05/dn0n.jpg"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {year_project}
        </CardSubtitle>
        <CardText>{description_project}</CardText>
        <Button href={project_url} target="_blank">
          {" "}
          See project
        </Button>
      </CardBody>
    </Card>
  );
};

export default Displaymyworks;
