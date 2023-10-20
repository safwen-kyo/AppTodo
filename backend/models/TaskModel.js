const mongoose =require ("mongoose");


const taskSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description:{ type: String, required: true } ,
    statusTask: { type: String,enum: ["incomplete", "inProgress", "completed"], required: true, default: "incomplete" },
    
  },
  { timestamps: true }
);

const taskModel = mongoose.model("Task", taskSchema);

module.exports= taskModel;