function getUserData() {
    let username = prompt("Enter your username:");
    let age = prompt("Enter your age:");
    
    let movies = prompt("Enter your favorite movies (separated by commas):");

    let favoriteMovies = movies.split(',').map(movie => movie.trim());

    console.log(`Username: ${username}`);
    console.log(`Age: ${age}`);
    console.log("Favorite Movies:");

    favoriteMovies.forEach(movie => {
        console.log(`The film "${movie}" is one of my favorites.`);
    });
}

getUserData();