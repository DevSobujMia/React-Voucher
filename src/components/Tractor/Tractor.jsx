import { useEffect, useState } from "react";
import "./Tractor.css";

const numberToWords = (num) => {
  const ones = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"
  ];
  const teens = [
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", 
    "Seventeen", "Eighteen", "Nineteen"
  ];
  const tens = [
    "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", 
    "Seventy", "Eighty", "Ninety"
  ];

  const convertLessThanThousand = (num) => {
    let str = "";
    const hundreds = Math.floor(num / 100);
    const remainder = num % 100;
    const tensUnit = Math.floor(remainder / 10);
    const units = remainder % 10;

    if (hundreds) {
      str += ones[hundreds] + " Hundred ";
    }

    if (remainder > 10 && remainder < 20) {
      str += teens[remainder - 11];
    } else {
      if (tensUnit) {
        str += tens[tensUnit - 1] + " ";
      }
      if (units) {
        str += ones[units];
      }
    }

    return str.trim();
  };

  if (num === 0) return "Zero";

  let str = "";
  const thousands = Math.floor(num / 1000);
  const remainder = num % 1000;

  if (thousands) {
    str += convertLessThanThousand(thousands) + " Thousand ";
  }

  str += convertLessThanThousand(remainder);

  return str.trim();
};

const Tractor = () => {
  const [rows, setRows] = useState([{ description: "", amount: "" }]);
  const [totalAmount, setTotalAmount] = useState(0);

  const addRow = () => {
    setRows([...rows, { description: "", amount: "" }]);
  };

  const handleInputChange = (index, field, value) => {
    const updatedRows = rows.map((row, i) =>
      i === index ? { ...row, [field]: value } : row
    );
    setRows(updatedRows);
  };

  const removeRow = (index) => {
    const updatedRows = rows.filter((row, i) => i !== index);
    setRows(updatedRows);
  };

  useEffect(() => {
    const total = rows.reduce(
      (acc, row) => acc + (parseFloat(row.amount) || 0),
      0
    );
    setTotalAmount(total);
  }, [rows]);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div>
      <div className="body">
        <div className="header text-center mb-6">
          <h1 className="text-3xl font-bold">Krishok Bondhu Tractors</h1>
          <h3 className="text-xl font-semibold mt-1">
            Shankardia Goswami Durgapur
          </h3>
          <p className="text-lg mt-1">Kushtia Sadar, Kushtia</p>
          <span className="mt-1 bg-gray-200 px-2 py-1 rounded">
            Proprietor: Chan Mia, Biddut Mia & Konok Mia
          </span>
          <p className="text-lg mt-1">
            Mob: 01908958553, 01766836209, 01713223028
          </p>
          <h2 className="text-lg font-semibold bg-gray-200 inline px-2 py-1 rounded mt-2">
            INVOICE
          </h2>
          <hr className="my-4" />
        </div>
        <div className="flex justify-between mb-6">
          <div className="w-1/2 pr-4">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 items-center">
                <label className="w-1/4 font-semibold">Bill Name :</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
              <div className="flex space-x-4 items-center">
                <label className="w-1/4 font-semibold">Bill Details :</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 pl-4">
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4 items-center justify-end">
                <label className="w-1/4 font-semibold">Date :</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
              <div className="flex space-x-4 items-center justify-end">
                <label className="w-1/4 font-semibold">Bill No :</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded input-field"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="table-container mb-6 border border-gray-300 rounded-lg mx-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-100">
              <tr className="text-center">
                <th className="border border-gray-300 p-2 text-center">SL NO</th>
                <th className="border border-gray-300 p-2">Description</th>
                <th className="border border-gray-300 p-2">Amount</th>
                <th className="border border-gray-300 p-2 remove-col">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="bg-white">
                  <td className="border border-gray-300 p-2">{index + 1}</td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="text"
                      value={row.description}
                      onChange={(e) =>
                        handleInputChange(index, "description", e.target.value)
                      }
                      className="w-full p-2 border rounded input-field"
                    />
                  </td>
                  <td className="border border-gray-300 p-2">
                    <input
                      type="number"
                      value={row.amount}
                      onChange={(e) =>
                        handleInputChange(index, "amount", e.target.value)
                      }
                      className="w-full p-2 border rounded input-field"
                    />
                  </td>
                  <td className="border border-gray-300 p-2 text-center remove-col">
                    <button
                      onClick={() => removeRow(index)}
                      className="bg-red-500 text-white px-3 py-1 rounded remove-btn"
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button
            onClick={addRow}
            className="mt-4 bg-green-500 text-white px-4 py-2 rounded add-row-btn"
          >
            Add Row
          </button>
        </div>
        <div className="footer text-right mt-6">
          <div className="flex justify-start">
            <div className="mb-4 mr-[600px]">
              <label className="text-base font-bold bg-gray-200 p-1 rounded">
                Taka In Words :{" "}
              </label>
              {numberToWords(totalAmount)}
            </div>
            <div className="mb-4">
              <label className="text-lg font-bold">Total Amount : </label>
              {totalAmount.toFixed([null])} /-
            </div>
          </div>
          <div className="auth-sig mt-32">
            <span>___________________</span>
            <h4 className="font-semibold">Authorized Signature</h4>
          </div>
        </div>
      </div>
      <div className="flex justify-end mr-96 mb-16">
      <button
        onClick={handlePrint}
        className="print-button mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Print
      </button>
      </div>
    </div>
  );
};

export default Tractor;
