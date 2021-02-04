import {
  Card,
  Button,
  CardImg,
  CardTitle,
  CardText,
  CardColumns,
  CardSubtitle,
  CardBody,
} from "reactstrap";

const Mywork = () => {
  return (
    <div className="condiv">
      <h1 className="subtopic">My Work</h1>
      <br></br>
      <CardColumns>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              technos
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </CardText>
            <Button>See</Button>
          </CardBody>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
        </Card>
        <Card>
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This card has supporting text below as a natural lead-in to
              additional content.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card
          body
          inverse
          style={{ backgroundColor: "#333", borderColor: "#333" }}
        >
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button>Button</Button>
        </Card>
        <Card>
          <CardImg
            top
            width="100%"
            src="/assets/256x186.svg"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle tag="h5">Card title</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Card subtitle
            </CardSubtitle>
            <CardText>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This card has even longer content
              than the first to show that equal height action.
            </CardText>
            <Button>Button</Button>
          </CardBody>
        </Card>
        <Card body inverse color="primary">
          <CardTitle tag="h5">Special Title Treatment</CardTitle>
          <CardText>
            With supporting text below as a natural lead-in to additional
            content.
          </CardText>
          <Button color="secondary">Button</Button>
        </Card>
      </CardColumns>
    </div>
  );
};

export default Mywork;
