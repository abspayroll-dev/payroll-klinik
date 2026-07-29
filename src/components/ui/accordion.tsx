'use client';

import { cn } from '@/lib/utils/cn';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface AccordionItemProps {
  title: string;
  content: React.ReactNode;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ title, content, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-[#E5E5E0] last:border-0">
      <button
        onClick={onToggle}
        className="flex w-full items-center justify-between py-4 text-left hover:bg-[#FDFBF7] transition-colors"
      >
        <span className="font-medium text-[#2E2E2A]">{title}</span>
        <ChevronDown
          className={cn(
            'h-5 w-5 text-[#567354] transition-transform duration-200',
            isOpen && 'rotate-180'
          )}
        />
      </button>
      <div
        className={cn(
          'overflow-hidden transition-all duration-300 ease-in-out',
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <div className="pb-4 text-[#6B6B65]">
          {content}
        </div>
      </div>
    </div>
  );
}

interface AccordionProps {
  items: Array<{ title: string; content: React.ReactNode }>;
}

function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-1">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={openIndex === index}
          onToggle={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}

export { Accordion, AccordionItem };
