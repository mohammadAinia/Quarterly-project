const models=require("../models")

const show_problim=(req,res) => {
    models.common_problim.findAll()
        .then(
            result => {
                return res.json({ valid: true,ses: req.session.username })
            }
        )
        .catch(
            err => {
                return res.json({ valid: false })
            }
        )
}
const add_problim=(ress,res) => {
    const problim={
        title: req.body.title,
        disc: req.body.desc,
        publisher: req.session.username,
        animal_type: req.body.animal_type
    }
    models.common_problim.create(problim).then(
        res => {
            return res.json({valid:true,ses:req.session.username})
        }
    )
        .catch(err => {
            return res.json({ valid: false })
        })
}
const answer=(req,res)=>{
    
}