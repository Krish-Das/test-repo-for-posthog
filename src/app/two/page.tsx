import Link from "next/link"

export default function page() {
  return (
    <div className="p-12">
      <h1>Page 2 is busssin</h1>

      <Link href="/" className="font-medium text-blue-500">
        Go back
      </Link>
    </div>
  )
}
