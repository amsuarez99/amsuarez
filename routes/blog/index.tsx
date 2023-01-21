import { Handlers } from "$fresh/server.ts";
import MainLayout from "@/components/layout.tsx";
import Head from "@/components/head.tsx";
import { type Post } from "@/utils/types.ts";
import { walk } from "https://deno.land/std@0.150.0/fs/walk.ts";

import * as matter from "https://esm.sh/gray-matter@^4.0.3";

const colorsMap = ["red", "gray", "yellow", "green"];

type PostMetadata = Pick<Post, "id" | "title" | "tags">;
export const handler: Handlers = {
  async GET(req, ctx) {
    console.log("hello world");

    const postsMetadata: PostMetadata[] = [];

    for await (
      const postFile of walk(
        "/Users/amsuarez/dev/sandbox/my-project/content/posts",
        { exts: ["md"] },
      )
    ) {
      const { data } = matter.read(postFile.path);
      postsMetadata.push(data as PostMetadata);
    }

    console.log(postsMetadata);

    return ctx.render({ postsMetadata });
  },
};

function Banner() {
  return (
    <div className="font-light text-center text-2xl mb-7">
      <h1 className="text-7xl font-bold mb-7">
        Blog
      </h1>
      Check what I've been up to and learning
    </div>
  );
}

type Props = {
  post: Post;
};

function Post({ post }: Props) {
  return (
    <div class="col-span-4 mb-7 relative">
      <span className="absolute z-10 right-3 top-3 text-white flex flex-col items-end gap-2">
        {post.tags.map((tag, idx) => (
          <div
            className={`group bg-${
              colorsMap[idx]
            }-900 w-6 rounded-full hover:(w-full px-7) transition-all overflow-ellipsis overflow-hidden ease-in-out`}
          >
            <p className="opacity-0 text-lg group-hover:opacity-100 transition-all">
              {tag}
            </p>
          </div>
        ))}
      </span>
      <img
        src="/logo.svg"
        className="object-center object-cover w-full bg-blue-300 mb-2 rounded-md relative"
      >
      </img>
      <div className="text-2xl uppercase font-semibold text-gray-600">
        {post.title}
      </div>
    </div>
  );
}

const posts: Post[] = [{
  id: "1",
  title: "how to get rich quick",
  description: "this is a test blogPost",
  tags: ["test", "test2", "test3"],
}, {
  id: "1",
  title: "how to get rich quick",
  description: "this is a test blogPost",
  tags: ["test"],
}, {
  id: "1",
  title: "how to get rich quick",
  description: "this is a test blogPost",
  tags: ["test"],
}, {
  id: "1",
  title: "how to get rich quick",
  description: "this is a test blogPost",
  tags: ["test"],
}];

export default function BlogHome() {
  return (
    <>
      <Head title="Blog" />
      <MainLayout active="/blog">
        <Banner />
        <div className="mx-[10vw]">
          <div className="grid grid-cols-4 gap-x-4 md:grid-cols-8 lg:grid-cols-12 lg:gap-x-6">
            {posts.map((post) => {
              return <Post post={post} />;
            })}
          </div>
        </div>
      </MainLayout>
    </>
  );
}
