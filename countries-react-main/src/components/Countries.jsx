import { useEffect, useState } from "react";
import getData from "../utils/get-data";
import { CardDefault } from "./CardDefault";

export default function Countries() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    getData("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res))
      .catch(({ error }) => {
        console.error(error);
      });
  }, []);
  return (
    <ul className="grid grid-cols-3 gap-8">
      {countries.map((country) => {
        return <CardDefault info={country} />;
      })}
    </ul>
  );
}
