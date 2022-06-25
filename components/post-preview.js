import Avatar from '../components/avatar'
import DateFormatter from '../components/date-formatter'
import CoverImage from './cover-image'
import Link from 'next/link'

export default function PostPreview({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}) {
  return (
    <div>
      <div className="mb-5">
        <CoverImage
          slug={slug}
          title={title}
          src={coverImage}
          height={278}
          width={556}
        />
      </div>
      <h3 className="text-white text-3xl mb-3 leading-snug">
        <Link href={`/posts/${slug}`}>
          <a className="transition ease-in-out hover:underline decoration-purple-400 underline-offset-4 cursor-alias">{title}</a>
        </Link>
      </h3>
      <div className="text-slate-400 text-lg mb-4">
        <DateFormatter dateString={date} />
      </div>
      <p className="text-white text-lg leading-relaxed mb-4">{excerpt}</p>
    </div>
  )
}
