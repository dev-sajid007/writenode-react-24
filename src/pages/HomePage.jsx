import { useState, useRef } from "react";
import PostCard from "../components/PostCard";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import {db} from '../firebase/config';
import SkeletonCard from "../components/SkeletonCard";

const HomePage = () => {

  const [posts,setPosts] = useState(new Array(3).fill(false));
  const [toggle,setToggle] = useState(false);
  const postsRef = useRef(collection(db,'posts'));

  useEffect(() => {
    async function getPosts(){
      const data = await getDocs(postsRef.current);
      const document = data.docs.map((document) => ({...document.data(),id:document.id}));
      setPosts(document);
    } 
    getPosts();
  },[postsRef, toggle]);

  return (
    <div>
      {posts.map((post) => (
        post ? (
          <PostCard key={post.id} post={post} toggle={toggle} setToggle={setToggle} />
        ) : (
          <SkeletonCard />
        )
      ))}
    </div>
  )
}

export default HomePage;
