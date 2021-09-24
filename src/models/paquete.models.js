const { Schema, model } = require("mongoose");

const paqueteSchema = new Schema(
  {
    codigo: {
      type: String,
      unique: true,
      required: true,
    },
    descripcion: {
      type: String,
      default: "",
    },
    destinatario: {
      type: String,
      required: true,
    },
    dir_destinatario: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = model("Paquete", paqueteSchema);
