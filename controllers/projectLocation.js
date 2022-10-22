import ProjectLocation from "../models/ProjectLocation.js";

export const createProjectLocation = async (req, res, next) => {

  const projectLocationCollection = await ProjectLocation.count();
  
  const newEmployee = new ProjectLocation({
    projectLocationId:projectLocationCollection+1,
    projectLocation:req.body.projectLocation,
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



export const updateProjectLocation = async (req, res, next) => {
  
 const idData = await ProjectLocation.findOne({empId:req.params.id})
  try {
    const updatedEmployee = await ProjectLocation.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};


export const deleteProjectLocation = async (req, res, next) => {
  try {
    await ProjectLocation.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getProjectLocation = async (req, res, next) => {
 const idData = await ProjectLocation.findOne({empId:req.params.id})

  try {
    const employee = await ProjectLocation.findById(idData._id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getProjectLocations = async (req, res, next) => {
  try {
    const employee = await ProjectLocation.find();
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
