"use client";
import { useEffect, useState } from "react";
import { Appbar } from "../../components/AppBar";
import { Balance } from "../../components/Balance";
import { Users } from "../../components/Users";
import axios from "axios";
// import useUserId from "../hooks/useUserId";
import UserId from "../classes/userId";

const Dashboard = () => {
  const [balance, setBalance] = useState();
  const [firstLetter, setFirstLetter] = useState();
  // const userId = useUserId();
  // console.log(userId.userId);

  useEffect(() => {
    // console.log("Line no. 15");
    // console.log(userId.userId);
    axios
      .post("http://localhost:5000/api/v1/account/balance", {
        // userId: UserId.getInstance().userId,
        userId: localStorage.getItem("userId"),
      })
      .then((res) => {
        setBalance(res.data.balance);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/v1/user/find-user", {
        userId: localStorage.getItem("userId"),
      })
      .then((res) => {
        console.log("Line no. 38");
        console.log(res.data);
        setFirstLetter(res.data.firstName[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div>
      <Appbar firstLetter={firstLetter} />
      <div className="m-8">
        <Balance value={balance} />
        <Users />
      </div>
    </div>
  );
};

export default Dashboard;
