import axios from 'axios';
import Link from 'next/link';
import { Post } from '../interfaces';

export const getServerSideProps = async () => {
  const { data: posts } = await axios.get('http://localhost:3000/api/posts');

  return {
    props: { posts },
  };
};

type Props = {
  posts: Post[];
  test: number;
};

const Home = ({ posts, test }: Props) => {
  console.log(test);
  return (
    <div>
      Home
      <ul>
        {posts.map((post) => (
          <Link
            href={'/posts/[id]'}
            as={`/posts/${post.id}`}
            key={post.id}
            passHref
          >
            <a>
              <li>{post.title}</li>
            </a>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Home;
