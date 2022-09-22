import useSWR from "swr"

import { fetcher } from "../../infrastructure"
import { IGuitar } from "../../models"
import { GuitarCard } from "./guitar-card"

export const GuitarCatalog: React.FunctionComponent = () => {
    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const guitarCatalog: IGuitar[] = data
    return <>{guitarCatalog.map((g: IGuitar) => (
        <GuitarCard id={g.id} model={g.model} manufacturer={g.manufacturer} price={g.price} mainImage={g.mainImage} key={g.id} />
    ))}</>
}
