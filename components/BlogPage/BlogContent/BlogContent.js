import BlogPost from "../BlogPost/BlogPost";

const post = [
  {
    id: 1,
    caption: "Thanks Faysal Mridha",
    photo: "https://i.ibb.co/827zNs3/team-1.jpg",
    username: "Alex Harry",
    time: "about 6 hour ago",
    like: 20,
    commment: 84,
    shere: 10,
    avatar: "https://i.ibb.co/cyzVF61/about-img-2.jpg",
  },
  {
    id: 2,
    caption: "Thanks Evaly",
    avatar: "https://i.ibb.co/827zNs3/team-1.jpg",
    username: "Alex Harry",
    time: "about 6 hour ago",
    like: 20,
    commment: 84,
    shere: 10,
    photo: "https://i.ibb.co/cyzVF61/about-img-2.jpg",
  },
  {
    id: 3,
    caption: "Thanks Daraz.com",
    avatar: "https://i.ibb.co/827zNs3/team-1.jpg",
    username: "Alex Harry",
    time: "about 6 hour ago",
    like: 20,
    commment: 84,
    shere: 10,
    photo: "https://i.ibb.co/cyzVF61/about-img-2.jpg",
  },
];

function BlogContent() {
  return (
    <div className="flex-grow">
      {/* render the view */}
      <div className="max-w[400px] mx-auto">
        <div className="space-y-5">
          {/* post */}
          {post?.map(
            ({
              id,
              caption,
              avatar,
              username,
              time,
              like,
              commment,
              shere,
              photo,
            }) => (
              <BlogPost
                key={id}
                id={id}
                caption={caption}
                avatar={avatar}
                username={username}
                time={time}
                like={like}
                commment={commment}
                shere={shere}
                photo={photo}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
