import { Section, Row, Text, Column, Img, Link } from '@react-email/components';
import React from 'react';

const FOOTER_BUTTONS = [
  {
    label: 'Live Chat',
    url: 'https://bareksa.onelink.me/bLEI/kontak',
    icon: 'https://images.bareksa.com/icons/email-stock-comment.png'
  },
  {
    label: '(021) 80676767',
    url: 'tel:(021) 80676767',
    icon: 'https://images.bareksa.com/icons/email-stock-phone.png'
  },
  {
    label: 'cs@bareksa.com',
    url: 'mailto:cs@bareksa.com',
    icon: 'https://images.bareksa.com/icons/email-stock-envelope.png'
  }
];

const FOOTER_SOCIAL_MEDIAS = [
  {
    label: 'Facebook',
    url: 'https://www.facebook.com/Bareksa/',
    icon: 'https://images.bareksa.com/icons/facebook_logo.png'
  },
  {
    label: 'X',
    url: 'https://twitter.com/bareksa',
    icon: 'https://images.bareksa.com/icons/x_logo.png'
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/bareksa/',
    icon: 'https://images.bareksa.com/icons/instagram_logo.png'
  },
  {
    label: 'Youtube',
    url: 'https://www.youtube.com/channel/UCW2UxQgA4n5XMwyrvDhMsrQ',
    icon: 'https://images.bareksa.com/icons/youtube_logo.png'
  }
];

const DefaultFooter = () => {
  return (
    <>
      <Section>
        <Text className="px-6 py-4 text-[#5C6E7D] font-[Arial] font-bold text-base m-0 bg-white">
          Pusat Bantuan Bareksa
        </Text>

        <Row>
          <Column className="px-6 pb-6 bg-white">
            {FOOTER_BUTTONS.map((button, index) => (
              <Link
                key={button.label}
                href={button.url}
                className={`px-4 py-2 bg-[#eff1f3] font-[Arial] rounded font-normal text-sm inline-flex items-center text-[#2b323a] ${index === 0 ? '' : 'ml-5'}`}
              >
                <Img src={button.icon} className="inline max-h-5 px-1" />
                {button.label}
              </Link>
            ))}
          </Column>
        </Row>
      </Section>

      <Section className="p-6 bg-[#e6f6ea]">
        <Row className="pb-6">
          <Column>
            <Text className="m-0 mb-3 font-[Arial] font-bold text-base leading-5 text-[#090a0a]">
              PT Bareksa Marketplace Indonesia
            </Text>
            <Text className="m-0 font-[Arial] text-sm tracking-[.25px] text-[#3d4751]">
              Jl. Kemang Raya 14 A-B-C Jakarta Selatan 12730
            </Text>
          </Column>
          <Column>
            <Row align="right">
              {FOOTER_SOCIAL_MEDIAS.map((socialMedia) => (
                <Column key={socialMedia.label} className="inline-block">
                  <Link href={socialMedia.url} className="px-2 inline-block">
                    <Img
                      alt={socialMedia.label}
                      height="30"
                      src={socialMedia.icon}
                      width="30"
                    />
                  </Link>
                </Column>
              ))}
            </Row>
          </Column>
        </Row>

        <Row className="py-6">
          <Column>
            <Text className="m-0 font-[Arial] font-bold text-base text-[#3d4751]">
              Download Aplikasi bareksa
            </Text>
          </Column>
          <Column>
            <Row>
              <Column>
                <Link
                  className="inline-block"
                  href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&amp;utm_medium=organic&amp;utm_campaign=&amp;utm_content=register-apps"
                >
                  <Img
                    src="https://images.bareksa.com/bareksa/img/logo/badge_google-play.png"
                    alt="Download Bareksa di Google Play"
                    className="max-w-[135px]"
                  />
                </Link>
              </Column>
              <Column>
                <Link
                  className="inline-block"
                  href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&amp;utm_medium=organic&amp;utm_campaign=&amp;utm_content=register-apps"
                >
                  <Img
                    src="https://images.bareksa.com/bareksa/img/logo/badge_app-store.png"
                    alt="Download Bareksa di App Store"
                    className="max-w-[135px]"
                  />
                </Link>
              </Column>
            </Row>
          </Column>
        </Row>

        <Text className="font-[Arial] text-xs leading-5 tracking-[.25px] text-[#808f9f]">
          Seluruh produk investasi keuangan yang dipasarkan melalui situs
          bareksa.com dan aplikasi Bareksa Super App Investasi dikembangkan dan
          dikelola oleh PT Bareksa Marketplace Indonesia yang telah mendapatkan
          Izin Penyelenggara Sistem Elektronik dari Kementerian Komunikasi dan
          Informatika Republik Indonesia.
        </Text>
      </Section>
    </>
  );
};

export default DefaultFooter;
