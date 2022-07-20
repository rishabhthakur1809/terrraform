import React from "react";




function CardLeaveBalance(props) {
    return (
        <>
            <div className="card " >
                <div className="card-body">
                    <div className="title">
                        <div className="row">
                            <div className="col-7 "> <p>{props.cardTitle}</p>  </div>
                            <div className="col-5 grantTitle"> <p>{props.grantTitle}</p>   </div>
                        </div>
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="balance_card_box">
                                    <h3 className="days_left">{props.daysleft}</h3>
                                    <span>Balance</span>
                                    <a href={props.c_link} >View Detail</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );



}
export default CardLeaveBalance;
