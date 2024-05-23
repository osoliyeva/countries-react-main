export default async function getData(url) {
  const request = await fetch(url);
  const response = await request.json();
  return response;
}
