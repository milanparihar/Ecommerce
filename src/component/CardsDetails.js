import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { DLT,ADD,REMOVE } from "../redux/actions/action";

const CardsDetails = () => {
  const [data, setData] = useState([]);

  const { id } = useParams();

  const getdata = useSelector((state) => state.cartreducer.carts);

  const compare = () => {
    let comparedata = getdata.filter((e) => {
      return e.id == id;
    });
    setData(comparedata);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dispatch = useDispatch();
  const back = useNavigate();


  const send = (e)=>{
    dispatch(ADD(e));
  }
  const dlt = (id) => {
    dispatch(DLT(id));
    back("/");
  };

  // remove one
const remove = (item)=>{
  dispatch(REMOVE(item))
}

  return (
    <>
      <div className="container mt-3">
        <h2 className="text-center " style={{ paddingTop: "10px" }}>
          Product Preview
        </h2>

        <section className="container mt-3">
          <div className="itemsdetails d-flex mx-5">
            {data.map((ele) => {
              return (
                <>
                  <div className="items_img">
                    <img src={ele.image} style={{ width: "15rem" }} />
                  </div>

                  <div className="details my-5 mx-5">
                    <table>
                      <tr>
                        <td>
                          <p>
                            <strong>Product</strong> :{ele.title}
                          </p>
                          <p>
                            <strong>Price</strong> : ${ele.price}
                          </p>
                          <p>
                            <strong> Quantity</strong>: {ele.quantity}
                          </p>
                          <p>
                            <strong>Total</strong> :$ {ele.price*ele.quantity}
                          </p>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          >
                            <span
                              style={{ fontSize: 24 }}
                              onClick={
                                ele.quantity <= 1
                                  ? () => dlt(ele.id)
                                  : () => remove(ele)
                              }
                            >
                              -
                            </span>
                            <span style={{ fontSize: 22 }}>{ele.quantity}</span>
                            <span
                              style={{ fontSize: 24 }}
                              onClick={() => send(ele)}
                            >
                              +
                            </span>
                          </div>
                          <div
                            className="mt-5 d-flex justify-content-between align-items-center"
                            style={{
                              width: 100,
                              cursor: "pointer",
                              background: "#ddd",
                              color: "#111",
                            }}
                          ></div>
                        </td>
                        <td>
                          <p>
                            <strong>Order Review :</strong>{" "}
                            <span>{ele.rating.rate}</span>
                          </p>
                          <p>
                            <strong>Remove :</strong>{" "}
                            <span>
                              <p
                                className="btn btn-danger"
                                style={{ fontSize: 20, cursor: "pointer" }}
                                onClick={() => dlt(ele.id)}
                              >
                                Discard
                              </p>
                            </span>
                          </p>
                        </td>
                      </tr>
                    </table>
                  </div>
                </>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
};

export default CardsDetails;
