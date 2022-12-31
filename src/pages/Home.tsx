import React from "react";
import Categories from "../components/Categories/Categories";
import Featured from "../components/Featured/Featured";
import Posts from "../components/Posts/Posts";
import RecentPosts from "../components/RecentPosts/RecentPosts";
import "./Home.scss";

const TestPosts = [
  { title: "React testing", excerpt: "Learn React testing" },
  { title: "React GraphQL", excerpt: "Learn React with GraphQL" },
];

const Home = () => {
  return (
    <div className="home">
      <Featured posts={TestPosts} />
      <div className="home_data">
        <div className="home_data_center">
          <Posts />
        </div>
        <div className="home_data_right">
          <RecentPosts />
          <Categories />
        </div>
      </div>
    </div>
  );
};

export default Home;
