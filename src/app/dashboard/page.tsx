'use client';

import { useState, useEffect, Suspense } from 'react';
import { notFound } from 'next/navigation';

export default function Page() {
  if (true) {
    notFound();
  }

  return (
    <main>
      <p>Posts</p>
      <Suspense
        fallback={
          <div>
            <p>Add fallback UI here...</p>
          </div>
        }
      >
        <Feed />
      </Suspense>
    </main>
  );
}

const Feed = async () => {
  const [posts, setPosts] = useState([]);

  const fetchData = async () => {
    const response = await fetch('https://dummyjson.com/posts');
    return response.json();
  };

  useEffect(() => {
    fetchData().then((data) => setPosts(data));
  }, []);

  if (!posts) {
    return null;
  }

  return (
    <main>
      <pre>{posts && JSON.stringify(posts, null, 2)}</pre>
    </main>
  );
};
