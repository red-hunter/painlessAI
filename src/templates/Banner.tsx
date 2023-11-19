import Link from 'next/link';

import { Button } from '../button/Button';
import { CTABanner } from '../cta/CTABanner';
import { Section } from '../layout/Section';

const Banner = () => (
  <Section>
    <CTABanner
      title="At Painless AI, we're committed to helping you sit smarter"
      subtitle="Start your Free Trial."
      button={
        <Link href="#">
          <Button>Get Started</Button>
        </Link>
      }
    />
  </Section>
);

export { Banner };
