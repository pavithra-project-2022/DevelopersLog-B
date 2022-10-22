import Dcm from "../models/Dcm.js";

export const searchDcm = async (req, res, next) => {
  const startDate = req.body.startDate;
  const endDate = req.body.endDate;
  try {
    if (startDate !== "" && endDate !== "") {
    const  newDate = await Dcm.find({
        createDate: { $gte: startDate, $lte: endDate },
      });
      res.status(200).json(newDate);
     
      
    }
    else if (startDate !== "" && endDate === "") {
      const  newDate1 = await Dcm.find({
          createDate: { $eq: startDate },
        });
        res.status(200).json(newDate1);
      }
 
   else{
    res.status(500).json({message:"Something went Wrong"});
   }
  } catch (err) {
    next(err);
  }
};
