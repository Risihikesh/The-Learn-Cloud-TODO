const mongoose= require('mongoose');
const { Schema } = mongoose;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  check: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model("todoData", todoSchema);
