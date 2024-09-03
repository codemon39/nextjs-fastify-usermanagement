const { handleDelete, handlePost, handlePut } = require("./api");

export const userRemove = async (id) => {
  handleDelete(`/dev/${id}`);
};

export const editUser = (data) => {
  handlePut(`/dev/${data._id}`, data);
};

export const addUser = (inputValue) => {
  handlePost(
    `/dev`,
    inputValue,
    (res) => console.log(res),
    (err) => console.log(err)
  );
};
