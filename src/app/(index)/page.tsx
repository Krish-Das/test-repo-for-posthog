import Link from "next/link"

import Welcome from "@/components/next-kit-welcome"

export default function Home() {
  return (
    <>
      <div className="mb-10 flex h-48 w-full flex-col items-center justify-center gap-3">
        <Link href="/one" className="font-medium text-blue-500">
          one
        </Link>
        <Link href="/two" className="font-medium text-blue-500">
          two
        </Link>

        <Link href="/next-rewrite" className="font-medium text-blue-500">
          Next rewrite
        </Link>

        <Link href="/three" className="font-medium text-blue-500">
          Third page
        </Link>

        ---

        <Link href="/four" className="font-medium text-blue-500">
          4<sup>th</sup> one
        </Link>
      </div>
      <Welcome />
    </>
  )
}
