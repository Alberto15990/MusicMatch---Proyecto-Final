import { useQuery } from "react-query"
import { playlist } from "../services"

export const usePlaylist = (food,party,people_qty) =>{

    const { data, isLoading } = useQuery({
        queryKey: ['playlist'],
        queryFn: playlist.get(food,party,people_qty)
    })

    return { data , isLoading}
}