import React from "react";

class Edication extends React.Component {
  render () {
    return (
    <section>
      <h2>Edication</h2>
      <p>Facility name: {this.props.university}</p>
      <p>Graduation year: {this.props.graduationYear}</p>
    </section>
      )
  }
}

export default Edication;