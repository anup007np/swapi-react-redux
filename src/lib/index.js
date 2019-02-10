export const getFilteredMovieList = (sortKey, movies, searchText) => {
    var updatedMovieList = movies;
    if(searchText){
        updatedMovieList = movies.filter((item => item.fields.title.toLowerCase().search(searchText.toLowerCase()) !== -1));
    }

    if (sortKey === 'year') {
        return updatedMovieList.sort((a, b) => new Date(a.fields.release_date) - new Date(b.fields.release_date));
      } else if (sortKey === 'episode') {
        return updatedMovieList.sort((a, b) => a.fields.episode_id - b.fields.episode_id);
      } else {
        return updatedMovieList;
      }
}

export const getMovieDetail = (movieId, movies) => {
    return movies.filter(x => x.id === Number(movieId));
}