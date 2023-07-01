import Topbox from '../../components/Navbar/Topbox';
import Frame from '../../components/Frame/Frame';
import "./Report.css"
import { utils, writeFile } from "xlsx"
import Button from 'react-bootstrap/Button';

function Report() {

  const jsonData = [
    {
      "Product_Name": "Note book",
      "Product_id": 10012,
      "Quantity": 2,
      "sales": 10,
      "Re": 5
    },
    {
      "Product_Name": "Pen",
      "Product_id": 14105,
      "Quantity": 1,
      "sales": 8,
      "Re": 3
    },
    {
      "Product_Name": "Water Colour",
      "Product_id": 12345,
      "Quantity": 0,
      "sales": 5,
      "Re": 2
    },
    {
      "Product_Name": "Oppo Mobiles",
      "Product_id": 98701,
      "Quantity": 5,
      "sales": 15,
      "Re": 10
    },
    {
      "Product_Name": "Bookshelf",
      "Product_id": 10234,
      "Quantity": 3,
      "sales": 12,
      "Re": 7
    },
    {
      "Product_Name": "Pencil",
      "Product_id": 15678,
      "Quantity": 4,
      "sales": 6,
      "Re": 2
    },
    {
      "Product_Name": "Paint Brush",
      "Product_id": 10987,
      "Quantity": 2,
      "sales": 9,
      "Re": 4
    },
    {
      "Product_Name": "Laptop",
      "Product_id": 23098,
      "Quantity": 7,
      "sales": 20,
      "Re": 15
    },
    {
      "Product_Name": "Headphones",
      "Product_id": 17890,
      "Quantity": 2,
      "sales": 8,
      "Re": 4
    },
    {
      "Product_Name": "Mouse",
      "Product_id": 14567,
      "Quantity": 6,
      "sales": 10,
      "Re": 6
    }
  ];

  const convertTableToXLSX = () => {

    const workbook = utils.book_new();
    const worksheet = utils.table_to_sheet(document.querySelector('.table'));
    utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    writeFile(workbook, `Report_Data (${new Date().toLocaleDateString()}).xlsx`);
  };

  return (
    <div>
      <Frame />
      <Topbox />
      <div className='pt-5 d-flex justify-content-end pe-5'><Button className='' onClick={convertTableToXLSX}>Download Statement</Button></div>
      <div className='pt-5'>
        <table className="table" class="table table-striped w-75">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Product_Name</th>
              <th scope="col">Product_id</th>
              <th scope="col">Quantity</th>
              <th scope="col">sales</th>
              <th scope="col">Balance</th>
            </tr>
          </thead>
          <tbody>
            {jsonData.map((item, index) => (
              <tr key={index}>
                <th scope="row">{index + 1}</th>
                <td>{item['Product_Name']}</td>
                <td>{item['Product_id']}</td>
                <td>{item['Quantity']}</td>
                <td>{item['sales']}</td>
                <td>{item['Re']}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Report;