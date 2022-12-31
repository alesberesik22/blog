import React from "react";
import PostCard from "../PostCard/PostCard";
import "./Featured.scss";

type post = {
  title: string;
  excerpt: string;
};

interface Props {
  posts: post[];
}

const Featured: React.FC<Props> = ({ posts }) => {
  return (
    <div className="featured">
      {posts.map((postElement: post, index: number) => (
        <div className="featured_element" key={index}>
          <PostCard excerpt={postElement.excerpt} title={postElement.title} />
        </div>
      ))}
    </div>
  );
};

export default Featured;
