import React from "react";

const Users = () => {
  return (
    <>
      <div className="mt-5 justify-center">
        
        <table class="table table-hover ">
          <thead>
            <tr>
              <th scope="col">users</th>
              <th scope="col">id</th>
              <th scope="col">email</th>
              <th scope="col">password</th>
              <th scope="col">phone Number</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>John Doe</td>
              <td>1</td>
              <td>john@gmail.com</td>
              <td>redsjd2233</td>
              <td>08108398148</td>
            </tr>
            <tr>
              <td>Jack frittleman</td>
              <td>2</td>
              <td>jack@gmail.com</td>
              <td>09dsfv</td>
              <td>09023859303</td>
            </tr>
            <tr>
              <td>Abdulrahim fauziyat</td>
              <td>2</td>
              <td>faz@gmail.com</td>
              <td>3334ed</td>
              <td>08142943334</td>
             
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Users;
