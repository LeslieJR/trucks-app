const { Schema, model } = require('mongoose')

const provinciaSchema = new Schema({
  codigo:{
      type:String,
      unique:true,
      required:true
  },
  nombre:{
      type:String,
      required:true
  }
},{
    versionKey: false,
    timestamps: true
})

module.exports = model('Provincia', provinciaSchema)