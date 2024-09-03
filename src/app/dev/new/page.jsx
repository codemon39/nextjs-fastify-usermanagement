"use client";
import React from "react";
import UserForm from "@/components/userForm";
import { addUser } from "@/lib/utils";

const AddUser = () => {
  const data = {
    name: "",
    gender: "Male",
    birthday: "",
    address: "",
  };

  const onSubmit = (payloads) => {
    addUser(payloads);
  };

  return (
    <>
      <UserForm handleSubmit={onSubmit} data={data} />
    </>
  );
};

export default AddUser;
