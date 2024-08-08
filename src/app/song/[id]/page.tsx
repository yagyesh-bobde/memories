import { songData } from "@/components/component";
import { ArrowDown, ArrowUp, ArrowUpNarrowWideIcon, ExpandIcon, HomeIcon, LibraryIcon, Music2Icon, SearchIcon, User } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = ({ params }: { params: { id: string } }) => {
  const song = songData.find((item) => item.id == parseInt(params.id));

  if (!song) {
    return <div>Song not found</div>;
  }

  return (
    <div className="flex min-h-screen w-full">
      <aside className="hidden flex-col items-center gap-4 border-r bg-background px-4 py-6 md:flex">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <Music2Icon className="h-8 w-8 text-primary" />
          <span className="sr-only">Music Platform</span>
        </Link>
        <nav className="flex flex-col items-center gap-2">
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <HomeIcon className="h-5 w-5" />
            <span className="sr-only">Home</span>
          </Link>
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <SearchIcon className="h-5 w-5" />
            <span className="sr-only">Search</span>
          </Link>
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground"
            prefetch={false}
          >
            <ExpandIcon className="h-5 w-5" />
            <span className="sr-only">Explore</span>
          </Link>
          <Link
            href="#"
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-foreground"
            prefetch={false}
          >
            <LibraryIcon className="h-5 w-5" />
            <span className="sr-only">Library</span>
          </Link>
        </nav>
      </aside>
      <main className="w-full space-y-5 p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-5xl font-semibold">{song.name}</h1>
          <Link href={"/"}>
            <HomeIcon />
          </Link>
        </div>
        <div className="flex items-center">
          <div className="">
            <img
              className="h-32 w-32 rounded-full"
              src={song.image}
              alt={`${song.name} cover`}
            />
          </div>
          <div className="grid w-1/2 grid-cols-2 pl-4">
            <div>
              <h3 className="font-semibold">Artist: </h3>
              <p className="ml-4 text-lg font-medium text-gray-600">
                {song.artist}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Category: </h3>
              <p className="ml-4 text-lg font-medium text-gray-600">
                {song.category}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Likes: </h3>
              <p className="ml-4 text-lg font-medium text-gray-600">
                {song.likes}
              </p>
            </div>
            <div>
              <h3 className="font-semibold">Views: </h3>
              <p className="ml-4 text-lg font-medium text-gray-600">
                {song.views}
              </p>
            </div>
          </div>
        </div>

        <h2 className="text-3xl font-semibold">Memories</h2>
        <ul className="w-full">
          {song.memories.map((memory) => (
            <li
              key={memory.id}
              className="my-2 mx-8 flex w-3/4 items-center justify-between rounded-lg border-y p-5 shadow-md duration-300 ease-in-out hover:scale-105"
            >
              <div className="flex items-center gap-4">
                <div>
                  <User className="rounded-full border p-1" />
                </div>
                <div>
                  <h3 className="font-medium">{memory.title}</h3>
                  <p className="text-gray-500">{memory.description}</p>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <ArrowUp className="rounded-md border p-1" />
                  <span className="text-sm text-gray-400">Upvote</span>
                </div>
                <div className="flex items-center gap-2">
                  <ArrowDown className="rounded-md border p-1" />
                  <span className="text-sm text-gray-400">Downvote</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
};

export default Page;
