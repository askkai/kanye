import Link from 'next/link';
import { getRandomQuote } from '../../util/getRandomQuote';

interface HomeProps {
  quote: {
    quote: string;
    author: string;
  };
}

export default function Home({ quote }: HomeProps) {
  const quoteJsonString = JSON.stringify(quote, null, 2);

  return (
    <div className="mt-8 container mx-auto text-center max-w-lg">
      <h1 className="text-5xl">JAY CHOU</h1>
      <p className="mt-2">A free random Jay Chou quotes</p>

      <QuoteSection quoteJsonString={quoteJsonString} />

    </div>
  );
}

export async function getServerSideProps() {
  const quote = await getRandomQuote();
  console.log('Quote from API:', quote);

  return {
    props: {
      quote,
    },
  };
}

interface QuoteSectionProps {
  quoteJsonString: string;
}

function QuoteSection({ quoteJsonString }: QuoteSectionProps) {
  return (
    <div className="mt-7">
      <div className="flex justify-between">
        <Link href="/api" legacyBehavior>
          <a className="underline font-bold">Developer API /api</a>
        </Link>
        <button type="button">refresh</button>
      </div>

      <div className="mt-4 text-left rounded-lg bg-slate-300 text-white p-9">
        <pre>{quoteJsonString}</pre>
      </div>
    </div>
  );
}
