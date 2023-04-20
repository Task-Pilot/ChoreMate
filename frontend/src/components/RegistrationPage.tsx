import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function RegistrationPage(){
    
    // House Info
    const [houseName, setHouseName] = useState("");
    const [accountOwnerEmail, setAccountOwnerEmail] = useState("");
    const [garbageDate, setGarbageDate] = useState("");
    const [recycleDate, setRecycleDate] = useState("");
    const [numRoommates, setNumRoommates] = useState("");
    const [emails, setEmails] = useState<string[]>([]);

    // const handleNumRoommates = (e: React.BaseSyntheticEvent) => {
    //     setNumRoommates(e.target.value);
    // }
    
    const handleRoommateEmailChange = (e: React.BaseSyntheticEvent, index:number) => {
        const newEmails: string[] = [...emails];
        newEmails[index] = e.target.value;
        setEmails(newEmails);
    }

    const handleFormSubmit = (e: React.BaseSyntheticEvent) => {
        e.preventDefault();
        console.log('Form submitted!');
        console.log('House Name:', houseName);
        console.log('Account Owner Email:', accountOwnerEmail);
        console.log('Garbage Date:', garbageDate);
        console.log('Recycle Date:', recycleDate);
        console.log('Number of Roommates:', numRoommates);
        console.log('Emails:', emails);
    }
    
    return(
        <>
            Registration Page
            <br/><br/>
            <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="houseName" className="my-3">
                    <Form.Label>House Name</Form.Label>
                    <Form.Control type="string" required value={houseName} onChange={(e) => setHouseName(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="accountOwnerEmail" className="my-3">
                    <Form.Label>Primary Email</Form.Label>
                    <Form.Control placeholder="Account Holder Email" required type="email" value={accountOwnerEmail} onChange={(e) => setAccountOwnerEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="garbageDate" className="my-3">
                    <Form.Label>Upcoming Garbage Date</Form.Label>
                    <Form.Control type="date" required value={garbageDate} onChange={(e) => setGarbageDate(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="recycleDate" className="my-3">
                    <Form.Label>Upcoming Recycle Date</Form.Label>
                    <Form.Control type="date" required value={recycleDate} onChange={(e) => setRecycleDate(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="numRoommates" className="my-3">
                    <Form.Label>Number of Roommates excluding yourself</Form.Label>
                    <Form.Control type="number" min="0" inputMode="numeric" pattern="[0-9]*" required value={numRoommates} onChange={(e) => setNumRoommates(e.target.value)}/>
                    {(parseInt(numRoommates) > 5) &&  (
                        <Form.Text className="text-danger my-3">
                            Maximum number of roommates is 5. Sign up for premium to add more roommates!
                        </Form.Text>
                    )}
                </Form.Group>

                {((parseInt(numRoommates) <= 5) && (parseInt(numRoommates)) > 0) && (
                    <Form.Group controlId="emails" className="my-3">
                        <Form.Label>Roomate Email Addresses</Form.Label>
                        {Array.from({ length: parseInt(numRoommates) }).map((_, index) => (
                            <Form.Control key={index} type="email" placeholder={`Email Address of Roommate ${index + 1}`} required value={emails[index] || ""} onChange={(e) => handleRoommateEmailChange(e, index)} />
                        ))}
                    </Form.Group>
                )}

                <Button className="my-3" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        
        </>
    )
}

export default RegistrationPage;
