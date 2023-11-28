import Image from 'next/image'

export default function Page() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-5">
      <h1>test</h1>
      <Image src="/images/nextjs.png" alt="Next.js" width={50} height={50} />
    </div>
  )
}
