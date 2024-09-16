const express=require('express');
let {GetAllTrenders}=require('../controllar/GetAllTrenders.Controllar')
let {getonetrender}=require('../controllar/GetOneTrender.controllar')
let {SubmissionControllar}=require('../controllar/Submission.Controllar')

const router =express.Router();

router.get('/',GetAllTrenders);
router.get('/:idtrender',getonetrender)
router.post('/:idtrender/submission',SubmissionControllar)

module.exports=router;