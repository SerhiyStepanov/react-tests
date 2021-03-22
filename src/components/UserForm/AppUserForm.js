import React, { Component } from "react";
import UserForm from "./UserForm";
import price from "../../static-data-price.json";

// export default class AppUserForm extends Component {
//   handlerFormSubmit = (data) => {
//     console.log(data);
//   };
//   render() {
//     return (
//       <div>
//         <UserForm onFormSubmit={this.handlerFormSubmit} />
//       </div>
//     );
//   }
// }

export default function AppUserForm() {
  const handlerFormSubmit = (data) => {
    console.log(data);
  };

  return (
    <div>
      <UserForm onFormSubmit={handlerFormSubmit} />
    </div>
  );
}
