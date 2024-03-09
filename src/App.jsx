import {
  useGetPostByIdQuery,
  useGetPostsQuery,
  useSetNewPostMutation,
} from "./Redux/Features/api/baseApi";

function App() {
  const { data: posts } = useGetPostsQuery(); // Reaurn An object
  const { data: post,isLoading } = useGetPostByIdQuery(2);
  // console.log(posts);
  const [setPost,{data}]=useSetNewPostMutation()
console.log(data)
  const handleSubmit =()=>{
    setPost({
      title: 'Sohag Name',
      body:'SOhag , SHohel, Salma',
      userId:3256
    })
  }
  if (isLoading) {
    return <p className="text-9xl text-center my-20 font-bold">Loading</p>
  }
  return (
    <>
    <button onClick={handleSubmit} className="bg-gray-700 text-white px-5 py-2 text-center">Set Post</button>
      <div className=" my-10 flex flex-col  justify-center items-center">
        <div
          key={post.id}
          className="bg-gray-700 text-white rounded-xl p-5 space-y-4 max-w-[600px] mb-5">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <hr />
          <p>{post.body}</p>
        </div>
        {/* {
          posts?.map (post => <div key={post.id} className="bg-gray-700 text-white rounded-xl p-5 space-y-4 max-w-[600px] mb-5">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <hr />
            <p>
              {post.body}
            </p>
          </div>)
        } */}
      </div>
    </>
  );
}

export default App;
