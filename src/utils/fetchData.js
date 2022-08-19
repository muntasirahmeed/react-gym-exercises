export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
    "Content-Type": "text/html",
    "Retry-After": 3600,
  },
};
export const youtubeOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4150acd9c3mshc2d15e52c099101p1f12a3jsnef8c679aeb1e",
    "X-RapidAPI-Host": "youtube-search-and-download.p.rapidapi.com",
    "Content-Type": "text/html",
    "Retry-After": 3600,
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
