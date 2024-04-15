import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Button, Col, Form, Row} from "react-bootstrap";
import Search from "./Search";
import { is_demo, base_url, api_key } from "../config";

function NavHeader() {
    return (
        <>
            <Navbar fixed="top" bg="dark" data-bs-theme="dark" className="py-4">
                <Container>
                    <Navbar.Brand href="#home" className="text-xl">Fake Stock Tracker</Navbar.Brand>
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
                        <Form inline="true">
                            <Row>
                                <Col xs="auto">
                                    <Search is_demo={is_demo} base_url={base_url} api_key={api_key} />
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