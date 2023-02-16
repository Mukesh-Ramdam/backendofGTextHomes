const express = require('express')
const router= express.Router()



const {createLead, getAllLeads, updateLead, deleteLead, searchLead, sortLeadsByDateNew, sortLeadsByDateOld, sortBySourceAsc, sortBySourceDesc, sortByStatusDesc, sortByStatusAsc }= require('../controllers/leadController')

 
router
 .route('/')
 .post(createLead)
 .get(getAllLeads)
 .put(updateLead)

router
 .route('/:id')
 .delete(deleteLead)

 router
  .route('/search')
  .post(searchLead)

  router
  .route('/sortByDateNew')
  .get(sortLeadsByDateNew)

  router
  .route('/sortByDateOld')
  .get(sortLeadsByDateOld)

  router
  .route('/sortBySourceAsc')
  .get(sortBySourceAsc)

  router
  .route('/sortBySourceDesc')
  .get(sortBySourceDesc)

  router
  .route('/sortByStatusAsc')
  .get(sortByStatusAsc)

  router
  .route('/sortByStatusDesc')
  .get(sortByStatusDesc)
  
 
module.exports = router