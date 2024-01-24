import Post from "../../post/Post";
import "./posts.scss";

//Dummies posts
const posts = [
  {
    id: 1,
    name: "John Doe",
    userId: 1,
    profilePic:
      "https://images.pexels.com/photos/846741/pexels-photo-846741.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img: "https://images.pexels.com/photos/2174656/pexels-photo-2174656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus, illo itaque facilis optio ab quaerat?",
  },
  {
    id: 2,
    name: "Jane Doe",
    userId: 2,
    profilePic:
      "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    img: "https://images.pexels.com/photos/2087391/pexels-photo-2087391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    description:
      "Enim assumenda quidem quaerat ea labore nesciunt odio animi? Quod vel est nostrum? Distinctio, itaque!",
  },
];

const Posts = () => {
  return (
    <div className="posts">
      {posts.map((post) => (
        <Post post={post} key={post.id} />
      ))}
    </div>
  );
};

export default Posts;
