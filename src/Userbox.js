import React from "react"

// class-based 
class Userbox extends React.Component {

  render() {

    let user = {
      username: 'peterpan',
      email: "peter@pan.de"
    }

    return (
      <div>
        <p> Username: {user.username}</p>
        <p> E-Mail: {user.email}</p>
      </div>
    )
  }

}

export default Userbox;