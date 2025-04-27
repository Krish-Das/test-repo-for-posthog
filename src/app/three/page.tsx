import Link from "next/link"

export default function page() {
  return (
    <div className="p-12">
      <h1>This is a third page</h1>

      <Link href="/" className="font-medium text-blue-500">
        Go back
      </Link>
    </div>
  )
}
