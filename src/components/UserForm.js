import React, { useState } from 'react';

// import './userForm.css';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

const UserForm = ({ setFormData }) => {
  const [rules, setRules] = useState([
    {
      key: 'age',
      output: {
        value: 60,
        operator: '>=',
        score: 50,
      },
    },
  ]);
  const [combinator, setCombinator] = useState('and');

  const handleAddRule = () => {
    setRules([
      ...rules,
      { key: 'age', output: { value: 60, operator: '>=', score: 50 } },
    ]);
  };

  const handleDeleteRule = (index) => {
    const updatedRules = [...rules];
    updatedRules.splice(index, 1);
    // console.log('data', updatedRules);
    setRules(updatedRules);
  };

  const handleChange = (index, field, value) => {
    const updatedRules = [...rules];
    if (field === 'key') {
      updatedRules[index].key = value;
    }
    updatedRules[index].output[field] = value;
    setRules(updatedRules);
  };

  const handleCombinatorChange = (e) => {
    setCombinator(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle the submission logic here
    setFormData({ rules, combinator });
    console.log({ rules, combinator });
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>User Form</h1>
          <Form onSubmit={handleSubmit}>
            {rules.map((rule, index) => (
              <div key={index} className="mb-3">
                <Form.Group controlId={`rule-${index}`}>
                  <Form.Label>Rule Type</Form.Label>
                  <Form.Control
                    as="select"
                    value={rule.key}
                    onChange={(e) => handleChange(index, 'key', e.target.value)}
                  >
                    <option value="age">Age</option>
                    <option value="credit_score">Credit Score</option>
                    <option value="account_balance">Account Balance</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId={`operator-${index}`}>
                  <Form.Label>Operator</Form.Label>
                  <Form.Control
                    as="select"
                    value={rule.output.operator}
                    onChange={(e) =>
                      handleChange(index, 'operator', e.target.value)
                    }
                  >
                    <option value=">">{'>'}</option>
                    <option value="<">{'<'}</option>
                    <option value=">=">{'>='}</option>
                    <option value="<=">{'<='}</option>
                    <option value="=">{'='}</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId={`value-${index}`}>
                  <Form.Label>Value</Form.Label>
                  <Form.Control
                    type="number"
                    value={rule.output.value}
                    onChange={(e) =>
                      handleChange(index, 'value', e.target.value)
                    }
                  />
                </Form.Group>

                <Form.Group controlId={`score-${index}`}>
                  <Form.Label>Score</Form.Label>
                  <Form.Control
                    type="number"
                    value={rule.output.score}
                    onChange={(e) =>
                      handleChange(index, 'score', e.target.value)
                    }
                  />
                </Form.Group>

                <Button
                  variant="danger"
                  className="delete"
                  onClick={() => handleDeleteRule(index)}
                >
                  Delete
                </Button>
              </div>
            ))}

            <Form.Group controlId="combinator">
              <Form.Label>Combinator Type</Form.Label>
              <Form.Control
                as="select"
                value={combinator}
                onChange={handleCombinatorChange}
              >
                <option value="and">AND</option>
                <option value="or">OR</option>
              </Form.Control>
            </Form.Group>

            <Button className="add" variant="primary" onClick={handleAddRule}>
              Add Rule
            </Button>

            <Button variant="success" type="submit" className="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default UserForm;
