import * as React from 'react';
import { Text, Section, Img } from '@react-email/components';

interface HeaderProps {
  title?: string;
  bgColor?: string;
  color?: string;
}

const NewUser = ({
  title = 'Rekomendasi Reksa Dana',
  bgColor = '#F7F9FA',
  color = '#2B323A'
}: HeaderProps) => {
  return (
    <Section className="px-4 pt-4 pb-6">
      <Img
        src="https://images.bareksa.com/logo/bareksa-color.png"
        alt="logo"
        className="w-[120px] mb-4"
      />

      <div className={`bg-[${bgColor}] rounded-xl py-6 px-3`}>
        <Text className={`text-2xl font-bold font-arial m-0 text-[${color}]`}>
          {title}
        </Text>
      </div>
    </Section>
  );
};

export default NewUser;
