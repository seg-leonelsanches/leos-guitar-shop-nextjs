import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

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
            <div className="input-group mb-3">
              <input type="text" className="form-control" placeholder="Search the store" aria-label="Search the store" aria-describedby="button-addon2" />
              <button className="btn btn-dark" type="button" id="search-button">
                <i className="bi bi-search"> </i>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
)
