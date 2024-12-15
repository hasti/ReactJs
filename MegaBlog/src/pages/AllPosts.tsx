import { useState, useEffect } from 'react';
import { Container, PostCard } from '../components';
import appwriteService from "../appwrite/config";

interface Post {
  $id: string;
  title: string;
  featuredImage: string;
  content: string;
}

function AllPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  
  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) {
        setPosts(posts.documents.map((doc: any) => ({
          $id: doc.$id,
          title: doc.title,
          featuredImage: doc.featuredImage,
          content: doc.content,
        })));
      }
    });
  }, []);

  return (
    <div className='w-full py-8'>
      <Container>
        <div className='flex flex-wrap'>
          {posts.map((post) => (
            <div key={post.$id} className='p-2 w-1/4'>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;