import React from "react";

import useSWR from "swr";

import { fetcher } from "../../infrastructure";
import { IGuitar } from "../../models";
import { GuitarCard } from "../guitar-card";
import { useTranslation } from "next-i18next";

export interface ISearchResults {
  term: string;
}

export const SearchResults: React.FunctionComponent<ISearchResults> = (
  props
) => {
  const { t, i18n } = useTranslation();
  const { data } = useSWR("/api/catalog", fetcher);
  if (!data) return <>{t('Loading')}</>;

  const results: IGuitar[] = data.filter(
    (g: IGuitar) =>
      g.model.toLowerCase().includes(props.term.toLowerCase()) ||
      g.manufacturer.toLowerCase().includes(props.term.toLowerCase())
  );

  if (results.length <= 0) {
    return <h2>{t('Search.NoMatchesFound')} &quot;{props.term}&quot;</h2>;
  }

  return (
    <>
      <h2>{t('Search.SearchResults')}</h2>
      {results.map((g: IGuitar) => (
        <GuitarCard
          id={g.id}
          model={g.model}
          manufacturer={g.manufacturer}
          price={g.price}
          mainImage={
            g.mainImage ||
            "https://cdn.pixabay.com/photo/2017/01/31/23/08/classic-2028011_960_720.png"
          }
          key={g.id}
        />
      ))}
    </>
  );
};
