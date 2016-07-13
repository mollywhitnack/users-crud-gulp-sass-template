'use strict';

const mongoose = require('mongoose');

let crudSchema = new mongoose.Schema({
     createdAt: { type: Date, default: Date.now },
     something: {type: String}
     //residents: [{type: mongoose.Schema.Types.ObjectId, ref: 'Resident'}]
});

let Crud;

//cant use arrow functions
/*crudSchema.statics.addResident = function(apartmentId, residentId, cb){
    //'this' is apartment model
    this.findById(apartmentId, (err, apartment)=>{
      if(err || !apartment) return cb(err || 'apartment not found');
       apartment.addResidentMethod(residentId, cb);
    })
}

crudSchema.methods.addResidentMethod = function(residentId, cb){
  if(this.residents.length < this.maxOccupancy){
    this.residents.push(residentId);
    this.save(cb);
  }
  else{
    cb('apartment at capacity');
  }
}

crudSchema.methods.getSomething = function(crudId, cb){
    let tenants = this.residents.length;
    var totalRent = tenants * this.rent;
    return totalRent;
}*/

Crud =  mongoose.model('Crud', crudSchema);

module.exports = Crud;












