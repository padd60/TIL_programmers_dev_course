import axios from 'axios';
import { NextPageContext } from 'next';
import React from 'react';
import { Post } from '../../interfaces';

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context;
  const postId = query.id;
  try {
    const { data: post } = await axios.get(
      `http://localhost:3000/api/posts/${postId}`,
    );

    return {
      props: { post },
    };
  } catch (e) {
    if (axios.isAxiosError(e) && e.response?.status === 404) {
      return {
        notFound: true,
      };
    }

    return { props: {} };
  }
};

interface Props {
  post: Post;
}

const Posts = ({ post }: Props) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

export default Posts;
