import Image from "next/image";
import { ChatIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
function BlogPost({
  id,
  caption,
  avatar,
  username,
  time,
  like,
  commment,
  shere,
  photo,
}) {
  return (
    <div className="px-3 py-4 border shadow rounded-md">
      {/* post caption */}
      <div className="py-6">
        <h3 className="text-lg">{caption}</h3>
      </div>
      {/* post image */}
      <div classname="">
        <Image
          src={photo}
          width={600}
          height={400}
          className="min-w-[600px] object-contain mx-auto"
        />
      </div>
      {/* fotter */}
      <div className="py-4 border-t">
        {/* fotter left */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img
              className="w-10 h-10 rounded-full object-cover"
              src={avatar}
              alt=""
            />
            <div className="flex flex-col">
              <h4 className="text-base font-medium">{username}</h4>
              <p className="text-sm text-gray-700">{time}</p>
            </div>
          </div>
          {/* right */}
          <div className="flex items-center space-x-4">
            {/* like */}
            <div className="flex items-center space-x-1">
              <HeartIcon className="h-6 text-primary" />
              <span>{like}</span>
            </div>
            {/* comment */}
            <div className="flex items-center space-x-1">
              <ChatIcon className="h-6 text-primary" />
              <span>{commment}</span>
            </div>

            {/* shere */}
            <div className="flex items-center space-x-1">
              <ShareIcon className="h-6 text-primary" />
              <span>{shere}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;
