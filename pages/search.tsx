import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router';
import { SearchResults } from '../components/search/search-results';

const Search: NextPage = () => {
    const router = useRouter()
  
    return <>
        <Head>
            <title>Search - Leo's Guitar Shop</title>
        </Head>
        <div className='container'>
            <div className='row'>
                <SearchResults term={String(router.query.term)} />
            </div>
        </div>
    </>
}

export default Search
