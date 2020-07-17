const baseUrl1 = "https://api.themoviedb.org/3/";
const apiKey1 = "?api_key=29bb5474c6516bf073d41584ccdd7393";
const page1 = "&page=1"
const noAdult = "include_adult=false"
const baseImgUrl = "http://image.tmdb.org/t/p/w185/"
const videoUrl = "https://www.youtube.com/watch/?v="
$('#submit').click(e => {
	e.preventDefault();
	cari();
})

function cari() {
	const title = $("#cari").val();
	if (title === "") {
		$('#pencarian').empty();
	}
	$('#pencarian').empty();
	//pengambilan data
	$.getJSON(`${baseUrl1}search/movie${apiKey1}&query=${title}${page1}${noAdult}`, movie => {
		const movieList = movie.results;
		if (movieList === "") {
			$('#pencarian').append(`<h1>${title} is not found</h1>`)
		} else {
			$('#pencarian').append(`<h1>Search result for ${title}</h1>`)
		}
		$('#searchList').empty();
		$.each(movieList, function(i, List) {
			$.getJSON(`${baseUrl1}movie/${List.id}/videos${apiKey1}`, trailer => {
				let idTrailer
				if (trailer.results.length > 0) {
					const hasilTraier = trailer.results[0].key
					idTrailer = videoUrl + hasilTraier
					$('#searchList').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
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
					$('#searchList').append(`<div class="col-xl-2 6 col-mb-3 mt-3 "><div class="card">
                    

                    <a onClick="alert('Trailer Not Available At This Moment')"> 
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
}