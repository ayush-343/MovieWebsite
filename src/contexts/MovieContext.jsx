import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFaves = localStorage.getItem("favorites");
    if (storedFaves) {
      setFavorites(JSON.parse(storedFaves));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]); //only run when favorites change

  const addToFavorites = (movie) => {
    setFavorites((prevFaves) => [...prevFaves, movie]);
  };
  const removeFromFavorites = (movieId) => {
    setFavorites((prevFaves) => prevFaves.filter((fav) => fav.id !== movieId));
  };

  const isFavorite = (movieId) => {
    return favorites.some((movie) => movie.id === movieId);
  };

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };
  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
