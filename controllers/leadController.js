const Lead = require('../models/Lead')

exports.createLead = async(req, res) => {
    const lead = new Lead({
        ...req.body,
        // date: new Date().getFullYear()+"/" +new Date().getMonth()+"/"+new Date().getDate(),
        date: new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' } )
    })
    await lead.save();
    console.log("Lead Created");
    return res.status(200).json({
        msg:'Lead Created Successfully'
    })
}
exports.getAllLeads = async(req, res) =>{
    const leads = await Lead.find({})
    res.send(leads)
}

exports.updateLead = async(req, res)=>{
     await Lead.findByIdAndUpdate(req.body._id, req.body).exec();
     res.json({
        msg:'Lead Updated Successfully'
     })
}

exports.deleteLead = async(req, res)=>{
    console.log('Deleting Lead')
    await Lead.findByIdAndDelete({_id:req.params.id} )
    res.json({
        msg:'Lead Deleted Successfully'
     })
}

exports.searchLead = async (req, res) =>{
    // console.log(req.body)
    // const searchTerm = req.body.searchTerm
    // console.log(searchTerm)
    const leads = await Lead.find({
        "$or":[
            {name:{$regex:req.query.searchTerm}},
            {country:{$regex:req.query.searchTerm}},
    //         {name:{$regex:req.body.searchTerm}},
    //         {country:{$regex:req.body.searchTerm}},

        ]
    })

    res.send(leads)
}

exports.sortLeadsByDateNew = async (req, res) =>{
    // await Lead.find().sort({'date':1}).limit(3).exec(function(err, docs) {
    await Lead.find().sort({'date': -1}).exec(function(err, docs) {
        if(err){
        console.log(err)
    }
    if(docs){
        res.send(docs)
    }
})
}

exports.sortLeadsByDateOld = async (req, res) =>{
    // await Lead.find().sort({'date':1}).limit(3).exec(function(err, docs) {
    await Lead.find().sort({'date': 1}).exec(function(err, docs) {
        if(err){
        console.log(err)
    }
    if(docs){
        res.send(docs)
    }
})
}
exports.sortBySourceAsc = async (req, res) =>{
    await Lead.find().sort({ source: -1 }).exec(function(err, docs) {
        if(err){
        console.log(err)
    }
    if(docs){
        res.send(docs)
    }
})
}

exports.sortBySourceDesc = async (req, res) =>{
    await Lead.find().sort({ source: 1 }).exec(function(err, docs) {
        if(err){
        console.log(err)
    }
    if(docs){
        res.send(docs)
    }
})
}


exports.sortByStatusAsc = async (req, res) =>{
    await Lead.find().sort({ status: -1 }).exec(function(err, docs) {
        if(err){
        console.log(err)
    }
    if(docs){
        res.send(docs)
    }
})
}

exports.sortByStatusDesc = async (req, res) =>{
    await Lead.find().sort({ status: 1 }).exec(function(err, docs) {
        if(err){
        console.log(err)
    }
    if(docs){
        res.send(docs)
    }
})
}
