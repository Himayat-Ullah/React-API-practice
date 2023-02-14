import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

// const getPostsData = () => {
//   axios
//     .get("https://jsonplaceholder.typicode.com/posts")
//     .then((data) => console.log(data.data))
//     .catch((error) => console.log(error));
// };
function App() {
  const [persons, setPersons] = useState([]);
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      setPersons(res.data);
      // console.log(persons);
      // console.log("hit");
    });
  }, [setPersons]);
  return (
    <>
      <h2 className="text-center bg-dark text-light rounded mt-5 mb-5 p-3 ml-10 mr-10  container">
        API Testing
      </h2>
      <div className="d-flex justify-content-between container flex-wrap">
        <div className="row">
          {persons.map((user) => (
            <div
              className="col-3 m-5 text-center bg-light justify-content-between border rounded"
              key={user.id}
            >
              <img
                className="img-fluid h-auto rounded"
                src={`https://cdn.pixabay.com/photo/2023/02/06/16/46/forest-7772371__340.jpg`}
                alt="Not found"
              />
              <p>{user.name}</p>
              <p className="d-block btn m-auto jsutify-content-center">
                {user.address.city}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
