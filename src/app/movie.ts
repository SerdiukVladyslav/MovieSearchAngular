export class Movie
{
    Title: string;
    Year: string;
    Rated: string;
    Runtime: string;
    Director: string;
    Actors: string;
    Plot: string;
    Poster: string;

    constructor(Title: string, Year: string, Rated: string, Runtime: string, Director: string, Actors: string, Plot: string, Poster: string)
    {
        this.Title = Title;
        this.Year = Year;
        this.Rated = Rated;
        this.Runtime = Runtime;
        this.Director = Director;
        this.Actors = Actors;
        this.Plot = Plot;
        this.Poster = Poster;
    }
}
