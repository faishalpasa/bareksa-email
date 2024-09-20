import * as React from 'react';
import { Text, Section, Row, Column, Img } from '@react-email/components';

const FooterStock = () => {
  return (
    <Section className="p-6 bg-[#E6F6EA]">
      <Row className="mb-4">
        <Column>
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="flex-1">
              <Text className="text-base font-arial m-0 mb-3 font-bold text-[#090A0A]">
                PT Bareksa Marketplace Indonesia
              </Text>
              <Text className="text-sm font-arial m-0 font-normal text-[#3D4751]">
                Jl. Kemang Raya 14 A-B-C Jakarta Selatan 12730
              </Text>
            </div>
            <div className="flex items-center flex-row gap-4">
              <a
                className="no-underline"
                href="https://www.facebook.com/Bareksa/"
              >
                <Img
                  className="w-[30px] h-[30px]"
                  src="https://images.bareksa.com/icons/facebook_logo.png"
                  alt="Facebook"
                />
              </a>
              <a className="no-underline" href="https://twitter.com/bareksa">
                <Img
                  className="w-[30px] h-[30px]"
                  src="https://images.bareksa.com/icons/x_logo.png"
                  alt="Twitter"
                />
              </a>
              <a
                className="no-underline"
                href="https://www.instagram.com/bareksa/"
              >
                <Img
                  className="w-[30px] h-[30px]"
                  src="https://images.bareksa.com/icons/instagram_logo.png"
                  alt="Instagram"
                />
              </a>
              <a
                className="no-underline"
                href="https://www.youtube.com/channel/UCW2UxQgA4n5XMwyrvDhMsrQ"
              >
                <Img
                  className="w-[30px] h-[30px]"
                  src="https://images.bareksa.com/icons/youtube_logo.png"
                  alt="Youtube"
                />
              </a>
            </div>
          </div>
        </Column>
      </Row>

      <Row className="mb-4">
        <Column>
          <div className="flex flex-col gap-1 sm:flex-row">
            <Text className="text-[#3D4751] font-arial font-bold flex-1">
              Download Aplikasi Bareksa
            </Text>
            <div className="flex items-center gap-4">
              <a
                href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&amp;utm_medium=organic&amp;utm_campaign=&amp;utm_content=register-apps"
                className="no-underline"
              >
                <Img
                  src="https://images.bareksa.com/bareksa/img/logo/badge_google-play.png"
                  className="max-w-[135px]"
                />
              </a>
              <a
                href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&utm_medium=organic&utm_campaign=&utm_content=register-apps"
                className="no-underline"
              >
                <Img
                  src="https://images.bareksa.com/bareksa/img/logo/badge_app-store.png"
                  className="max-w-[135px]"
                />
              </a>
            </div>
          </div>
        </Column>
      </Row>

      <Row className="mb-4">
        <Column>
          <Text className="text-[#808F9F] text-xs font-arial font-normal m-0 leading-5">
            Seluruh produk investasi keuangan yang dipasarkan melalui situs
            bareksa.com dan aplikasi Bareksa Super App Investasi dikembangkan
            dan dikelola oleh PT Bareksa Marketplace Indonesia yang telah
            mendapatkan Izin Penyelenggara Sistem Elektronik dari Kementerian
            Komunikasi dan Informatika Republik Indonesia.
          </Text>
        </Column>
      </Row>

      <Row>
        <Column>
          <Text className="text-[#808F9F] text-xs font-arial font-normal m-0 leading-5">
            Seluruh transaksi saham dilakukan dengan izin sebagai Mitra
            Pemasaran Perantara Pedagang Efek dari OJK yang diberikan kepada PT
            Bareksa Portal Investasi bekerja sama dengan PT Ciptadana Sekuritas
            Asia.
          </Text>
        </Column>
      </Row>
    </Section>
  );
};

export default FooterStock;
