import React, { Component } from "react";
import "./Profile.css";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url:
        "https://i.pinimg.com/736x/b4/48/d3/b448d32068206ee585a2bce01298a5bf.jpg",
      customer: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("/api/data")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          customer: json
        });
      });
  }
  render() {
    let { isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div className="Profile">
          <img src={this.state.url} className="rounded-circle" alt="" />
          <br />
          <br />
          <p>Name: {this.state.customer.user["name"]}</p>
          <p>Id: {this.state.customer.user["id"]}</p>
          <p>Address: {this.state.customer.user["address"]}</p>
          <p>Phone: {this.state.customer.user["phone"]}</p>
          <p>About: {this.state.customer.user["about"]}</p>
          <p>Likes: {this.state.customer.user["likes"]}</p>
          <p>Dislikes: {this.state.customer.user["dislikes"]}</p>
        </div>
      );
    }
  }
}

export default Profile;
