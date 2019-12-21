import React, { useState } from "react";

// Styles
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default function SearchForm({searchCharacter, searchEpisode, searchLocation}) {

  // UseState to pass into search function
  const [name, setName] = useState({
    name: ''
  })
  
  // Function to invoke correct search function
  const submit = event => {
    event.preventDefault();

    return searchEpisode ? searchEpisode(name.name) 
    : searchCharacter ? searchCharacter(name.name)
    : searchLocation ? searchLocation(name.name)
    : null;
  }

  // Function to set state
  const handleChange = event => {
    setName({[event.target.name]: event.target.value})
  }
  
  return (
    <section className="search-form">
      <Form inline onSubmit={submit}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2">Search</Label>
          <Input type="text" name="name" onChange={handleChange}/>
        </FormGroup>
        <Button color="primary" type="submit">Go!</Button>
      </Form>
    </section>
  );
}
