import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section
    title="Introducing the Painless AI Smart Cushion"
    description="The Painless AI Smart Cushion is more than just a seat – it's your personal posture coach. Embedded with state-of-the-art hardware, this intelligent cushion syncs seamlessly with our user-friendly app. As you sit, it discreetly tracks your posture, providing real-time feedback and gentle reminders to help you maintain a healthy and pain-free alignment"
  >
    <VerticalFeatureRow
      title="Why settle for anything less?"
      description="Traditional cushions and ergonomic solutions fall short in addressing the root cause of back pain. They lack the intelligence to adapt to your unique needs, leaving you vulnerable to prolonged discomfort"
      image="/assets/images/feature1.jpg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Why we are the best"
      description="Our advanced technology actively monitors your sitting habits, offering personalized insights for a healthier lifestyle. The Painless AI app works in harmony with the Smart Cushion, creating a holistic solution that fits effortlessly into your daily routine."
      image="/assets/images/feature2.jpg"
      imageAlt="Second feature alt text"
      reverse
    />
    <VerticalFeatureRow
      title="Ready to Experience Pain-Free Sitting?"
      description="Browse our range of Painless AI Smart Cushions to find the perfect fit for your lifestyle. Unlock the full potential of our solution by downloading the Painless AI app from your preferred app store."
      image="/assets/images/feature3.jpg"
      imageAlt="Third feature alt text"
    />
  </Section>
);

export { VerticalFeatures };
