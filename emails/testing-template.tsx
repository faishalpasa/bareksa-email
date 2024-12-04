import React from 'react';
import { Section, Tailwind, Text } from '@react-email/components';
import Layout from './static/components/Layout';
import DefaultHeader from './static/components/Header/Default';
import DefaultFooter from './static/components/Footer/Default';

const TestingTemplate: React.FC = () => {
  return (
    <Layout>
      <Tailwind>
        <Section width={600}>
          <DefaultHeader />

          <Section className="bg-red-200 px-6">
            <Text>the contents sits here</Text>
          </Section>

          <DefaultFooter />
        </Section>
      </Tailwind>
    </Layout>
  );
};

export default TestingTemplate;
