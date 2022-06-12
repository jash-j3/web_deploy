import Image from 'next/image'
export default function Avatar({ name }) {
  return (
    <div className="flex items-center">
      <div className="text-white text-xl font-bold">{name}</div>
    </div>
  )
}
