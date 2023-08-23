import Link from 'next/link';
import { getRandomQuote } from '../../util/getRandomQuote';

export default function Home(props: any) {
  const { quote } = props;
  const quoteJsonString = JSON.stringify(quote, null, 2);
  
  return <div className="mt-8 container mx-auto text-center max-w-lg">
    <h1 className="text-5xl">JAY CHOU</h1>
    <p className="mt-2">A free random Jay Chou quotes</p>

    <div className="mt-7 flex justify-between">
      <Link href="/api" legacyBehavior>
        <a className="underline font-bold">Developer API /api</a>
      </Link>
      <button type="button">refresh</button>
    </div>

    <div className="mt-4 text-left rounded-lg bg-slate-600 text-white p-5">
      <pre>{quoteJsonString}</pre>
    </div>

  </div>
}

export async function getServerSideProps() {
  const quote = await getRandomQuote();
  return {
    props: {
      quote
    }
  }
}