function Cars() {
  let cars = ["BMW,", "AUDI", "Nexa", "Honda", "Maruti"];
  return (
    <>
      <h1>List of Cars</h1>
      <ul>
        {cars.map((car, index) => (
          <li key={index}>{car}</li>
        ))}
      </ul>
    </>
  );
}

const reactRoot = ReactDOM.createRoot(document.getElementById("root"));
reactRoot.render(<Cars />);

// const students = [{name:,age:,}]

function Table() {
  const students = [
    { name: "Student1", age: 20, marks: 70 },
    { name: "Student2", age: 30, marks: 80 },
    { name: "Student3", age: 40, marks: 90 },
  ];

  return (
    <>
      <h1>Table</h1>
      <table border="2">
        <caption>Student Details</caption>
        <thead>
          <tr>
            <th colSpan="2">NAME</th>
            <th colSpan="2">AGE</th>
            <th colSpan="2">M</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={i}>
              <td colSpan="2">{student.name}</td>
              <td colSpan="2">{student.age}</td>
              <td colSpan="2">{student.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

reactRoot.render(<Table />);

function CarsDetials() {
  const carsInfo = [
    { name: "BMW", Average: 10 },
    { name: "AUDI", Average: 11 },
    { name: "NEXA", Average: 12 },
  ];

  return (
    <>
      <h1>Cars Details</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Average</th>
          </tr>
        </thead>
        <tbody>
          {carsInfo.map((element, index) => (
            <tr key={index}>
              <td>
                <img src="car-image.jpg" width="50px" height="50px"></img>
              </td>
              <td>{element.name}</td>
              <td>{element.Average}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

function App() {
    let showCars = false;
    // Conditional Rendering
    if(showCars){
        return(
            <CarsDetials />
        )
    }
    else{
        return(
            <Table />
        )
    }
//   return (
//     <>
//       <CarsDetials />
//       <Table />
//     </>
//   );
}

reactRoot.render(<App />);
