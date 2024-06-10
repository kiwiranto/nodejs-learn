import mongoose from "mongoose";

const UserModel = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  age: {
    type: Number,
    require: true
  },
});

export default mongoose.model("Users", UserModel);
