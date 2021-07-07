import React from "react";
import { Component } from "react";

class CheckOut extends Component {
  render() {
    return (
      <>
        <div className="vh-100 d-flex justify-content-center align-items-center">
          <div className="d-flex  rounded-circle bg-danger h-75 align-items-center">
            <h1 className="display-3 bg-light p-2">
              This is check out page!!!
            </h1>
          </div>
        </div>
      </>
    );
  }
}

export default CheckOut;