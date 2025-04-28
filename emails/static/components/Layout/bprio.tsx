/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-page-custom-font */

import * as React from 'react';
import { Html, Head, Body } from '@react-email/components';

const styles = `
  @media only screen and (min-width: 576px) {
      .mobile {
        display: none !important;
      }
      .desktop {
        display: block !important;
      }
    }
    
    @media only screen and (max-width: 575px) {
      .table-wrapper {
        display: block !important;
      }
      .mobile {
        display: none !important;
      }
      .desktop {
        display: block !important;
      }
    }
    
    @media only screen and (max-width: 422px) {
      .table-wrapper {
        display: block !important;
      }
      .mobile {
        display: block !important;
      }
      .desktop {
        display: none !important;
      }
    }
`;

interface LayoutProps {
  children: React.ReactNode;
}

const LayoutBprio = ({ children }: LayoutProps) => {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Email Template</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&family=Inria+Serif:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&family=Work+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: styles
          }}
        />
      </Head>

      <Body style={{ margin: 0, padding: 0, backgroundColor: '#F5F5F5' }}>
        {children}
      </Body>
    </Html>
  );
};

export default LayoutBprio;
