import express from 'express';

const middleware = (err,req,res,next)=>{
  res.json({
    success:true,
    message:err.message
  })
}

export default middleware
