import Link from "next/link";
import {useRouter} from 'next/router';

export default function HomeRedirect() {

  const router = useRouter();
  return (
    <p className="text-xl md:text-22xl tracking-tight md:tracking-tighter leading-tight mb-10 mt-8">
        <code className="text-purple-400 cursor-alias">$ cat ~{router.pathname}</code>
    </p>
  );
}
