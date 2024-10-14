"use client";

import { useRouter } from "next/navigation";
// import useUserId from "../../hooks/useUserId";
import { BottomWarning } from "../../../components/BottomWarning";
import { Button } from "../../../components/Botton";
import { Heading } from "../../../components/Heading";
import { InputBox } from "../../../components/InputBox";
import { SubHeading } from "../../../components/SubHeading";
import UserId from "../../classes/userId";
import { useState } from "react";
import axios from "axios";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  // const userId = useUserId();
  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-72 sm:w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign in"} />
          <SubHeading label={"Enter your credentials to access your account"} />
          <InputBox
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            placeholder="harkirat@gmail.com"
            label={"Email"}
          />
          <InputBox
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            placeholder="123456"
            label={"Password"}
          />
          <div className="pt-4">
            <Button
              onClick={async () => {
                try {
                  const response = await axios.post(
                    "http://localhost:5000/api/v1/user/signin",
                    {
                      username,
                      password,
                    }
                  );
                  // console.log("Line no. 50");
                  // userId.userId = response.data.userId;
                  // console.log(UserId.getInstance().userId);
                  // UserId.getInstance().userId = response.data.userId;
                  localStorage.setItem("userId", response.data.userId);
                  router.push("/dash");
                  alert("Signed in successfully...");
                } catch (error) {
                  console.log(error);
                }
              }}
              label={"Sign in"}
            />
          </div>
          {/* <BottomWarning
            label={"Don't have an account?"}
            buttonText={"Sign up"}
            to={"/signup"}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Signin;
