import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

//Dummies comments
const comments = [
  {
    id: 1,
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
    name: "John Doe",
    userId: 1,
    profilePic:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    description:
      "Labore, beatae. Nostrum ullam commodi aspernatur ad deleniti repellat maxime, exercitationem iure dolor a. Omnis corporis pariatur ut, laboriosam at atque consequatur!",
    name: "Jane Doe",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const Comments = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="comments">
      <div className="write">
        <img src={currentUser.profilePic} alt="" />
        <input type="text" placeholder="Write your comment." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePic} alt="" />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.description}</p>
          </div>
          <span className="date">1 hour ago</span>
        </div>
      ))}
    </div>
  );
};

export default Comments;
