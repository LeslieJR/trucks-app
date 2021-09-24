const models = require('../models')

const create = async (req, res) =>{
    try{
        const {camionId, camioneroId, fecha} = req.body
        //verificar camion

        //verificar camionero

        const newEntrega = new models.entrega({
            camion:camionId, 
            camionero:camioneroId, 
            fecha
        })
        await newEntrega.save();

        res.json(newEntrega)

    }catch(_){
        return res.json('THERE WAS AN ERROR')
    }
}

module.exports = {
    create
}