import ExperienceInfo from "../models/ExperienceInfo.js";
import User from "../models/User.js";

export const createExperienceInfo = async (req, res, next) => {

  const userId = req.params.userId;
  const id = req.params.id

  const userData = await User.findById(id)
  
  const newCompanyInfo = new ExperienceInfo({
    empId:userId,
    createDate:req.body.createDate,
    companyName1:req.body.companyName1,
    companyName2:req.body.companyName2,
    companyName3:req.body.companyName3,
    period1:req.body.period1,
    period2:req.body.period2,
    period3:req.body.period3,
    position1:req.body.position1,
    position2:req.body.position2,
    position3:req.body.position3,
    jobDescription1:req.body.jobDescription1,
    jobDescription2:req.body.jobDescription2,
    jobDescription3:req.body.jobDescription3,
  });

  try {
    const savedCompanyInfo = await newCompanyInfo.save();
    res.status(200).json(savedCompanyInfo);
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



export const updateExperienceInfo = async (req, res, next) => {
  
 const idData = await ExperienceInfo.findOne({empId:req.params.id})
  try {
    const updatedEmployee = await ExperienceInfo.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};


export const deleteExperienceInfo = async (req, res, next) => {
  try {
    await ExperienceInfo.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getExperienceInfo = async (req, res, next) => {
 const idData = await ExperienceInfo.findOne({empId:req.params.id})

  try {
    const employee = await ExperienceInfo.findById(idData._id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getExperienceInfos = async (req, res, next) => {
  try {
    const employee = await ExperienceInfo.find();
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
