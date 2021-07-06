import React, { useEffect, useState } from "react";
import { Page, CardList, Tile } from "../components";

const HomePage = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredCardListData, setFilteredCardListData] = useState([]);
  const [cardListData, setCardListData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  const fetchData = async () => {
    const fetchImages = async () => {
      try {
        const res = await fetch(
          // "https://api.pexels.com/v1/search?query=people&per_page=20",
          "https://api.pexels.com/v1/curated?per_page=20&page=4",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `${process.env.REACT_APP_API_KEY}`,
            },
          }
        );
        const dataSet = await res.json();
        setNextPage(dataSet.next_page);
        setPrevPage(dataSet.prev_page);
        return dataSet.photos;
      } catch (e) {
        console.error(e);
      }
    };

    const mockData = await fetchImages();
    return mockData;
  };

  const fetchPage = async (pageLink) => {
    try {
      const res = await fetch(pageLink, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${process.env.REACT_APP_API_KEY}`,
        },
      });
      const dataSet = await res.json();
      setNextPage(dataSet.next_page);
      setPrevPage(dataSet.prev_page);
      setCardListData(dataSet.photos);
      setFilteredCardListData(dataSet.photos);
      setSearchText("");
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(async () => {
    let mockData;
    if (cardListData.length === 0) {
      setIsLoading(true);
      mockData = await fetchData();
      setIsLoading(false);
      setCardListData(mockData);
    } else {
      mockData = cardListData;
    }
    if (searchText === "") setFilteredCardListData(mockData);
    else {
      setFilteredCardListData(
        mockData.filter((card) =>
          card.photographer.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  if (isLoading) return <div id="empty-page">Page is loading...</div>;
  return (
    <Page>
      <div className="header">
        <div className="header-row">
          <div className="tiles">
            <Tile name="People" />
            <Tile name="Dog" />
          </div>
          <div id="input-search">
            <input
              id="search"
              placeholder="search"
              onChange={(e) => setSearchText(e.target.value)}
              value={searchText}
            />
            <span className="delete-icon" onClick={(e) => setSearchText("")}>
              X
            </span>
          </div>
        </div>
      </div>
      {filteredCardListData.length != 0 ? (
        <ol id="row">
          <CardList cards={filteredCardListData} />
        </ol>
      ) : (
        <div id="empty-page">Oooppss...There is nothing here.</div>
      )}
      <div id="footer">
        <button
          className="prev-page-btn"
          onClick={() => {
            window.scrollTo(0, 0);
            fetchPage(prevPage);
          }}
        >
          Previous
        </button>
        <button
          className="next-page-btn"
          onClick={() => {
            window.scrollTo(0, 0);
            fetchPage(nextPage);
          }}
        >
          Next
        </button>
      </div>
    </Page>
  );
};

export default HomePage;
