import mongoose from "mongoose";

const UserAccountModel = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    require: true
  },
  password: {
    type: String,
    require: true
  },
});

export default mongoose.model("UsersAccount", UserAccountModel);
