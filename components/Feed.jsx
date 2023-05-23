"use client";

import { useState, useEffect } from "react";

import PromptCardList from "./PromptCardList";

const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("/api/prompt");
      const data = await response.json();

      setAllPosts(data);
    };
    fetchPosts();
  }, []);

    const handleSearchChange = (e) => {
      console.log(e)
    };


  const handleTagClick = (tagName) => {
  console.log(tagName)
  };

  return (
    <section className="feed">
      <form className="flex-center relative w-full">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

        <PromptCardList data={allPosts} handleTagClick={handleTagClick} />
   
    </section>
  );
};

export default Feed;
