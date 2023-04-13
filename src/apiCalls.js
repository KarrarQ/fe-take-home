const apiKey = 'ybisF2CGGDEAJBCUhCzPdJMIdJoBGGDo';
const baseUrl = 'https://api.nytimes.com/svc/topstories/v2/home.json?api-key=';

const checkError = (res) => {
  if (!res.ok) {
    throw new Error(`${res.status}`);
  }
  return res.json();
}

export const getArticles= () => {
  return fetch(`${baseUrl}${apiKey}`)
    .then(response => checkError(response))
}