import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { Search, Wallet } from "lucide-react"
import NFTCard from "./components/nft-card"
import TagCloud from "./components/tag-cloud"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <h1 className="text-4xl font-bold text-blue-500">TELOS STAKE</h1>
          </Link>
          <nav className="hidden space-x-8 md:flex">
            <Link href="#" className="text-sm font-medium hover:text-blue-500">
              Stake NFT
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-500">
              My Stakes
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-500">
              Rewards
            </Link>
            <Link href="#" className="text-sm font-medium hover:text-blue-500">
              Collections
            </Link>
          </nav>
          <Button variant="outline">
            <Wallet className="mr-2 h-4 w-4" />
            <Link href="/connect">
            Connect Wallet
            </Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="relative">
          <h2 className="text-center text-xl font-medium text-gray-600">Stake your NFTs and earn TELOS rewards</h2>
          <div className="mt-12 flex justify-center">
            <div className="relative h-[400px] w-full max-w-3xl">
              <div className="absolute left-[20%] top-0 -rotate-12 transform">
                <NFTCard
                  image="https://i.pinimg.com/736x/77/1f/4a/771f4ab9221fb143eff98735916925ac.jpg"
                  price="4.5"
                  apr="12%"
                  duration="30 Days"
                  color="bg-purple-500"
                />
              </div>
              <div className="absolute left-[40%] top-4 rotate-6 transform">
                <NFTCard
                  image="https://i.pinimg.com/736x/8a/d6/56/8ad65650fb7cb706ffa9f225d3f60223.jpg"
                  price="3.6"
                  apr="15%"
                  duration="60 Days"
                  color="bg-blue-500"
                />
              </div>
              <div className="absolute left-[60%] top-0 -rotate-6 transform">
                <NFTCard
                  image="https://i.pinimg.com/736x/83/36/60/833660b6ccd1ef8ef9407ece910b81c7.jpg"
                  price="2.2"
                  apr="18%"
                  duration="90 Days"
                  color="bg-pink-500"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-lg leading-relaxed text-gray-600">
            Stake your NFTs in our secure platform and earn daily TELOS rewards. Choose your staking duration, lock your
            NFTs, and watch your rewards grow over time.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <TagCloud />
        </div>

        {/* Staking Stats */}
        {/* <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-blue-500 p-8 text-white">
            <h3 className="text-lg font-medium">Total Value Locked</h3>
            <p className="mt-2 text-2xl font-bold">$4.3M</p>
          </div>
          <div className="rounded-xl bg-blue-600 p-8 text-white">
            <h3 className="text-lg font-medium">Average APR</h3>
            <p className="mt-2 text-2xl font-bold">15%</p>
          </div>
          <div className="rounded-xl bg-pink-400 p-8 text-white">
            <h3 className="text-lg font-medium">Total Stakers</h3>
            <p className="mt-2 text-2xl font-bold">1,234</p>
          </div>
        </div> */}
      </section>

      {/* Staking Benefits */}
      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-blue-500">STAKE YOUR NFTs AND EARN REWARDS:</h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-xl bg-purple-400 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Flexible Duration</h3>
            <p className="text-white">Choose staking periods from 30 to 90 days</p>
          </div>
          <div className="rounded-xl bg-white p-6 shadow-lg">
            <h3 className="mb-4 text-xl font-bold text-blue-500">Daily Rewards</h3>
            <p className="text-4xl font-bold text-blue-500">Up to 18% APR</p>
          </div>
          <div className="rounded-xl bg-orange-500 p-6">
            <h3 className="mb-4 text-xl font-bold text-white">Secure Staking</h3>
            <p className="text-white">Your NFTs are safely stored in our smart contract</p>
          </div>
        </div>
      </section>
    </div>
  )
}

