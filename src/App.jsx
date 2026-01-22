import React, { useContext, useEffect, useState } from "react";
import Login from "./Components/Auth/Login";
import Employeedashboard from "./Components/Dashboard/Employeedashboard";
import Admindashboard from "./Components/Dashboard/Admindashboard";
import { getlocalstorage, setlocalstorage } from "./Utils/localstorage";
import { Authcontext } from "./Context/Authprovider";

const App = () => {
  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  const [userData,setuserData] = useContext(Authcontext);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      const userdata = JSON.parse(loggedInUser);
      setuser(userdata.role);
      setloggedInUserData(userdata.data);
    }
  }, []);

  const handlelogin = (email, password) => {
    console.log(email, password);
    if (email == "admin@me.com" && password == "123") {
      setuser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({ role: "admin" }));
    } else if (userData) {
      const employee = userData.find(
        (e) => email == e.email && e.password == password
      );
      if (employee) {
        setuser("employee");
        setloggedInUserData(employee);
        localStorage.setItem(
          "loggedInUser",
          JSON.stringify({ role: "employee", data: employee })
        );
      }
    } else {
      alert("Invalid creadentials");
    }
  };

  return (
    <>
      {!user ? <Login handlelogin={handlelogin} /> : ""}
      {user == "admin" ? (
        <Admindashboard changeUser={setuser} />
      ) : user == "employee" ? (
        <Employeedashboard changeUser={setuser}  data={loggedInUserData} />
      ) : null}
    </>
  );
};

export default App;
