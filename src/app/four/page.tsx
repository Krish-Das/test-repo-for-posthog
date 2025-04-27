import Link from "next/link"

export default function page() {
  return (
    <div className="p-12">
      <h1>And a fourth page as well</h1>

      <Link href="/" className="font-medium text-blue-500">
        Go back
      </Link>
    </div>
  )
}
