import * as React from "react";
import { Html, Head, Body, Tailwind, Button, Container, Text, Section, Row, Column } from "@react-email/components";

const Email = () => {
  return (
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&amp;display=swap" rel="stylesheet"></link>
      </Head>
      <Body>
        <Tailwind>
          <Section className="w-full max-w-[600px] bg-white p-6">
            <Row>
              <Column>
                <Text className="m-0">Test</Text>
              </Column>
            </Row>
          </Section>
        </Tailwind>
      </Body>
    </Html>
  );
};

export default Email;