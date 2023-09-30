import React, { useEffect, useState } from 'react';

const tabs = ['posts', 'comments', 'albums'];
function App() {
  const [title, setTitle] = useState('');
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState('posts');
  useEffect(() => {
    document.title = title;
  });
  useEffect(() => {
    // fetch(`https://jsonplaceholder.typicode.com/${type}`)
    //   .then((res) => res.json())
    //   .then((posts) => {
    //     setPosts(posts);
    //   });
    const fetchApi = async () => {
      const results = await fetch(
        `https://6516e61d09e3260018ca7474.mockapi.io/api/v1/products`
      );
      const posts = await results.json();
      setPosts(posts);
    };
    fetchApi();
  }, [type]);
  return (
    <div>
      {tabs.map((tab) => (
        <button
          style={
            type === tab
              ? {
                  color: '#fff',
                  backgroundColor: '#333',
                }
              : {}
          }
          onClick={() => setType(tab)}
          key={tab}
        >
          {tab}
        </button>
      ))}
      <input value={title} onChange={(e) => setTitle(e.target.value)} />
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
