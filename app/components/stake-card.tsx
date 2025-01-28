import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import Image from "next/image"

interface StakeCardProps {
  image: string
  name: string
  apr: string
  duration: string
}

export default function StakeCard({ image, name, apr, duration }: StakeCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <CardContent className="p-4">
        <h4 className="font-bold">{name}</h4>
        <div className="mt-2 flex justify-between text-sm">
          <span className="text-gray-500">APR</span>
          <span className="font-medium text-green-600">{apr}</span>
        </div>
        <div className="mt-1 flex justify-between text-sm">
          <span className="text-gray-500">Duration</span>
          <span>{duration}</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button className="w-full">Stake NFT</Button>
      </CardFooter>
    </Card>
  )
}

