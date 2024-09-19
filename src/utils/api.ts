export function fetchNews(): Promise<any> {
  return fetch("https://api.example.com/news").then((response) =>
    response.json()
  );
}

export function fetchNewsByQuery(query: string): Promise<any> {
  return fetch("https://api.example.com/news?search=" + query).then(
    (response) => response.json()
  );
}
