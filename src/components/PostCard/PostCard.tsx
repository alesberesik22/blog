import React from "react";
import "./PostCard.scss";

interface props {
  title: string;
  excerpt: string;
}

const PostCard: React.FC<props> = ({ excerpt, title }) => {
  return (
    <div className="postCard">
      <h1>{title}</h1>
      <p>{excerpt}</p>
    </div>
  );
};

export default PostCard;
