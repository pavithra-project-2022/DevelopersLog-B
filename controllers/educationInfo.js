import EducationInfo from "../models/EducationInfo.js";
import User from "../models/User.js";

export const createEducationInfo = async (req, res, next) => {

  const userId = req.params.userId;
  const id = req.params.id

  const userData = await User.findById(id)
  
  const newEmployee = new EducationInfo({
    empId:userId,
    createDate:req.body.createDate,
    sslcSchoolName:req.body.sslcSchoolName,
    sslcBoard:req.body.sslcBoard,
    sslcGPA:req.body.sslcGPA,
    
    hscSchoolName:req.body.hscSchoolName,
    hscBoard:req.body.hscBoard,
    hscGPA:req.body.hscGPA,
    
    diplomaCollegeName:req.body.diplomaCollegeName,
    diplomaDegree:req.body.diplomaDegree,
    diplomaGPA:req.body.diplomaGPA,
    
    ugCollegeName:req.body.ugCollegeName,
    ugDegree:req.body.ugDegree,
    ugBoard:req.body.ugBoard,
    ugGPA:req.body.ugGPA,

    pgCollegeName:req.body.pgCollegeName,
    pgDegree:req.body.pgDegree,
    pgBoard:req.body.pgBoard,
    pgGPA:req.body.pgGPA,
    
    
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



export const updateEducationInfo = async (req, res, next) => {
  
 const idData = await EducationInfo.findOne({empId:req.params.id})
  try {
    const updatedEmployee = await EducationInfo.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};


export const deleteEducationInfo = async (req, res, next) => {
  try {
    await EducationInfo.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getEducationInfo = async (req, res, next) => {
 const idData = await EducationInfo.findOne({empId:req.params.id})

  try {
    const employee = await EducationInfo.findById(idData._id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getEducationInfos = async (req, res, next) => {
  try {
    const employee = await EducationInfo.find();
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
