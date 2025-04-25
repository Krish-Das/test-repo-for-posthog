import Link from "next/link"

export default function page() {
  return (
    <div className="p-12">
      <h1>Welcome to page 1 </h1>

      <Link href="/" className="font-medium text-blue-500">
        Go back
      </Link>
    </div>
  )
}
