import React from "react";
import "./IngredModal.css"

export const IngredModal = props => {
    return (
        <div>
            <div className={props.modalIsOpen ? "modal fade show" : "modal fade"} style={props.modalIsOpen ? { display: "block" } : { display: "none" }} id="myModal">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="modal-header">
                            <h4 className="modal-title">Add Your {props.type}</h4>
                            <button type="button" className="close" data-dismiss="modal" onClick={props.closeModal}>&times;</button>
                        </div>
                        <div className="modal-body">
                            <div className="card-columns">
                                {props.children}
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary close-modalbtn" data-dismiss="modal" onClick={props.closeModal}>Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={props.modalIsOpen ? "modal-backdrop fade show" : ""}></div>
        </div>
    )
}

