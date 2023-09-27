import { useEffect, useState, useLayoutEffect } from "react";
import EnhancedTable from "./components/EnhancedTable";
import { useLoaderData } from "react-router-dom";
import "./HomePage.css"

const url = "https://rickandmortyapi.com/api/character";

export default function HomePage() {

  const [results, setResults] = useState([])
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(20);
  const [filteredName, setFilteredName] = useState("");
  const [totalNumberOfResults, setTotaNumberOfResults] = useState(0)

  useEffect(() => {

    async function getCharacters() {
      return await fetch(url + "/?name=" + filteredName + "&page=" + (page + 1))
        .then((response) => {
          if (!response.ok) {
            throw new Error("Hiba a kérés során");
          }
          
          return response.json();
        })
        .then((data) => {
          setTotaNumberOfResults(data.info.count)
          setResults(data.results)
        })
        .catch((error) => {
          console.error("Hiba történt:", error);
        });
    }
    getCharacters()
  }, [filteredName, page])

  return (
    <div className="homePageContainer">
      <EnhancedTable rows={results} page={page} rowsPerPage={rowsPerPage} setPage={(value) => setPage(value)} filterTable={(value) => setFilteredName(value)} totalNumberOfResults={totalNumberOfResults} />
    </div>
  );
}
