import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Col, Form, Row} from "react-bootstrap";

function NavHeader() {
    return (
        <>
            <Navbar fixed="top" bg="dark" data-bs-theme="dark">
                <Container>
                    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                    <Nav className="me-auto justify-content-between" style={{width: '100vw'}}>
                        <Row>
                            <Col>
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="#features">Features</Nav.Link>
                            </Col>
                            <Col>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Col>
                        </Row>
                        <Form inline>
                            <Row>
                                <Col xs="auto">
                                    <Form.Control
                                        type="text"
                                        placeholder="Search"
                                        className=" mr-sm-2"
                                    />
                                </Col>
                                <Col xs="auto">
                                    <Button type="submit">Submit</Button>
                                </Col>
                            </Row>
                        </Form>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default NavHeader;