import React, { useState } from "react";
import { useDispatch } from "react-redux";
import cardsdata from './CardsData';
import {ADD} from "../redux/actions/action"

const Cards = () => {
    const [data, setData] = useState(cardsdata);


    const dispatch = useDispatch();

    const send = (e) => {
      dispatch(ADD(e));
    }
    return (
    <>
      <div className="container mt-3">
        <h4>
          <center>50% OFF</center>
        </h4>

        <div className="row  " style={{paddingLeft:"115px"}}>
        {
        data.map((element, id) => {
          return (
            <>
              <div className="card mx-1" style={{width: "18rem"}}>
                <img src={element.image}  style={{height:"300px"}} className="card-img-top" />
                <div className="card-body">
                  <h5 className="card-title">{element.title}</h5>
                  <p className="card-text" >Rating : {" "}
                   {element.rating.rate}
                  </p>
                  <h5 className="card-text">Price : ${element.price}</h5>
                  <a  className="btn btn-primary col-lg-12"
                    onClick={()=> send(element)}

                    >Add to Cart
                   
                  </a>
                </div>
              </div>
            </>
          );
        })
        }
        </div>
      </div>
    </>
  );
};

export default Cards;
