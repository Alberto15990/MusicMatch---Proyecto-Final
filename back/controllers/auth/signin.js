const errors = require("../../misc/errors")
const { selectUser } = require('../../models/auth')


module.exports = (db) => async (req,res,next) => {

    const {email,password} = req.body

    if(!email || !password) return next (errors[400])

    await selectUser(await db)(email)

    res.status(200).json({
        success: true,
    })
}