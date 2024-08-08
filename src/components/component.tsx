import Link from "next/link";
import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export const songData = [
  {
    id: 1,
    name: "Shape of You",
    artist: "Ed Sheeran",
    category: "Pop",
    likes: 2500000,
    views: 10000000,
    image: "https://i.scdn.co/image/ab67616d0000b273ba5db46f4b838ef6027e6f96",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
  {
    id: 2,
    name: "Blinding Lights",
    artist: "The Weeknd",
    category: "R&B",
    likes: 2000000,
    views: 8000000,
    image: "https://i.scdn.co/image/ab67616d0000b2738863bc11d2aa12b54f5aeb36",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
  {
    id: 3,
    name: "Dance Monkey",
    artist: "Tones and I",
    category: "Pop",
    likes: 1800000,
    views: 7500000,
    image: "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
  {
    id: 4,
    name: "Bohemian Rhapsody",
    artist: "Queen",
    category: "Rock",
    likes: 3000000,
    views: 12000000,
    image: "https://i.scdn.co/image/ab67616d0000b273365b3fb800c19f7ff72602da",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
  {
    id: 5,
    name: "Despacito",
    artist: "Luis Fonsi & Daddy Yankee",
    category: "Reggaeton",
    likes: 2200000,
    views: 9500000,
    image: "https://i.scdn.co/image/ab67616d0000b273ef0d4234e1a645740f77d59c",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
  {
    id: 6,
    name: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    category: "Funk",
    likes: 1900000,
    views: 8200000,
    image: "https://i.scdn.co/image/ab67616d0000b273e319baafd16e84f0408af2a0",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
  {
    id: 8,
    name: "Lose Yourself",
    artist: "Eminem",
    category: "Hip-Hop",
    likes: 2300000,
    views: 9800000,
    image: "https://i.scdn.co/image/ab67616d0000b273b6d4566db0d12894a1a3b7a2",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
  {
    id: 10,
    name: "Billie Jean",
    artist: "Michael Jackson",
    category: "Pop",
    likes: 2600000,
    views: 11000000,
    image: "https://i.scdn.co/image/ab67616d0000b273de437d960dda1ac0a3586d97",
    memories: [
      {
        id: 1,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 2,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 3,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
      {
        id: 4,
        title: "Nostalgic College Prom!",
        userHandle: "lightY",
        userIcon: <User />,
        description:
          "This is lasjldk fjalskdjf lka;js dlkfja;lsk djfl;kajs ldkfjl;a ksjf;lkasjl;dfkj;alskdjf.",
      },
    ],
  },
];

export function Component() {
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
      <main className="flex-1 overflow-auto">
        <section className="px-4 py-8 md:px-6 md:py-12">
          <h2 className="mb-4 text-2xl font-bold">Explore Artists</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {songData.map((song) => (
              <Link
                key={song.id}
                href={`/song/` + song.id.toString()}
                className="flex flex-col items-center gap-2 rounded-md p-4 hover:bg-muted"
                prefetch={false}
              >
                <img
                  src={song.image}
                  width="120"
                  height="120"
                  alt={song.artist}
                  className="rounded-full"
                  style={{ aspectRatio: "120/120", objectFit: "cover" }}
                />
                <div className="text-center text-sm font-medium">
                  {song.artist}
                </div>
              </Link>
            ))}
          </div>
        </section>
        <section className="bg-muted px-4 py-8 md:px-6 md:py-12">
          <h2 className="mb-4 text-2xl font-bold">Top Charts</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {songData.map((song) => (
              <Card key={song.id} className="p-4">
                <Link href={"/song/" + song.id.toString()}>
                  <div className="flex items-center gap-4">
                    <img
                      src={song.image}
                      width="64"
                      height="64"
                      alt={song.name}
                      className="rounded"
                      style={{ aspectRatio: "64/64", objectFit: "cover" }}
                    />
                    <div>
                      <div className="text-lg font-medium">{song.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {song.artist}
                      </div>
                    </div>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </section>
      </main>
      {/* ... (rest of the code remains unchanged) */}
    </div>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>

function ExpandIcon(props: IconProps): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m21 21-6-6m6 6v-4.8m0 4.8h-4.8" />
      <path d="M3 16.2V21m0 0h4.8M3 21l6-6" />
      <path d="M21 7.8V3m0 0h-4.8M21 3l-6 6" />
      <path d="M3 7.8V3m0 0h4.8M3 3l6 6" />
    </svg>
  );
}

function HomeIcon(props: IconProps): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function LibraryIcon(props: IconProps): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m16 6 4 14" />
      <path d="M12 6v14" />
      <path d="M8 8v12" />
      <path d="M4 4v16" />
    </svg>
  );
}

function Music2Icon(props: IconProps): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="18" r="4" />
      <path d="M12 18V2l7 4" />
    </svg>
  );
}

function SearchIcon(props: IconProps): JSX.Element {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
