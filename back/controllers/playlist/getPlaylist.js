const {sql} = require ('slonik')
const db = require ('../../configs/db')

const getPlaylist = async (req, res) => {
    
    try {
        const connection = await db;

        const food = req.query.food; 
        const party = req.query.party; 
        const people_qty = req.query.people_qty;
    
        const result = await connection.query(sql.unsafe`
        SELECT playlist_id FROM playlists
        WHERE food = ${food} 
        AND party = ${party}
        AND people_qty = ${people_qty}
            `)
    
            res.status(200).json({
                status: "ok",
                data: result.rows,
            })
    } catch (error) {
        res.status(500) //Preguntar porque no me lanza el error
    }
  
}

module.exports = {
    getPlaylist,
}