import React from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { SearchForm } from './search'

export const Header = () => (
  <header>
    <div className='container my-5'>
      <div className='row'>
        <div className='col f-left'>
          <Link href="/">
            <a>
              <Image className="m-auto" src="/logo.png" alt="Leo's Guitar Shop" width={502} height={55} />
            </a>
          </Link>
        </div>
        <div className='col f-right'>
          <SearchForm />
        </div>
      </div>
    </div>
  </header>
)
