const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  nickname: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  numberOfRooms: {
    type: Number,
    required: true,
  },
  roomIdYouCreated: {
    type: String,
  },
  youAreInGame: {
    type: String,
  },
});

module.exports = model("User", userSchema);
