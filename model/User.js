const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    date_of_birth: Date,
    avatar: String,
    verified: {
      type: Boolean,
      default: false,
    },
  },
  {timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);
