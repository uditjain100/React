import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import actionsCreators from "./Actions/actionCreators";

function User({ userData, fetchUsers }) {
  //   const [loading, setLoading] = useState(true);
  //   const [err, setErr] = useState("");
  //   const [users, setUsers] = useState([]);
  useEffect(() => {
    // const fetchData = async () => {
    //   let response = await axios.get(
    //     "https://jsonplaceholder.typicode.com/users"
    //   );
    //   setUsers([...response.data]);
    //   setLoading(false);
    // };
    // try {
    //   fetchData();
    // } catch (err) {
    //   setErr(err.message);
    // }
    fetchUsers();
  }, [fetchUsers]);

  return (
    <React.Fragment>
      <div>Users</div>
      {userData.loading ? (
        <h1>Loading ............................ </h1>
      ) : userData.err !== "" ? (
        <h1>{userData.err}</h1>
      ) : (
        userData.users.length > 0 &&
        userData.users.map((user) => {
          return <h6>{user.name}</h6>;
        })
      )}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return { userData: state.user };
};

const mapDispatchToProps = (dispatch) => {
  return { fetchUsers: () => dispatch(actionsCreators.fetchUsers()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);
