import Image from 'next/image'
export default function Avatar({ name }) {
  return (
    <div className="flex items-center">
      <div className="text-slate-400 text-xl italic">{name}</div>
    </div>
  )
}
