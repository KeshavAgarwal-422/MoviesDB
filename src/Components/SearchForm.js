import React from "react";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import { useGlobalContext } from "../Context";
import "bootstrap/dist/css/bootstrap.min.css";

const SearchForm = () => {
  const { setSearch, error } = useGlobalContext();

  const selectValue = useRef("");

  React.useEffect(() => {
    selectValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const searchValue = () => {
    setSearch(selectValue.current.value);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Search Movies</Form.Label>
          <Form.Control
            type="text"
            placeholder=""
            ref={selectValue}
            onChange={searchValue}
          />
          <Form.Text className="text-muted">{error}</Form.Text>
        </Form.Group>
      </Form>
    </>
  );
};

export default SearchForm;
