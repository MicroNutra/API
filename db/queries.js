const knex = require('./connection');

function getAllMicro() {
    return knex('micro_nutrients').select();
}

function getAllMacro() {
    return knex('macro_nutrients').select();
}

function getAllUsers() {
    return knex('users').select();
}

function getAllLogs() {
    return knex('food_log').select();
}

function getIndividualMicro() {
    return knex('micro_nutrients').select()
}

function getIndividualMacro() {
    return knex('macro_nutrients').select()
}







// function getSingleJob(jobId) {
//   return knex('jobs').select().where('id', jobId);
// }
//
// function addJob(obj) {
//   return knex('jobs').insert(obj);
// }
//
// function updateJob(jobId, obj) {
//   return knex('jobs').update(obj).where('id', jobId);
// }
//
// function removeJob(jobId) {
//   return knex('jobs').del().where('id', jobId);
// }

module.exports = {
  getAllMicro,
  getAllMacro,
  getAllUsers,
  getAllLogs,
  postMicro
  // getSingleJob,
  // addJob,
  // updateJob,
  // removeJob,
};
