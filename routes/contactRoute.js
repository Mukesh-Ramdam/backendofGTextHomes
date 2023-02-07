const express = require('express')
const router= express.Router()



const {createContact, getAllContacts, updateContact, deleteContact}= require('../controllers/contactController')

 
router
 .route('/')
 .post(createContact)
 .get(getAllContacts)
 .put(updateContact)

router
 .route('/:id')
 .delete(deleteContact)

 
module.exports = router