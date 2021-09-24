const models = require('../models')
const create = async (req, res) =>{
    try{
        const {matricula, modelo, tipo, potencia} = req.body
        
        const newCamion = new models.camion({
            matricula, modelo, tipo, potencia
        })
        await newCamion.save();
        res.json(newCamion)
    }catch(_){
        return res.json('THERE WAS AN ERROR')
    }
}


module.exports = {
    create
}