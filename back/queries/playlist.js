const db = require('../configs/db')
const { sql } = require('slonik')

const food = 'american'
const party = 'c'
const people_qty= 2


const getPlaylist = async() => {
    const pool = await db
    return  pool.query(sql.unsafe`
    SELECT playlist_id FROM playlists
    WHERE food = ${food} 
    AND party = ${party}
    AND people_qty = ${people_qty}
`);
}

const main = async () =>{
   const playlist = await getPlaylist();
    console.log(playlist)
}

main();