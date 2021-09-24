const { Schema, model } = require('mongoose')

const entregaSchema = new Schema({
  camionero:{
      type: Schema.Types.ObjectId,
      ref:"Camionero",
      required: true
  },
  camion:{
      type: Schema.Types.ObjectId,
      ref:"Camion",
      required: true
  },
  fecha:{
      type: Date,
      required: true
  }
},{
    versionKey: false,
    timestamps: true
})

module.exports = model('Entrega', entregaSchema)