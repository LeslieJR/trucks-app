const { Schema, model } = require('mongoose')

const camionSchema = new Schema({
  matricula:{
    type:String,
    required:true
  },
  modelo:{
    type:String
  },
  tipo:{
    type:String
  },
  potencia:{
    type:Number
  }
},
{
    versionKey: false,
    timestamps: true
}
)

module.exports = model('Camion', camionSchema)