class Movie {
    constructor(title, studio, rating = "PG") {
        this.title = title;
        this.studio = studio;
        this.rating = rating;
    }

    static getPG(movies) {
        return movies.filter(movie => movie.rating === "PG");
    }
}

// Creating an instance of the Movie class
const casinoRoyale = new Movie("Casino Royale", "Eon Productions", "PG-13");

// Example usage of getPG method
const movies = [
    new Movie("toystory", "disnep", "PG"),
    new Movie("avengers", "marvel", "PG-13"),
    new Movie("avatar", "20th century studios", "R"),
];
const pgMovies = Movie.getPG(movies);
console.log(pgMovies);
