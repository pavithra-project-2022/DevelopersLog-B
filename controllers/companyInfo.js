import CompanyInfo from "../models/CompanyInfo.js";
import User from "../models/User.js";

export const createCompanyInfo = async (req, res, next) => {

  const userId = req.params.userId;
  const id = req.params.id

  const userData = await User.findById(id)
  
  const newCompanyInfo = new CompanyInfo({
    empId:userId,
    createDate:req.body.createDate,
    companyName:req.body.companyName,
    secondEmail:req.body.secondEmail,
    secondMobile:req.body.secondMobile,
    branch:req.body.branch,
    position:req.body.position,
    officeMailId:req.body.officeMailId,
    website:req.body.website,
    companyContactNo:req.body.companyContactNo,
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



export const updateCompanyInfo = async (req, res, next) => {
  
 const idData = await CompanyInfo.findOne({empId:req.params.id})
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(
      idData._id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedEmployee);
  } catch (err) {
    next(err);
  }
};


export const deleteCompanyInfo = async (req, res, next) => {
  try {
    await CompanyInfo.findByIdAndDelete(req.params.id);
    res.status(200).json("Employee has been deleted.");
  } catch (err) {
    next(err);
  }
};
export const getCompanyInfo = async (req, res, next) => {
 const idData = await CompanyInfo.findOne({empId:req.params.id})

  try {
    const employee = await CompanyInfo.findById(idData._id);
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};

export const getCompanyInfos = async (req, res, next) => {
  try {
    const employee = await CompanyInfo.find();
    res.status(200).json(employee);
  } catch (err) {
    next(err);
  }
};
