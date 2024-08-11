import DataTable from "react-data-table-component";
import { users } from "../utils/Data";
import { columns } from "../utils/Columns";
import { useState } from "react";
import Age from "./Age";

const DashboardTable = () => {
  const [records, setRecords] = useState(users);

  // Name filter logic
  const handleNameChange = (e) => {
    const newData = users.filter((item) => {
      return item.name.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(newData);
  };

  // City filter logic
  const handleCityChange = (e) => {
    const findNewData = users.filter((item) => {
      return item.city.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setRecords(findNewData);
  };

  // Age filter logic
  const handleAgeChange = (e) => {
    const ageRange = e.target.value;
    let minAge, maxAge;

    switch (ageRange) {
      case "18-25":
        minAge = 18;
        maxAge = 25;
        break;

      case "26-30":
        minAge = 26;
        maxAge = 30;
        break;

      case "31-35":
        minAge = 31;
        maxAge = 35;
        break;

      case "36-40":
        minAge = 36;
        maxAge = 40;
        break;

      case "41-45":
        minAge = 41;
        maxAge = 45;
        break;

      case "46+":
        minAge = 46;
        maxAge = Infinity;
        break;

      default:
        minAge = 0;
        maxAge = 100;
        break;
    }

    const newData = users.filter((item) => {
      const age = parseInt(item.age);
      return age >= minAge && age <= maxAge;
    });

    setRecords(newData);
  };

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "rgb(238, 238, 53)",
        color: "black",
        fontSize: "18px",
        fontWeight: "bold",
      },
    },
    rows: {
      style: {
        backgroundColor: "rgb(236, 236, 183)",
        "&:hover": {
          backgroundColor: "rgb(152, 152, 127)",
        },
      },
    },
    cells: {
      style: {
        padding: "10px",
        fontSize: "16px",
      },
    },
  };

  return (
    <div className="main-container">
      <div className="filters">
        <div className="nameSearch">
          <input
            className="inputName"
            type="text"
            placeholder="Name Search"
            onChange={handleNameChange}
          />
        </div>

        <div className="ageFilter">
          <Age handleAgeChange={handleAgeChange} />
        </div>

        <div className="citySearch">
          <input
            className="inputCity"
            type="text"
            placeholder="City Search"
            onChange={handleCityChange}
          />
        </div>
      </div>

      <DataTable
        columns={columns}
        data={records}
        pagination
        fixedHeader
        customStyles={customStyles}
        // selectableRows
      ></DataTable>
    </div>
  );
};

export default DashboardTable;
