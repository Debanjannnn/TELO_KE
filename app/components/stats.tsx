import { Card, CardContent } from "@/components/ui/card"

export default function Stats() {
  return (
    <section className="container mx-auto px-4">
      <div className="grid gap-4 sm:grid-cols-3">
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-gray-500">Total Value Locked</h3>
            <p className="text-3xl font-bold">$4.3M</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-gray-500">NFTs Staked</h3>
            <p className="text-3xl font-bold">1,234</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <h3 className="text-sm font-medium text-gray-500">Average APR</h3>
            <p className="text-3xl font-bold">15%</p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

