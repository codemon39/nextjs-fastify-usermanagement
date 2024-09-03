"use client";
import React, { useEffect, useState } from "react";
import UserForm from "@/components/userForm";
import { editUser } from "@/lib/utils";
import { handleGet } from "@/lib/api";

const EditUser = (params) => {
  const [data, setData] = useState({});
  const id = params.params.devId;
  useEffect(() => {
    handleGet(`/dev/${id}`, (res) => setData(res.data));
  }, [id]);
  const onSubmit = (payloads) => {
    editUser(payloads);
  };
  return (
    <>
      <UserForm handleSubmit={onSubmit} data={data} />
    </>
  );
};

export default EditUser;
