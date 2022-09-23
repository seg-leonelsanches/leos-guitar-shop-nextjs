import React from 'react';

import useSWR from "swr"

import { fetcher } from "../../infrastructure"
import { IGuitar } from "../../models"
import { GuitarCard } from '../guitar-card';

export interface ISearchResults {
    term: string
}

export const SearchResults: React.FunctionComponent<ISearchResults> = (props) => {
    const { data } = useSWR('/api/catalog', fetcher)
    if (!data) return <>Loading...</>

    const results: IGuitar[] = data.filter(
        (g: IGuitar) => 
            g.model.toLowerCase().includes(props.term.toLowerCase()) || 
            g.manufacturer.toLowerCase().includes(props.term.toLowerCase()))

    if (results.length <= 0) {
        return <h2>No matches were found with term "{props.term}"</h2>
    }

    return <>
        <h2>Search Results</h2>
        {results.map((g: IGuitar) => (
            <GuitarCard id={g.id} model={g.model} manufacturer={g.manufacturer} price={g.price} mainImage={g.mainImage} key={g.id} />
        ))}
    </>
}
