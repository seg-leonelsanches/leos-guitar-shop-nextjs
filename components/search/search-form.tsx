import React from 'react'
import { useTranslation } from 'next-i18next';

export const SearchForm: React.FunctionComponent = () => {
    const { t, i18n } = useTranslation();

    return <form method='GET' action='/search'>
        <div className="input-group mb-3">
            <input type="text" id="term" name="term" className="form-control" placeholder={t('Search.SearchTheStore')} aria-label={t('Search.SearchTheStore')} aria-describedby="search-button" />
            <button className="btn btn-dark" type="submit" id="search-button">
                <i className="bi bi-search"> </i>
                {t('Search.SearchButton')}
            </button>
        </div>
    </form>
};
