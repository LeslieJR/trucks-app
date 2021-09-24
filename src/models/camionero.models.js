const { Schema, model } = require('mongoose')

const camioneroSchema = new Schema({
  dni:{
      type:String,
      required: true
  },
  nombre:{
      type:String,
      required:true
  },
  telf:{
      type:String,
  },
  direccion:{
      type:String,
      default: ""
  },
  salario:{
      type:Number
  },
  poblacion:{
      type: String,
      default:""
  }


},{
    versionKey: false,
    timestamps: true
})

module.exports = model('Camionero', camioneroSchema)