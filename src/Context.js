import React, {
  useState,
  useEffect,
  useContext,
  createContext,
  useCallback,
} from "react";

const url = "https://www.omdbapi.com/?apikey=4517819";
const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("batman");
  const [error, setError] = useState("");

  const fetchData = useCallback(async () => {
    try {
      const response = await fetch(`${url}&s=${search}`);
      const data = await response.json();

      if (data.Response === "True") {
        if (data.Search) {
          const newMovies = data.Search.map((movie) => {
            const { Poster, Title, Type, Year, imdbID } = movie;

            return {
              img: Poster,
              title: Title,
              type: Type,
              year: Year,
              id: imdbID,
            };
          });

          setMovies(newMovies);
        } else {
          setMovies([]);
        }
      } else {
        setError(data.Error);
      }
    } catch (error) {
      return console.log(error);
    }
  }, [search]);
  useEffect(() => {
    fetchData();
  }, [search]);

  return (
    <>
      <AppContext.Provider value={{ setSearch, movies, error }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { useGlobalContext, AppContext, AppProvider };
