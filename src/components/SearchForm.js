import React, { useState } from "react";

export default function SearchForm({searchCharacter}) {
  const [name, setName] = useState({
    name: ''
  })

  const submit = event => {
    event.preventDefault();
    searchCharacter(name.name)
  }
  const handleChange = event => {
    setName({[event.target.name]: event.target.value})
  }
  console.log(name)
  return (
    <section className="search-form">
      <form onSubmit={submit}>
        <label>Search</label>
        <input type="text" name="name" onChange={handleChange}/>
        <button tyupe="submit">Search</button>
      </form>
    </section>
  );
}
