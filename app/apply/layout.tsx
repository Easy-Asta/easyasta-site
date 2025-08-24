'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ApplicationProvider } from '@/components/ApplicationContext';

/**
 * Layout wrapper for the multi‑step application wizard.
 *
 * This layout renders a simple stepper at the top of each apply page and
 * wraps the content in an ApplicationProvider so all steps can share
 * state. The current step is highlighted based on the pathname.
 */
export default function ApplyLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const currentSlug = pathname.split('/').pop();
  const steps = [
    { slug: 'step1-consent', label: 'Consent' },
    { slug: 'step2-eligibility', label: 'Eligibility' },
    { slug: 'step3-info', label: 'Information' },
    { slug: 'step4-passport', label: 'Passport' },
    { slug: 'step5-travel', label: 'Travel Plans' },
    { slug: 'step6-uploads', label: 'Uploads' },
    { slug: 'step7-review', label: 'Review' },
    { slug: 'step8-payment', label: 'Payment' },
    { slug: 'step9-submission', label: 'Submit' },
  ];
  return (
    <ApplicationProvider>
      <div className="space-y-6">
        <nav className="flex space-x-2 overflow-x-auto py-2">
          {steps.map((step, idx) => {
            const isActive = currentSlug === step.slug;
            return (
              <Link
                key={step.slug}
                href={`/apply/${step.slug}`}
                className={`px-3 py-2 rounded-md whitespace-nowrap ${isActive ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
              >
                {idx + 1}. {step.label}
              </Link>
            );
          })}
        </nav>
        <div>{children}</div>
      </div>
    </ApplicationProvider>
  );
}