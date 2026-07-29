import { Container } from '@/components/shared/Container';
import { SectionTitle } from '@/components/shared/SectionTitle';
import { FAQ_ITEMS } from '@/lib/utils/constants';
import { Accordion } from '@/components/ui/accordion';

export function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-20 bg-white">
      <Container>
        <SectionTitle 
          subtitle="Pertanyaan yang sering diajukan sebelum konsultasi."
          centered
        >
          Pertanyaan Umum (FAQ)
        </SectionTitle>

        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion
            items={FAQ_ITEMS.map((item) => ({
              title: item.question,
              content: <p>{item.answer}</p>,
            }))}
          />
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#6B6B65]">
            Still have questions?{' '}
            <a
              href="https://wa.me/6281234567890"
              className="font-medium text-[#567354] hover:text-[#4A6248] underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us on WhatsApp
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}