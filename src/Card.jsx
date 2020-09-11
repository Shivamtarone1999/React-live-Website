import React from "react";
import { NavLink } from "react-router-dom";
import Sdata from './Sdata';
const Card = (props) => {
  return (
    <>
                <div className="col-md-4 col-sm-12">
                    <div className="card  mb-3">
                      <img src={props.imgSrc} className="card-img-top" style={{height:'16rem'}} alt={props.imgSrc} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold mt-3">{props.title}</h5>
                            
                            <NavLink to="#" className="btn btn-primary ser_btn">
                            Take a view
                            </NavLink>
                        </div>
                    </div>
                </div>

    </>
  );
};

export default Card;
