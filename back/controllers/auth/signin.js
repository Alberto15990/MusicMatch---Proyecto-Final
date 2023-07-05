const errors = require("../../misc/errors")
const { selectUser } = require('../../models/auth')
const { hash, serialize } = require('simple-stateless-auth-library')

module.exports = (db) => async (req,res,next) => {

    const {email,password} = req.body

    if(!email || !password) return next (errors[400])

    const response = await selectUser(await db)(email, hash.compare(password))

    if(!response.ok) return next (errors [response.error_code || 500])

        console.log(response)
    serialize(res,response.content , {value: 15 , type: 'd' }) 
    
    res.status(200).json({
        success: true,
    })
}