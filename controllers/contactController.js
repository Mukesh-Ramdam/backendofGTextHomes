const Contact = require('../models/Contact')

exports.createContact = async(req, res) => {
    const contact = new Contact({
        ...req.body,
    })
    await contact.save();
    console.log("Contact Created");
    return res.status(200).json({
        msg:'Contact Created Successfully'
    })
}
exports.getAllContacts = async(req, res) =>{
    const blogs = await Contact.find({})
    res.send(blogs)
}

exports.updateContact = async(req, res)=>{
     await Contact.findByIdAndUpdate(req.body._id, req.body).exec();
     res.json({
        msg:'Contact Updated Successfully'
     })
}

exports.deleteContact = async(req, res)=>{
    console.log('Deleting contact')
    await Contact.findByIdAndDelete({_id:req.params.id} )
    res.json({
        msg:'Contact Deleted Successfully'
     })
}