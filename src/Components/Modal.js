import React from "react";
import "./Modal.css";
// import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
// import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

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
        {/* <div className="body">
          <Table>
            <Thead>
              <Tr>
                <Th>Screen/Service</Th>
                <Th>Name of The Screen/Service</Th>
                <Th>User</Th>
                <Th>Created Time</Th>
                <Th>created By</Th>
                <Th>Age</Th>
                <Th>Mobile</Th>
                <Th>Email</Th>
                <Th>Data</Th>
                <Th>Operation</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Service</Td>
                <Td>RG97-RG97-W00001</Td>
                <Td>prashantp</Td>
                <Td>18 July 2023</Td>
                <Td>prashantp</Td>
                <Td>21</Td>
                <Td>0000000000</Td>
                <Td>prashantp@gmail.com</Td>
                <Td>0001234</Td>
                <Td>xyzzz</Td>
              </Tr>
            </Tbody>
          </Table>
        </div> */}


        <div className="table-container">
          <table>
            <thead>
              <tr>
                <th>Screen/Services</th>
                <th>NAme of the creen/Services</th>
                <th>User</th>
                <th>Created Time</th>
                <th>created By</th>
                <th>Age</th>
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
                <td>9009090900</td>
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
                <td>9009090900</td>
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
