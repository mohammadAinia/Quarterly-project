const models=require("../models")

const show_all_problim=(req,res) => {
    models.common_problim.findAll()
        .then(
            result => {
                return res.json({ valid: true,ses: req.session.username,result: result })
            }
        )
        .catch(
            err => {
                console.log(err)
                return res.json({ valid: false })
            }
        )
}
const add_problim=(ress,res) => {
    const problim={
        title: req.body.Title,
        disc: req.body.Description,
        publisher: req.session.username,
        animal_type: req.body.Animal_type,
        category: req.body.Category
    }
    models.problim.create(problim).then(
        res => {
            return res.json({ valid: true,ses: req.session.username ,res })
        }
    )
        .catch(err => {
            console.log(err)

            return res.json({ valid: false })
        })
}
const add_answer=(req,res) => {
    const id_problim=req.body.id_problim
    models.answer_table.findOne({ where: { id_problim: id_problim } }).then(
        result => {
            const ansewr={
                ansewr: req.body.ansewr,
                id_problim: result.id_problim
            }
            models.answer_table.create(ansewr).then(
                result=>{
                    return res.json({valid:true,result:result})
                }
            )
                .cach(
                    err => {
                        console.log(err)
                        return res.json({ valid: false })

                    }
                )
        }
    )
        .cach(
            err => {
                console.log(err)

                return res.json({ valid: false })
            }
        )
}