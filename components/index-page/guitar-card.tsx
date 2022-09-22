import React from 'react'

import Link from 'next/link'

import { IGuitar } from '../../models'

export const GuitarCard = (props: IGuitar) => (
    <div className="col-sm-6 col-md-3 card bg-dark" style={{ width: "18rem" }}>
        <Link href={`/guitars/${props.id}`} className="btn btn-primary">
            <a>
                <img src={props.mainImage} className="card-img-top" alt="Guitar" />
                <div className="card-body">
                    <h5 className="card-title">{props.manufacturer}</h5>
                    <p className="card-text">{props.model}</p>
                </div>
            </a>
        </Link>
    </div>
)
