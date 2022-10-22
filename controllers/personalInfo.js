import PersonalInfo from "../models/PersonalInfo.js";
import User from "../models/User.js";

export const createPersonalInfo = async (req, res, next) => {

  const userId = req.params.userId;
  const id = req.params.id

  const userData = await User.findById(id)
  
  const newEmployee = new PersonalInfo({
    empId:userId,
    createDate:req.body.createDate,
    address:req.body.address,
    dob:req.body.dob,
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



export const updatePersonalInfo = async (req, res, next) => {
  
 const idData = await PersonalInfo.findOne({empId:req.params.id})
  try {
    const updatedEmployee = await PersonalInfo.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};


export const deletePersonalInfo = async (req, res, next) => {
  try {
    await PersonalInfo.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getPersonalInfo = async (req, res, next) => {
 const idData = await PersonalInfo.findOne({empId:req.params.id})

  try {
    const employee = await PersonalInfo.findById(idData._id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getPersonalInfos = async (req, res, next) => {
  try {
    const employee = await PersonalInfo.find();
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
