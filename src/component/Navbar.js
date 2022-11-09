import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
// import handleClose from '@mui/material'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT } from "../redux/actions/action";

function Navbar() {
  const getdata = useSelector((state) => state.cartreducer.carts);

  const [price, setPrice] = useState(0);
  console.log(price);

  const dispatch = useDispatch();

  const dlt = (id) => {
    dispatch(DLT(id));
  };

  const total = () => {
    let price = 0;
    getdata.map((ele, k) => {
      price = ele.price + price;
    });
    setPrice(price);
  };
  useEffect(() => {
    total();
  }, [total]);

  return (
    <>
      <nav className="navbar  navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <strong>TAIGA</strong>
          </Link>
          <img src={logo} alt="logo" />

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Link
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Product`s
                </Link>
              </li>
            </ul>

            <div className="buttons mx-auto">
              <div className="dropdown">
                <a
                  className="btn btn-outline-dark dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Cart
                </a>

                <ul className="dropdown-menu">
                  {getdata.length ? (
                    <div
                      className="card_details"
                      style={{ width: "350px", height: "100%", padding: 10 }}
                    >
                      <table>
                        <thead>
                          <tr>
                            <th>Product`s</th>
                            
                          </tr>
                        </thead>
                        <tbody>
                          {getdata.map((e) => {
                            return (
                              <>
                                <tr>
                                  <td>
                                    <Link to={`/cart/${e.id}`}>
                                      <img
                                        src={e.image}
                                        alt=""
                                        style={{ height: "100px" }}
                                      />
                                    </Link>
                                  </td>
                                  <td></td>
                                  <p>Rating: {e.rating.rate}</p>
                                  <p>Price: $ {e.price}</p>
                                  <p> Quantity: {e.quantity}</p>
                                  <p
                                    className="btn btn-danger"
                                    style={{ fontSize: 20, cursor: "pointer" }}
                                    onClick={() => dlt(e.id)}
                                  >
                                    Discard
                                  </p>
                                </tr>

                                {/* <hr  style={{border: "solid black 2px", width:"100%"}}/> */}
                                <p className="my-1 ps-4">Total: $  {e.price*e.quantity}</p>
                              </>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <li>
                      <h6 className="dropdown-item card_details">
                        your card is empty
                      </h6>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
