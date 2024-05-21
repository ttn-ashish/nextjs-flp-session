'use client';

import React, { useEffect, useState } from 'react';
import BlogsCards from "@/components/Card";

const BlogPage = () => {
  const [responseData, setApiData] = useState(null);

  useEffect(() => {
    fetchDataFromApi();
  }, []);

  const fetchDataFromApi = async () => {
    try {
      const response = await fetch("https://dummyapi.online/api/blogposts");
      const data = await response.json();
      setApiData(data);
    } catch {
      console.log("Something went wrong");
    }
  };
  return (
    <>
      <div className="font-semibold text-center pb-8">
        <span className="text-center border-black border-b-2 pb-2">Blogs </span>
      </div>
      {responseData && (
        <div className="mb-[5rem]">
          <BlogsCards blogData={responseData} />
        </div>
      )}
    </>
  );
}

export default BlogPage;