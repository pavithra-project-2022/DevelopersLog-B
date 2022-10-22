import ProjectType from "../models/ProjectType.js";

export const createProjectType = async (req, res, next) => {

  const projectTypeCollection = await ProjectType.count();
  
  const newEmployee = new ProjectType({
    projectTypeId:projectTypeCollection+1,
    projectType:req.body.projectType,
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



export const updateProjectType = async (req, res, next) => {
  
 const idData = await ProjectType.findOne({empId:req.params.id})
  try {
    const updatedEmployee = await ProjectType.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};


export const deleteProjectType = async (req, res, next) => {
  try {
    await ProjectType.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getProjectType = async (req, res, next) => {
 const idData = await ProjectType.findOne({empId:req.params.id})

  try {
    const employee = await ProjectType.findById(idData._id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getProjectTypes = async (req, res, next) => {
  try {
    const employee = await ProjectType.find();
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
