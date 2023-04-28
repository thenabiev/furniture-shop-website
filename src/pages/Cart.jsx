import React, { useEffect, useState } from "react";
import { Card, Col, Container, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  HiOutlinePlus,
  HiOutlineMinus,
  HiOutlineTrash,
  HiChevronDoubleRight,
} from "react-icons/hi";
import {
  removeFromCart,
  increase,
  decrease,
  clearCart,
} from "../state/shopSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.shop.cartItems);

  // Checkout form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [bank, setBank] = useState("");
  const [exp, setExp] = useState("");
  const [cvv, setCvv] = useState("");

  const [confirm, setConfirm] = useState(false);

  const handlePay = (e) => {
    e.preventDefault();
    if (parseInt(bank) > 0 && bank.length == 16) {
      setConfirm(true);
    } else {
      alert("Invalid Bank Card Number");
    }
    if (confirm) {
      dispatch(clearCart());
      setShow(false);
      setAdress("");
      setName("");
      setBank(null);
      setCvv("");
      setEmail("");
      setExp("");
      alert(`
                Payment is successful !
                ${name}, your kargo will arrive ${adress} location about few days.
                Check ${email} adress for more details
             `);
    }
  };

  // ###############################################################
  // ###############################################################
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dispatch = useDispatch();

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.amount, 0);
  const itemsInCart = useSelector((state) => state.shop.itemsInCart);

  return (
    <Container>
      {cartItems.length > 0 ? (
        <Row xs={2}>
          <Col>
            <p>
              Items In Your Cart : <b>{itemsInCart}</b>
            </p>
            <p>
              Total Cost : <b>{itemsPrice.toFixed(2)}</b>
            </p>
          </Col>
          <Col className="text-end">
            <div onClick={() => setShow(true)} className="btn btn-dark me-2">
              Checkout
            </div>
            <div
              onClick={() => dispatch(clearCart())}
              className="btn btn-outline-dark "
            >
              Clear Cart
            </div>
          </Col>
        </Row>
      ) : (
        <h3>Your Cart Looks Empty</h3>
      )}
      {cartItems.length == 0 ? (
        <div className="my-5 py-5">
          <h4>
            <Link to="/shop" className="routerLink">
              Continue Shopping <HiChevronDoubleRight />
            </Link>
          </h4>
        </div>
      ) : (
        <Row xs={1} lg={2} className="g-2">
          {cartItems.map((item) => (
            <Col key={item.id}>
              <Card className="p-3 shadow ">
                <div className="row ">
                  <div className="col-3">
                    <div className="cartImg mb-2">
                      <img src={item.image} alt={item.title} />
                    </div>
                    <div className="d-flex align-items-center">
                      <div
                        onClick={() => dispatch(decrease(item))}
                        className="btn btn-outline-dark px-1 py-0"
                      >
                        <HiOutlineMinus size=".6rem" />
                      </div>
                      <div className="mx-2">{item.amount}</div>
                      <div
                        onClick={() => dispatch(increase(item.id))}
                        className="btn btn-outline-dark px-1 py-0"
                      >
                        <HiOutlinePlus size=".6rem" />
                      </div>
                    </div>
                  </div>
                  <div className="col-9 row">
                    <div className="col-9">
                      <h5>{item.title}</h5>
                      <p>Price: {item.price.toFixed(2)} AZN</p>
                      <p>Total: {(item.price * item.amount).toFixed(2)} AZN</p>
                    </div>
                    <div className="col-3 ">
                      <div
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="btn btn-secondary rounded-pill px-4 float-end"
                      >
                        <HiOutlineTrash size="1.3rem" />
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      )}

      <Modal
        onHide={() => setShow(false)}
        className="modal-lg"
        show={show}
        style={{ display: "block", position: "fixed" }}
      >
        <Modal.Header closeButton>
          <h5>Checkout</h5>
        </Modal.Header>
        <Modal.Body className="">
          <p>
            Total items in cart : <b>{itemsInCart}</b>
          </p>
          <p>
            Total Cost : <b>{itemsPrice.toFixed(2)}</b> AZN
          </p>
          <Form onSubmit={handlePay}>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="text"
              placeholder="Name..."
              className="form-control mb-2"
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="E-mail..."
              className="form-control mb-2"
            />
            <input
              onChange={(e) => setAdress(e.target.value)}
              value={adress}
              required
              placeholder="Adress..."
              className="form-control mb-2"
            />
            <input
              value={bank}
              onChange={(e) => setBank(e.target.value)}
              required
              type="number"
              placeholder="Bank card..."
              className="form-control mb-2"
            />
            <Row xs={1} md={2} className="g-1">
              <Col>
                <input
                  value={exp}
                  onChange={(e) => setExp(e.target.value)}
                  required
                  type="number"
                  placeholder="EXP"
                  className="form-control mb-2"
                />
              </Col>
              <Col>
                <input
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                  required
                  type="number"
                  placeholder="CVV"
                  className="form-control mb-2"
                />
              </Col>
            </Row>
            <button className="btn btn-dark float-end px-5" type="submit">
              Pay
            </button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default Cart;
