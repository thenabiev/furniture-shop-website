import { useState } from "react";
import { InputGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiOutlineSearch } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { search, setSearchTerm } from "../state/shopSlice";

function NavComponent() {
  const [isScroll, setIsScroll] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  });

  const navigate = useNavigate();

  const [term, setTerm] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(term));
    setTerm("");
    navigate("/shop");
  };
  const main = () => {
    dispatch(setSearchTerm(""));
    navigate("/");
  };

  const dispatch = useDispatch();
  return (
    <>
      {["md"].map((expand) => (
        <Navbar
          key={expand}
          bg="white"
          fixed="top"
          expand={expand}
          className={`${isScroll ? "mb-3 shadow-sm" : "mb-3"} `}
          collapseOnSelect
        >
          <Container>
            <Navbar.Brand onClick={main} href="#" className="me-5">
              <h2
                className="logo"
                style={isScroll ? { fontSize: "24px" } : { fontSize: "32px" }}
              >
                Sakura<span className="text-warning">Home</span>
              </h2>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <h2 className="logo" style={{ fontSize: "24px" }}>
                    Sakura<span className="text-warning">Home</span>
                  </h2>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Form
                  onSubmit={handleSearch}
                  className="d-flex justify-content-end flex-grow-1 searchForm"
                >
                  <InputGroup>
                    <Form.Control
                      onChange={(e) => setTerm(e.target.value)}
                      value={term}
                      type="search"
                      placeholder="Search"
                      className=""
                      aria-label="Search"
                    />
                    <Button
                      type="submit"
                      variant="outline-dark"
                      className="px-4"
                    >
                      <HiOutlineSearch size={"1.2em"} />
                    </Button>
                  </InputGroup>
                </Form>
                <Nav className="justify-content-end   ps-3">
                  <Nav.Link as={Link} to="/" href="/">
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/shop" href="/shop">
                    Shop
                  </Nav.Link>
                  <Nav.Link as={Link} to="/cart" href="/cart">
                    Cart
                  </Nav.Link>
                  <Nav.Link as={Link} to="/about" href="/about">
                    About
                  </Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavComponent;
