import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterCard(props) {
  return (
    <>
      <Card>
        <CardImg top width="100%" src={props.image} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.name}</CardTitle>
          <CardSubtitle>{props.status}</CardSubtitle>
          <CardSubtitle>Species: {props.species}</CardSubtitle>
          <CardSubtitle>Origin: {props.origin}</CardSubtitle>
          <Button>Button</Button>
        </CardBody>
      </Card>
    </>
  );
}
