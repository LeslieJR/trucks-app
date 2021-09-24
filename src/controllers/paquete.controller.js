const models = require('../models')

const create = async (req, res) =>{
    try{
        const {codigo, descripcion, destinatario, dir_destinatario, provinciaId} = req.body
        const newPaquete = new models.paquete({
            codigo, descripcion, destinatario, dir_destinatario, provinciaId
        })
        await newPaquete.save();

        res.json(newPaquete)

    }catch(_){
        return res.json('THERE WAS AN ERROR')
    }
}

const all = async (req, res) => {
    try{
        const{camioneroId} = req.params
        const camionero = await models.camionero.findById(camioneroId)
        if(!camionero){
            return res.json({error:'Este camionero no existe'})
        }
        const paquetes = await models.paquete.find({camionero});

        return res.json(paquetes)

    }catch(_){

    }
}

module.exports = {
    create,
    all
}