
import { addDoc, collection } from "firebase/firestore";
import {auth, db} from "../firebase/config";
import { useNavigate } from "react-router-dom";
const CreatePost = () => {
  const navigate = useNavigate();
  const postRef = collection(db,"posts");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const document = {
      title:e.target.title.value,
      description:e.target.description.value,
      author:{
        id:auth.currentUser.uid,
        name:auth.currentUser.displayName
      }
    };

    await addDoc(postRef, document);
    navigate("/");
  }

  return (
    <section className="create">
      <div className="heading">
        <h1>Add New Post</h1>
      </div>
      <form className="createPost" onSubmit={handleSubmit}>
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required />
        <textarea type="text" className="description" name="description" placeholder="Description" maxLength="600" required ></textarea>
        <button type="submit" className="submit">Create</button>
      </form>
  </section>
  )
}

export default CreatePost
