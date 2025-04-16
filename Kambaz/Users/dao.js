//import db from "../Database/index.js";
import model from "./model.js";
import { v4 as uuidv4 } from "uuid";
//let { users } = db;
export const createUser = (user) => {
    const newUser = { ...user, _id: uuidv4() };
    //users = [...users, newUser];
    return model.create(newUser);
};

//export const createUser = (user) => {} // implemented later
export const findAllUsers = () => model.find();
export const findUserById = (userId) => model.findById(userId);
export const findUsersByRole = (role) => model.find({ role: role });
export const findUserByUsername = (username) =>  model.findOne({ username: username });
export const findUserByCredentials = async (username, password) =>  {
  console.log("📂 Collection being queried:", model.collection.name);
  const user = await model.findOne({ username });
  console.log("🧾 All users in DB:", users);
  //console.log("🧪 DAO found user by username:", user);
  if (user && user.password === password) {
    return user;
  }
  return null;
};
export const findUsersByPartialName = (partialName) => {
  const regex = new RegExp(partialName, "i"); // 'i' makes it case-insensitive
  return model.find({
    $or: [{ firstName: { $regex: regex } }, { lastName: { $regex: regex } }],
  });
};

export const updateUser = (userId, user) =>  model.updateOne({ _id: userId }, { $set: user });
export const deleteUser = (userId) => model.deleteOne({ _id: userId });


//export const findAllUsers = () => users;
//export const findUserById = (userId) => users.find((user) => user._id === userId);
//export const findUserByUsername = (username) => users.find((user) => user.username === username);
//export const findUserByCredentials = (username, password) =>
  //users.find( (user) => user.username === username && user.password === password );
//export const updateUser = (userId, user) => (users = users.map((u) => (u._id === userId ? user : u)));
//export const deleteUser = (userId) => (users = users.filter((u) => u._id !== userId));