import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import { Button, Col, Form, } from "react-bootstrap";

const StyledForm = styled(Form)`
  * {font-size: 14px;}
`;

const CategoryForm = ({ initialContent: { catid, catgroup, catname, catdesc }, knownGroups, submit, cancel }) => {
  const [group, setGroup] = useState('');
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  useEffect(() => {
    if(catgroup) setGroup(catgroup);
    if(catname) setName(catname);
    if(catdesc) setDesc(catdesc);
  }, [catdesc, catgroup, catname]);
  function cancelCategory(e) {
    e.preventDefault();
    setGroup('');
    setName('');
    setDesc('');
    cancel();
  }
  return (
    <StyledForm onSubmit={(event) => {
      event.preventDefault();
      submit({ catid, catgroup: group, catname: name, catdesc: desc });
    }}>
      {!catid && (<p>You can edit an existing category by selecting it in the category list</p>)}
      <Form.Row>
        <Form.Group as={Col} controlId="group">
          <Form.Label>Group</Form.Label>
          <Form.Control
            list="knownGroups"
            value={group}
            onChange={({ target: { value } }) => setGroup(value)}
            placeholder="Category group name"
            data-testid="category-group"
          />
          <datalist id="knownGroups">
            {knownGroups.map(knownGroup => (
              <option key={knownGroup} value={knownGroup} />
            ))}
          </datalist>
        </Form.Group>
        <Form.Group as={Col} controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={({ target: { value } })=>setName(value)}
            placeholder="Category name"
            data-testid="category-name"
          />
        </Form.Group>
        <Form.Group as={Col} controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            cols={80}
            value={desc}
            onChange={({ target: { value } })=>setDesc(value)}
            placeholder="Category description"
            data-testid="category-desc"
          />
        </Form.Group>
      </Form.Row>
      <Button variant="primary" type="submit" data-testid="submit-category-button">
        Submit
      </Button>
      {' '}
      <Button variant="secondary" type="button" data-testid="cancel-category-button" onClick={cancelCategory}>
        Cancel
      </Button>
    </StyledForm>
  );
};
export default CategoryForm;
