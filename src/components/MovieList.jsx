import React from 'react';

const MovieList = (props) => {
    return (
        <div className="card">
            <div className="card-body">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Episode</th>
                            <th scope="col">Title</th>
                            <th scope="col">Release Date</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { props.movieList.map((movie) =>
                            (
                                <tr key={movie.id}>
                                    <td>{movie.fields.episode_id}</td>
                                    <td>{movie.fields.title}</td>
                                    <td>{movie.fields.release_date}</td>
                                    <td><button type="button" id={movie.id} className="btn btn-info" onClick={props.onClickDetail}>View Detail</button></td>
                                </tr>
                            )
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default MovieList;