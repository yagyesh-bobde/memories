"use client"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import React from "react";

export default function HomePage(): JSX.Element {
  return (
    <div className="flex flex-col min-h-dvh">
      <section className="relative w-full h-[70vh] bg-gradient-to-r from-[#6b46c1] to-[#b794f4]">
        <div className="absolute inset-0 overflow-hidden">
          <video autoPlay loop muted playsInline className="min-w-full min-h-full w-auto h-auto z-0 object-cover">
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="relative z-10 container h-full flex flex-col items-center justify-center gap-6 px-4 md:px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tight">Discover the Future of Music</h1>
          <p className="max-w-[700px] text-lg md:text-xl text-white/90">
            Experience the power of web3 music streaming. Connect your wallet, earn rewards, and explore a world of new
            music.
          </p>
          <div className="flex gap-4">
            <Button className="px-6 py-3 text-lg font-medium">
              Connect Wallet
            </Button>
            <Button variant="secondary" className="px-6 py-3 text-lg font-medium">
              Explore Music
            </Button>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center">
            <Music2Icon className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-bold mt-4">Featured Artists</h3>
            <p className="text-muted-foreground mt-2">
              Discover the latest and greatest artists in the web3 music scene.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <AirplayIcon className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-bold mt-4">Popular Playlists</h3>
            <p className="text-muted-foreground mt-2">Explore curated playlists featuring the hottest tracks.</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <SearchIcon className="w-12 h-12 text-primary" />
            <h3 className="text-2xl font-bold mt-4">Search Music</h3>
            <p className="text-muted-foreground mt-2">
              Find your favorite songs, albums, and artists with our powerful search.
            </p>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col items-start gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Earn Rewards with Web3</h2>
            <p className="text-muted-foreground">
              Connect your crypto wallet and start earning rewards for listening to music. Our web3 integration allows
              you to earn tokens for every song you stream, which can be used to unlock exclusive content, merchandise,
              and more.
            </p>
            <Button className="px-6 py-3 text-lg font-medium">Connect Wallet</Button>
          </div>
          <div className="flex items-center justify-center">
            <img
              src="/placeholder.svg"
              width={500}
              height={400}
              alt="Web3 Rewards"
              className="rounded-lg shadow-lg"
              style={{ aspectRatio: "500/400", objectFit: "cover" }}
            />
          </div>
        </div>
      </section>
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container">
          <div className="flex flex-col items-center text-center gap-6">
            <h2 className="text-3xl md:text-4xl font-bold">Discover New Music</h2>
            <p className="text-muted-foreground max-w-[700px]">
              Our advanced search and discovery tools make it easy to find new artists, albums, and playlists that match
              your tastes. Explore the latest releases, trending tracks, and personalized recommendations.
            </p>
            <div className="w-full max-w-md">
              <Input
                type="text"
                placeholder="Search for music..."
                className="w-full px-4 py-3 rounded-full bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-background border-t py-6">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Music2Icon className="w-6 h-6 text-primary" />
            <span className="text-lg font-bold">Web3 Music</span>
          </div>
          <nav className="flex gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Home
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Explore
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              Rewards
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground" prefetch={false}>
              About
            </Link>
          </nav>
          <div className="text-muted-foreground text-sm">&copy; 2024 Web3 Music. All rights reserved.</div>
        </div>
      </footer>
    </div>
  );
}

type IconProps = React.SVGProps<SVGSVGElement>;

function AirplayIcon(props: IconProps): JSX.Element {
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
      <path d="M5 17H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-1" />
      <path d="m12 15 5 6H7Z" />
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
