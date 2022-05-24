import logo from "./logo.svg";
import styles from "./app.module.css";
import { Button, Navbar, Container, Nav } from "react-bootstrap";
import bg from "./bg.png";

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div>
        <div
          className="main-bg"
          style={{ backgroundImage: "url(" + bg + ")" }}
        ></div>
      </div>
    </div>
  );
}

export default App;
