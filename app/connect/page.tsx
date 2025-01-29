import { ConnectEmbed } from "../../thirdweb";
import { client } from "../../client";
import { chain } from "../../chain";
import { Staking } from "../components/Staking";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 flex flex-col items-center justify-center text-white pt-4">
      <header className="w-full flex justify-center">
        <h1 className="text-4xl font-bold text-blue-400">Stake Your NFTs and Earn</h1>
      </header>
      <section className="w-full max-w-2xl flex flex-col items-center justify-center ">
        <ConnectEmbed client={client} chain={chain} />
        <div className="mt-10 w-full flex justify-center">
          <Staking />
        </div>
      </section>
    </div>
  );
}
