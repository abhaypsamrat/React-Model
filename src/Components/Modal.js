import React from "react";
import "./Modal.css";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>
        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Screen/Services</th>
                <th>Name of the Screen/Services</th>
                <th>User</th>
                <th>Created Time</th>
                <th>Created By</th>
                <th>Email</th>
                <th>Data</th>
                <th>Operation</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.age}</td>
                </tr>
              ))} */}
              <tr >
                <td>Service</td>
                <td>RG97-RG97-W000001</td>
                <td>prashantp</td>
                <td>20 July 2023</td>
                <td>prashantp</td>
                <td>prashantp@gmail.com</td>
                <td>xyz</td>
                <td>Nothing</td>
              </tr>
              <tr >
                <td>More</td>
                <td>RG97-RG97-W000001</td>
                <td>helloxyz</td>
                <td>20 July 2023</td>
                <td>prashantp</td>
                <td>hello@gmail.com</td>
                <td>xyz</td>
                <td>Nothing</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="footer">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
