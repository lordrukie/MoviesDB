const baseUrl = "https://api.themoviedb.org/3/"
const apiKey = "?api_key=29bb5474c6516bf073d41584ccdd7393"
const page = "&page=1"
const baseImgUrl = "http://image.tmdb.org/t/p/w185/"
const videoUrl = "https://www.youtube.com/watch/?v="
//yang ini list popular movie
$.getJSON(`${baseUrl}movie/popular${apiKey}${page}`, movie => {
	const movieList = movie.results;
	$.each(movieList, function(i, List) {
		$.getJSON(`${baseUrl}movie/${List.id}/videos${apiKey}`, trailer => {
			let idTrailer
			if (trailer.results.length > 0) {
				const hasilTraier = trailer.results[0].key
				idTrailer = videoUrl + hasilTraier
				$('#popular').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
                    <a href="${idTrailer}">
                    <img  src="${baseImgUrl}${List.poster_path}"  alt="Movie Poster"></a>
                    <div class="card-body autoPad bg-secondary text-light" ;">
                        <h5 class="card-title tebal">${List.title}</h5>
                        <p class="card-title tipis">${List.release_date}
                    </div>
                    </div>
                    </div>
                    `)
			} else {
				$('#popular').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
                    
                    <a  onClick="alert('Trailer Not Available At This Moment')"> 
                    <img  src="${baseImgUrl}${List.poster_path}"  alt="Movie Poster"></a>
                    <div class="card-body autoPad bg-secondary text-light" ;">
                        <h5 class="card-title tebal">${List.title}</h5>
                        <p class="card-title tipis">${List.release_date}
                    </div>
                    </div>
                    </div>
                    `)
			}
		})
	})
})
//yang ini list top rating movie
$.getJSON(`${baseUrl}movie/top_rated${apiKey}${page}`, movie => {
	const movieList = movie.results;
	$.each(movieList, function(i, List) {
		$.getJSON(`${baseUrl}movie/${List.id}/videos${apiKey}`,trailer => {
			let idTrailer
			if (trailer.results.length > 0) {
				const hasilTraier = trailer.results[0].key
				idTrailer = videoUrl + hasilTraier
				$('#topRated').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
                    <a href="${idTrailer}">
                    <img  src="${baseImgUrl}${List.poster_path}"  alt="Movie Poster"></a>
                    <div class="card-body autoPad bg-secondary text-light" ;">
                        <h5 class="card-title tebal">${List.title}</h5>
                        <p class="card-title tipis">${List.release_date}
                    </div>
                    </div>
                    </div>
                    `)
			} else {
				$('#topRated').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
                    
                    <a  onClick="alert('Trailer Not Available At This Moment')"> 
                    <img  src="${baseImgUrl}${List.poster_path}"  alt="Movie Poster"></a>
                    <div class="card-body autoPad bg-secondary text-light" ;">
                        <h5 class="card-title tebal">${List.title}</h5>
                        <p class="card-title tipis">${List.release_date}
                    </div>
                    </div>
                    </div>
                    `)
			}
		})
	})
})
// yang ini list upcoming movie
$.getJSON(`${baseUrl}movie/upcoming${apiKey}${page}`, movie => {
	const movieList = movie.results;
	$.each(movieList, function(i, List) {
		$.getJSON(`${baseUrl}movie/${List.id}/videos${apiKey}`, trailer => {
			let idTrailer
			if (trailer.results.length > 0) {
				const hasilTraier = trailer.results[0].key
				idTrailer = videoUrl + hasilTraier
				$('#upComing').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
                    <a href="${idTrailer}">
                    <img  src="${baseImgUrl}${List.poster_path}"  alt="Movie Poster"></a>
                    <div class="card-body autoPad bg-secondary text-light" ;">
                        <h5 class="card-title tebal">${List.title}</h5>
                        <p class="card-title tipis">${List.release_date}
                    </div>
                    </div>
                    </div>
                    `)
			} else {
				$('#upComing').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
                    
                    <a  onClick="alert('Trailer Not Available At This Moment')"> 
                    <img  src="${baseImgUrl}${List.poster_path}"  alt="Movie Poster"></a>
                    <div class="card-body autoPad bg-secondary text-light" ;">
                        <h5 class="card-title tebal">${List.title}</h5>
                        <p class="card-title tipis">${List.release_date}
                    </div>
                    </div>
                    </div>
                    `)
			}
		})
	})
})