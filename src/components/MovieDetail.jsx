import React from 'react';

const MovieDetail = (movieDetailList) => {
    return (
        Object.values(movieDetailList).map((item) => {
            return item.map(t => {
                return (
                    <div className="card" key={t.id}>
                        <div className="card-header">
                            <span className="bold">Movie description</span>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{ t.fields.title }</h5>
                            <p className="card-text">{ t.fields.opening_crawl }</p>
                            <p>Director: { t.fields.director }</p>
                            <p>Producer: { t.fields.producer }</p>
                            <p>Release Date: { t.fields.release_date }</p>
                        </div>
                    </div>
                )
            })
        })
    )
}

export default MovieDetail;