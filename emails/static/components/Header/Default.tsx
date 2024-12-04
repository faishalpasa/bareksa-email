import { Img, Section } from '@react-email/components';
import React from 'react';

const DefaultHeader: React.FC = () => {
  return (
    <Section className="px-8 py-4 bg-white">
      <Img
        alt="Bareksa logo"
        width={120}
        src="https://images.bareksa.com/logo/bareksa-color.png"
      />
    </Section>
  );
};

export default DefaultHeader;
