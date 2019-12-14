import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

export default function CharacterCard({ name, species, status }) {
  return (
    <Card>
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardSubtitle>{status}</CardSubtitle>
        <CardSubtitle>Species: {species}</CardSubtitle>
        <Button>Button</Button>
      </CardBody>
    </Card>
  );
}
