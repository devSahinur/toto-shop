import { HeartIcon as HeartIconFilled } from "@heroicons/react/solid";
import { ChatIcon, HeartIcon, ShareIcon } from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import moment from 'moment';

function BlogPost({ post }) {
  const { data: session } = useSession();

  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  return (
    <>
      <div className="col-span-2 border shadow rounded-md">
        {/* post caption */}
        <div className="py-6">
          <h3 className="text-lg p-5">{post.title}</h3>
        </div>
        {/* post image */}
        <Link href={`/blog/${post.slug}`}>
          <div className="mx-auto cursor-pointer flex items-center justify-center ">
            <Image
              src={post.postImage}
              width={500}
              height={400}
              className="min-w-[600px] object-contain mx-auto"
            />
          </div>
        </Link>
        {/* fotter */}
        <div className="py-4 border-t">
          {/* fotter left */}
          <div className="flex items-center px-4 justify-between">
            <div className="flex items-center space-x-3">
              <img
                className="w-10 h-10 rounded-full object-cover"
                src={post.userImage}
                alt=""
              />
              <div className="flex flex-col">
                <h4 className="text-base font-medium">{post.userName}</h4>
                <p className="text-sm text-gray-700">about 6 hour ago</p>
              </div>
            </div>
            {/* right */}
            <div className="flex items-center space-x-4">
              {/* like */}
              <div className="flex cursor-pointer items-center space-x-1">
                <HeartIcon className="h-6 text-primary" />
                {/* <span>{post.like.length}</span> */}
              </div>
              {/* comment */}
              <div className="flex cursor-pointer items-center space-x-1">
                <ChatIcon className="h-6 text-primary" />
                {/* <span>{post.comment.length}</span> */}
              </div>

              {/* shere */}
              <div className="flex cursor-pointer items-center space-x-1">
                <ShareIcon className="h-6 text-primary" />
                <span>0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogPost;
