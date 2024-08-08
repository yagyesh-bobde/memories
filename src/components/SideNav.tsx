import {
  ExpandIcon,
  HomeIcon,
  LibraryIcon,
  Music2Icon,
  SearchIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const SideNav = () => {
  return (
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
          href="/"
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
  );
};

export default SideNav;
