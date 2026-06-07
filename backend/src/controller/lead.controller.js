import leadModel from "../models/lead.model.js";
import Lead from "../models/lead.model.js";

//  create new lead
export const createLead = async (req, res, next) => {
  try {
    const { name, email, phoneNumber, companyName, leadStatus, notes } =
      req.body;
    if (!name || !email || !phoneNumber || !companyName || !leadStatus) {
      return res.status(400).json({ message: "fields are empty" });
    }
    await Lead.create({
      name,
      email,
      phoneNumber,
      companyName,
      leadStatus,
      notes,
    });
    res.status(201).json({
      success: true,
      message: "Lead Created",
    });
  } catch (err) {
    next(err);
  }
};

// fetch all leads
export const getLeads = async (req, res, next) => {
  try {
    if(req.query.search){
      const search = req.query.search;
      const leads =await Lead.find({
        $or:[
              {name:{
                $regex:search,
                $options:'i'
              }},
              {email:{
                $regex:search,
                $options:'i'
              }},
              {companyName:{
                $regex:search,
                $options:'i'
              }}
            ]
      })
      if (leads.length !==0){
        return res.status(200).json({
          data:leads,
          success:true,
          message:"Search Found"
        });
      } else {
        return res.status(200).json({
          data:[],
          success:true,
          message:"Search Not Found"
        });
      }
    }
    const leads = await Lead.find()
    if (leads.length === 0 ){
      return res.status(200).json({
        success:true,
        data:[],
        message:"No Leads Found"
      })
    }
    res.status(200).json({
      data:leads,
      success:true,
      message:"Leads Fetched"
    })
  } catch (err) {
    next(err);
  }
};

// delete lead
export const deleteLead= async (req,res,next)=>{
  try{
    const _id = req.params._id
    const lead = await Lead.findOne({_id:_id});
    if(!lead){
      return res.status(404).json({
        success:false,
        message:"Lead not found "
      })
    }
    await Lead.findByIdAndDelete(_id)
    res.status(200).json({
      success:true,
      message:"Lead Deleted"
    })
  }catch(err){
    next(err)
  }
}

// update lead
export const updateLead = async(req,res,next)=>{
  try{
    const _id = req.params._id;

    const lead = await Lead.findOne({_id: _id});
    if(!lead){
      return res.status(404).json({
        success:false,
        message:"Lead Not Found "
      })
    }
    const { name, email, phoneNumber, companyName, leadStatus, notes } = req.body;
    const updatedLead = await Lead.findOneAndUpdate({
      _id:_id},
      { name, email, phoneNumber, companyName, leadStatus, notes
    },
    {
      returnDocument:'after'
    }
  )
    res.status(200).json({
      success:true,
      message:"Lead Updated",
      lead:updatedLead
    })
  }catch(err){
    next(err)
  }
}




