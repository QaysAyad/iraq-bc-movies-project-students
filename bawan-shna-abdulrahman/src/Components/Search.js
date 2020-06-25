import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import Spinners from "./Spinner";

export default function Search(props) {
  return (
    <Form inline onSubmit={props.onSubmit}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mr-sm-2"
        onChange={props.onChange}
      />
      <Button variant="outline-light" type="submit">
        Search
        <Spinners isSpinnerHidden={props.isSpinnerHidden} />
      </Button>
    </Form>
  );
}
