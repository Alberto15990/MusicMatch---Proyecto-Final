export const get = (client) => async (food,party,people_qty) => {
    try {
        const {data : response} = await client.get(`/playlists/?food=${food}&party=${party}&people_qty=${people_qty}`)
        console.info('> info data:', response )
        return response.data;
       
    } catch (error) {
        console.info('> info error:', error.message)
        return null
    }
}