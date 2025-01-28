import { defineChain } from "thirdweb";
// import { baseSepolia } from "thirdweb/chains";

export const chain = defineChain( {
    id: 41,
    rpc: "https://testnet.telos.net/evm",
  } );