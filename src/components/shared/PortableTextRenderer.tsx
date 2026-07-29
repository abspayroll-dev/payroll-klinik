import { PortableText, type PortableTextComponents } from '@portabletext/react';
import { urlFor } from '@/lib/sanity/image';

const components: PortableTextComponents = {
  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl font-bold text-[#2E2E2A] mt-10 mb-4 leading-tight">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-bold text-[#2E2E2A] mt-8 mb-3 leading-tight">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-bold text-[#2E2E2A] mt-6 mb-2 leading-tight">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-lg font-bold text-[#2E2E2A] mt-6 mb-2 leading-tight">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-[#2E2E2A] leading-relaxed mb-4">
        {children}
      </p>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-[#567354] pl-4 italic text-[#6B6B65] my-6">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside text-[#2E2E2A] leading-relaxed mb-4 space-y-1">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside text-[#2E2E2A] leading-relaxed mb-4 space-y-1">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="text-[#2E2E2A] leading-relaxed">{children}</li>
    ),
    number: ({ children }) => (
      <li className="text-[#2E2E2A] leading-relaxed">{children}</li>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-[#2E2E2A]">{children}</strong>
    ),
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    link: ({ children, value }) => {
      const href = value?.href || '#';
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#567354] underline hover:text-[#4A6248] transition-colors"
        >
          {children}
        </a>
      );
    },
  },
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      return (
        <figure className="my-8">
          <img
            src={urlFor(value).width(800).url()}
            alt={value.alt || ''}
            className="w-full rounded-lg"
            loading="lazy"
          />
          {value.caption && (
            <figcaption className="mt-2 text-center text-sm text-[#6B6B65]">
              {value.caption}
            </figcaption>
          )}
        </figure>
      );
    },
    cta: ({ value }) => {
      if (!value?.text) return null;
      return (
        <div className="my-8 rounded-xl bg-[#FDFBF7] border border-[#E5E5E0] p-6 text-center">
          <p className="text-lg font-semibold text-[#2E2E2A]">{value.text}</p>
          {value.link && (
            <a
              href={value.link}
              className="mt-4 inline-flex items-center justify-center rounded-lg bg-[#567354] text-white hover:bg-[#4A6248] transition-all duration-200 px-6 py-3 text-base font-medium"
            >
              Konsultasi Gratis
            </a>
          )}
        </div>
      );
    },
  },
};

export function PortableTextRenderer({ value }: { value: any[] }) {
  if (!value || value.length === 0) return null;
  return (
    <div className="article-content text-[#2E2E2A] leading-relaxed">
      <PortableText value={value} components={components} />
    </div>
  );
}
