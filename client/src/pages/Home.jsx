import { Link } from 'react-router-dom';
import CallToAction from '../components/CallToAction';
import { useEffect, useState } from 'react';
import PostCard from '../components/PostCard';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/post/getPosts');
      const data = await res.json();
      setPosts(data.posts);
    };
    fetchPosts();
  }, []);
  return (
    <div>
      <div className='flex flex-col gap-6 p-28 px-3 max-w-6xl mx-auto '>
        <h1 className='text-3xl font-bold lg:text-6xl'>Welcome to <span
          className="px-2 py- bg-gradient-to-r from-teal-400 
        to-lime-300
        rounded-lg"
          style={{ color: "black" }}
        >
        Spiritual tree
        </span> 
        </h1>
        <p className="text-2xl">
         A place to discover the spiritual side of things.
        </p>
        <div style={{"margin-top":"40px"}}>Here, you will find articles on a variety of topics like mind management, holistic health, karmayoga and bhakti. Hope you find them helpful. Happy reading!  : ) </div>
        <Link
          to='/search'
          className='text-xs sm:text-sm text-teal-500 font-bold hover:underline' style={{"margin-bottom":"60px"}}

        >
          View all posts
        </Link>
      </div>
      <div className='p-3 bg-amber-100 dark:bg-slate-700'>
        {/* <CallToAction /> */}
      </div>

      <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7'>
        {posts && posts.length > 0 && (
          <div className='flex flex-col gap-6'>
            <h2 className='text-2xl font-semibold text-center'>Recent Posts</h2>
            <div className='flex flex-wrap gap-4'>
              {posts.map((post) => (
                <PostCard key={post._id} post={post} />
              ))}
            </div>
            <Link
              to={'/search'}
              className='text-lg text-teal-500 hover:underline text-center'
            >
              View all posts
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}