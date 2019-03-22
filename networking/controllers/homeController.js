import httpService from "../httpService";

export const getData = () => {
  return httpService.get("http://todo-backend-express.herokuapp.com/", {});
};

export const putData = newData => {
  httpService.post("http://todo-backend-express.herokuapp.com/", newData);
};

export const updateData = (todo, id) => {
  httpService.patch(`http://todo-backend-express.herokuapp.com/${id}`, todo);
};

export const deleteData = id => {
  httpService.delete(`http://todo-backend-express.herokuapp.com/${id}`);
};
