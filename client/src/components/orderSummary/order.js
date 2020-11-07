import React, { Component } from "react";
import "./order.css";
import "bootstrap/dist/css/bootstrap.css";
import { throws } from "assert";
class OrderSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orderSummary: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("/api/data")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          orderSummary: json
        });
      });
  }

  render() {
    let { isLoaded, orderSummary } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="heading">
          <div className="row">
            <div className="col-md-5">
              <div className="res_cust">
                <p className="id">
                  Order Id: {this.state.orderSummary.order_id}
                </p>
                <h4>Restaurant Details:</h4>
                <p>Name: {this.state.orderSummary.restaurant["name"]}</p>
                <p>
                  Address: {this.state.orderSummary.restaurant["street"]},{" "}
                  {this.state.orderSummary.restaurant["city"]},{" "}
                  {this.state.orderSummary.restaurant["state"]},{" "}
                  {this.state.orderSummary.restaurant["zipcode"]}.
                </p>
                <h4>Customer Details:</h4>
                <p>Name: {this.state.orderSummary.user["name"]}</p>
                <p>Id: {this.state.orderSummary.user["id"]}</p>
                <p>Address: {this.state.orderSummary.user["address"]}</p>
                <p>Phone: {this.state.orderSummary.user["phone"]}</p>
                <p>About: {this.state.orderSummary.user["about"]}</p>
                <p>Likes: {this.state.orderSummary.user["likes"]}</p>
                <p>Dislikes: {this.state.orderSummary.user["dislikes"]}</p>
              </div>
            </div>
            <div className="col-md-3 orders">
              <h4>Order Details:</h4>
              <span>
                {orderSummary.items.map((item, index) => (
                  <div>
                    <h5>
                      {index + 1}. {item.name}
                    </h5>
                    <p>
                      {" "}
                      Category: {item.category} <br></br>Price: {item.price}
                      {item.currency} <br></br> Tax: {item.tax_pct} <br></br>{" "}
                      Quantity:
                      {item.quantity}
                    </p>
                  </div>
                ))}
              </span>
            </div>
            <div className="col-md-4 bill">
              <h4>Total Items and Bill</h4>

              {this.state.orderSummary.items.map(item => (
                <p>
                  {" "}
                  {item.name}: {item.price} x {item.quantity} -{" "}
                  {item.price * item.quantity}{" "}
                </p>
              ))}
              <p>Total Tax - 34.25</p>
              <hr />
              <h3>Total Bill - {1270 + 34.25} INR </h3>
              <hr />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default OrderSummary;
