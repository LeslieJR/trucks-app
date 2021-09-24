const models = require('../models')

const create = async (req, res) =>{
    try{
        const {codigo, nombre} = req.body
        const newProvincia = new models.provincia({
            codigo, 
            nombre
        })
        await newProvincia.save();

        res.json(newProvincia)

    }catch(_){
        return res.json('THERE WAS AN ERROR')
    }
}


module.exports = {
    create
}