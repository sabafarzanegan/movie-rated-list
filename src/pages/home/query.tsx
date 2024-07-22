export const fetchMovies = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMTU3NjMzOS42MTc1MjIsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g9jtptwl_rbbXmDPpzskB8YYh-50vw2tj9bMMwzadFA",
        },
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchTv = async () => {
  try {
    const res = await fetch(
      "https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",
      {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDZjZmQzOWM2NWNjODI4ODY2ODhmYjgwZjUwM2M5ZiIsIm5iZiI6MTcyMTU3NjMzOS42MTc1MjIsInN1YiI6IjY2MjNjMGE5YWY5NTkwMDE2NDY3Mjk0NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.g9jtptwl_rbbXmDPpzskB8YYh-50vw2tj9bMMwzadFA",
        },
      }
    );
    const data = await res.json();
    if (res.status === 200) {
      console.log(data);
      return data;
    }
  } catch (error) {
    console.log(error);
  }
};
