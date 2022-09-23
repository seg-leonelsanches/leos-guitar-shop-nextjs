import useSWR from "swr"

import { fetcher } from "../../infrastructure"
import { IGuitar } from "../../models"
import { GuitarCard } from "../guitar-card"

export const GuitarCatalog: React.FunctionComponent = () => {
    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const guitarCatalog: IGuitar[] = data
    return <>{guitarCatalog.map((g: IGuitar) => (
        <GuitarCard 
            id={g.id} 
            model={g.model} 
            manufacturer={g.manufacturer} 
            price={g.price} 
            mainImage={g.mainImage  || 'https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png'} 
            key={g.id} />
    ))}</>
}
