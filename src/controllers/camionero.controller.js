const models = require('../models')

const create = async (req, res) =>{
    try{
        const {dni,nombre, telf, direccion, salario, poblacion } = req.body
        const newCamionero = new models.camionero({
            dni,nombre, telf, direccion, salario, poblacion 
        })
        await newCamionero.save();

        res.json(newCamionero)

    }catch(_){
        return res.json('THERE WAS AN ERROR')
    }
}

module.exports = {
    create
}