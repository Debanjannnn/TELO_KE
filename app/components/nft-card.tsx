interface NFTCardProps {
  image: string
  price: string
  apr: string
  color: string
}

export default function NFTCard({ image, price, apr, color }: NFTCardProps) {
  return (
    <div className="w-64 overflow-hidden rounded-xl bg-black shadow-xl">
      <div className="relative aspect-square">
        <img src={image || "/placeholder.svg"} alt="NFT" className="h-full w-full object-cover" />
      </div>
      <div className={`p-4 ${color}`}>
        <div className="flex flex-col gap-2 text-white">
          <div className="flex items-center justify-between">
            <span className="text-sm">Price</span>
            <span className="font-medium">{price} TLOS</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">APR</span>
            <span className="font-medium">{apr}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm">Flexibility</span>
            <span className="font-medium">Withdraw anytime</span>
          </div>
        </div>
      </div>
    </div>
  )
}

