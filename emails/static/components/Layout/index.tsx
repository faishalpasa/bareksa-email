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

const Layout = ({ children }: LayoutProps) => {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Bareksa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap"
          rel="stylesheet"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: styles
          }}
        />
      </Head>

      <Body style={{ margin: 0, padding: 0, backgroundColor: '#f3f3f3' }}>
        {children}
      </Body>
    </Html>
  );
};

export default Layout;
