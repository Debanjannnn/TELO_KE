export default function TagCloud() {
  return (
    <div className="flex flex-wrap gap-2">
      {["STAKE", "EARN", "SECURE"].map((tag) => (
        <div key={tag} className="rounded-full bg-white px-6 py-2 text-sm font-bold shadow-lg">
          {tag}
        </div>
      ))}
    </div>
  )
}

