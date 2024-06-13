"use client";

import { useForm } from "react-hook-form";
import axios from "axios";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      number: "",
      password: "",
    },
  });

  const onSubmit = async (d: any) => {
    console.log(d);
    await axios.post(
      "/api/register",
      {
        name: d.name,
        number: d.number,
        password: d.password,
      },
      {
        withCredentials: true,
      }
    );
    console.log("You've created a new account successfully");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex gap-3">
        <input {...register("name")} type="text" placeholder="Name" />
        <input {...register("number")} type="text" placeholder="Phone number" />
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Signup;
