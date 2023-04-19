import { Form, Button } from 'react-bootstrap';

function RegistrationPage(){
    return(
        <>
            Registration Page
            <Form >
      <Form.Group controlId="garbageDate">
        <Form.Label>Garbage Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group controlId="recycleDate">
        <Form.Label>Recycle Date</Form.Label>
        <Form.Control type="date" />
      </Form.Group>

      <Form.Group controlId="numRoommates">
        <Form.Label>Number of Roommates</Form.Label>
        <Form.Control type="number" />
      </Form.Group>

      <Form.Group controlId="emails">
        <Form.Label>Email Addresses of Each Roommate</Form.Label>
        {Array.from({ length: 5 }).map((_, index) => (
          <Form.Control key={index} type="email" placeholder={`Roommate ${index + 1}`} />
        ))}
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
        </>
    )
}

export default RegistrationPage;
