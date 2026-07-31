import React from 'react';
import { ChevronDown } from 'lucide-react';

type FooterDisclosureProps = {
  title: string;
  children: React.ReactNode;
};

const FooterDisclosure = ({ title, children }: FooterDisclosureProps) => {
  return (
    <details className="group border-t border-stone-800">
      <summary className="footer-disclosure-summary flex min-h-14 cursor-pointer items-center justify-between gap-4 py-3 text-left text-ivory transition-colors hover:text-sage-200">
        <span className="font-serif text-xl">{title}</span>
        <ChevronDown
          size={20}
          aria-hidden="true"
          className="shrink-0 text-stone-400 transition-transform duration-200 group-open:rotate-180"
        />
      </summary>
      <div className="pb-5 pt-1">{children}</div>
    </details>
  );
};

export default FooterDisclosure;
