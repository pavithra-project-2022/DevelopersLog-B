
import Project from "../models/Project.js";

export const createProject = async (req, res, next) => {


  const projectCollection = await Project.count();
  
  const newEmployee = new Project({
    projectId:projectCollection+1,
    projectCode:req.body.projectCode,
    projectName:req.body.projectName,
    projectType:req.body.projectType,
    projectDevLocation:req.body.projectDevLocation,
    projectTeamSize:req.body.projectTeamSize,
    projectDuration:req.body.projectDuration,
    projectComDate:req.body.projectComDate,
    projectClosedDate:req.body.projectClosedDate,
    createDate:req.body.createDate,
  });

  try {
    const savedEmployee = await newEmployee.save();
    res.status(200).json(savedEmployee);
  } catch (err) {
    next(err);
  }
};

// export const countByuserName = async (req, res, next) => {
    
//   try {
//     const names = await Employee.find();
//     const fname = names.empFname
//     res.status(200).json();
//   } catch (err) {
//     next(err);
//   }
// };



export const updateProject = async (req, res, next) => {
  
 const idData = await Project.findOne({projectId:req.params.id})
  try {
    const updatedEmployee = await Project.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};


export const deleteProject = async (req, res, next) => {
  try {
    await Project.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getProject = async (req, res, next) => {
 const idData = await Project.findOne({empId:req.params.id})

  try {
    const employee = await Project.findById(idData._id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getProjects = async (req, res, next) => {
  try {
    const employee = await Project.find();
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
