/* eslint-disable react/no-unknown-property */
/* eslint-disable @next/next/no-page-custom-font */
import * as React from 'react';
import {
  // Text,
  // Section,
  // Row,
  // Column,
  // Button,
  Html,
  Head
} from '@react-email/components';

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

const NewUser = () => {
  return (
    <Html>
      <Head>
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Email Template</title>
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

      <body style={{ margin: 0, padding: 0, backgroundColor: '#f3f3f3' }}>
        <table
          bgcolor="#f3f3f3"
          border={0}
          cellPadding={0}
          cellSpacing={0}
          width="100%"
        >
          <tbody>
            <tr>
              <td>
                <table
                  bgcolor="#F3F3F3"
                  align="center"
                  border={0}
                  cellPadding={0}
                  cellSpacing={0}
                  width={600}
                >
                  {/* Bareksa Logo */}
                  <tbody>
                    <tr>
                      <td>
                        <table
                          bgcolor="#f3f3f3"
                          cellPadding={0}
                          cellSpacing={0}
                          border={0}
                          align="center"
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td
                                cellPadding={0}
                                cellSpacing={0}
                                border={0}
                                align="left"
                                style={{
                                  backgroundColor: '#FFF',
                                  padding: '16px 32px'
                                }}
                              >
                                <img
                                  src="https://images.bareksa.com/logo/bareksa-color.png"
                                  style={{ display: 'block', width: 120 }}
                                />
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    {/* Bareksa Logo */}
                    <tr>
                      <td>
                        <div
                          style={{ padding: '0 24px', backgroundColor: '#FFF' }}
                        >
                          <table
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            width="100%"
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <div
                                    style={{
                                      backgroundColor: '#F7F9FA',
                                      borderRadius: 12,
                                      padding: '24px 12px',
                                      marginBottom: 24
                                    }}
                                  >
                                    <span
                                      style={{
                                        fontSize: 24,
                                        fontFeatureSettings:
                                          '"clig" off, "liga" off',
                                        fontStyle: 'normal',
                                        fontWeight: 700,
                                        lineHeight: '28,px',
                                        fontFamily: 'Arial',
                                        letterSpacing: '0.25px',
                                        color: '#2B323A',
                                        alignSelf: 'stretch'
                                      }}
                                    >
                                      Rekomendasi Reksa Dana
                                    </span>
                                  </div>
                                </td>
                              </tr>
                              <tr>
                                <td bgcolor="#ffffff">
                                  <table
                                    border={0}
                                    cellPadding={0}
                                    cellSpacing={0}
                                    width="100%"
                                    style={{ margin: '24px 0px' }}
                                  >
                                    {/* Header Greeting */}
                                    <tbody>
                                      <tr>
                                        <td
                                          style={{
                                            color: '#3D4751',
                                            fontFamily: 'Arial',
                                            fontSize: 16,
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '24px'
                                          }}
                                        >
                                          <div>
                                            Halo{' '}
                                            <b>
                                              {'{'}
                                              {'{'}.name{'}'}
                                              {'}'}
                                            </b>
                                            ,
                                          </div>
                                          <p
                                            style={{
                                              fontFamily: 'Arial',
                                              fontSize: 16,
                                              fontWeight: 400,
                                              lineHeight: '24,px',
                                              color: '#3D4751'
                                            }}
                                          >
                                            Ayo mulai investasi pertamamu di
                                            Bareksa! Tim Analis Bareksa telah
                                            mengkurasi produk-produk reksa dana
                                            pilihan untuk mengoptimalkan
                                            keuntungan investasimu.
                                          </p>
                                          <table width="100%">
                                            {/* Table Header */}
                                            <tbody>
                                              <tr>
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 700,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px',
                                                    width: '33.33%'
                                                  }}
                                                >
                                                  Tipe Reksa Dana
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 700,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px',
                                                    width: '33.33%'
                                                  }}
                                                >
                                                  Nama Reksa Dana
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 700,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px',
                                                    width: '33.33%'
                                                  }}
                                                >
                                                  Imbal Hasil/X Bulan
                                                  <span
                                                    style={{ color: '#E63312' }}
                                                  >
                                                    *
                                                  </span>
                                                </td>
                                              </tr>
                                              {/* Table Header */}
                                              {/* Table Content */}
                                              <tr
                                                style={{
                                                  backgroundColor: '#F7F9FA'
                                                }}
                                              >
                                                {/* Baris ganjil pake background color */}
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  [Tipe Reksa Dana]
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  [Nama Reksa Dana]
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#17A349',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  +99,99%
                                                </td>
                                              </tr>
                                              <tr>
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  [Tipe Reksa Dana]
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  [Nama Reksa Dana]
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#E63312',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  -99,99%
                                                </td>
                                              </tr>
                                              <tr
                                                style={{
                                                  backgroundColor: '#F7F9FA'
                                                }}
                                              >
                                                {/* Baris ganjil pake background color */}
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  [Tipe Reksa Dana]
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#3D4751',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  [Nama Reksa Dana]
                                                </td>
                                                <td
                                                  style={{
                                                    color: '#5C6E7D',
                                                    fontFamily: 'Arial',
                                                    fontSize: 14,
                                                    fontStyle: 'normal',
                                                    fontWeight: 400,
                                                    lineHeight: '24,px',
                                                    padding: '10px 12px'
                                                  }}
                                                >
                                                  0,00%
                                                </td>
                                              </tr>
                                              {/* Table Content */}
                                            </tbody>
                                          </table>
                                          <i
                                            style={{
                                              fontWeight: 400,
                                              fontSize: 14,
                                              lineHeight: '24,px',
                                              color: '#697C8E',
                                              marginBottom: 16
                                            }}
                                          >
                                            <span style={{ color: '#E63312' }}>
                                              *
                                            </span>
                                            Berdasarkan kinerja di masa lalu.
                                          </i>
                                          <p
                                            style={{
                                              fontWeight: 400,
                                              fontSize: 16,
                                              lineHeight: '24,px',
                                              color: 'rgba(0, 0, 0, 0.6)',
                                              marginBottom: 16
                                            }}
                                          >
                                            Jadi, tunggu apa lagi? Awali
                                            langkahmu menuju kebebasan finansial
                                            dengan menyelesaikan transaksi
                                            sebelum pukul 13.00 WIB untuk
                                            mendapatkan harga/unit hari ini.
                                          </p>
                                          <div
                                            style={{
                                              fontWeight: 700,
                                              fontSize: 14,
                                              lineHeight: '20,px',
                                              color: 'rgba(0, 0, 0, 0.6)',
                                              textAlign: 'center',
                                              marginBottom: 8,
                                              justifyContent: 'center',
                                              fontStyle: 'normal',
                                              width: 'fit-content',
                                              margin: 'auto'
                                            }}
                                          >
                                            <a
                                              href="{{.open_app}}"
                                              style={{
                                                padding: '12px 55px',
                                                display: 'block',
                                                borderRadius: 24,
                                                backgroundColor: '#22B252',
                                                textDecoration: 'none',
                                                fontFamily:
                                                  '"Nunito Sans", sans-serif',
                                                color: '#FFFFFF'
                                              }}
                                            >
                                              Buka Aplikasi Bareksa
                                            </a>
                                          </div>
                                          <p
                                            style={{
                                              fontWeight: 400,
                                              fontSize: 16,
                                              lineHeight: '24,px',
                                              color: 'rgba(0, 0, 0, 0.6)',
                                              marginBottom: 16
                                            }}
                                          >
                                            Bila membutuhkan bantuan lebih
                                            lanjut, silakan hubungi CS melalui
                                            Pusat Bantuan.
                                          </p>
                                          <p
                                            style={{
                                              fontWeight: 'bolder',
                                              fontSize: 14,
                                              lineHeight: '24,px',
                                              color: 'rgba(0, 0, 0, 0.6)'
                                            }}
                                          >
                                            Raih <i>financial freedom</i>{' '}
                                            bersama Bareksa, #AmanPastiBisa
                                          </p>
                                        </td>
                                      </tr>
                                    </tbody>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td>
                                <div
                                  style={{
                                    padding: '16px 24px',
                                    backgroundColor: '#FFF'
                                  }}
                                >
                                  <div
                                    style={{
                                      color: '#5C6E7D',
                                      fontFamily: 'Arial',
                                      fontSize: 16,
                                      fontStyle: 'normal',
                                      fontWeight: 700,
                                      lineHeight: '24px'
                                    }}
                                  >
                                    Pusat Bantuan Bareksa
                                  </div>
                                </div>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <table
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                  style={{
                                    backgroundColor: '#FFF',
                                    padding: '0 24px 24px 24px'
                                  }}
                                >
                                  <tbody>
                                    <tr>
                                      <td style={{ display: 'flex' }}>
                                        <div
                                          style={{
                                            padding: '8px 16px',
                                            marginRight: 22,
                                            backgroundColor: '#EFF1F3',
                                            fontFamily: 'Arial',
                                            fontSize: 14,
                                            borderRadius: 4,
                                            fontStyle: 'normal',
                                            float: 'left',
                                            fontWeight: 400,
                                            lineHeight: '20 /* 142.857% */,px',
                                            letterSpacing: '0.25px',
                                            display: 'flex',
                                            alignItems: 'center'
                                          }}
                                        >
                                          <a
                                            href="https://bareksa.onelink.me/bLEI/kontak"
                                            style={{
                                              textDecoration: 'none',
                                              color: '#2B323A',
                                              display: 'flex',
                                              width: 'max-content'
                                            }}
                                          >
                                            <img
                                              src="https://images.bareksa.com/icons/email-stock-comment.png"
                                              alt
                                              style={{
                                                padding: '0 5px',
                                                maxHeight: 20
                                              }}
                                            />
                                            Live Chat
                                          </a>
                                        </div>
                                        <div
                                          style={{
                                            padding: '8px 16px',
                                            marginRight: 22,
                                            backgroundColor: '#EFF1F3',
                                            fontFamily: 'Arial',
                                            fontSize: 14,
                                            borderRadius: 4,
                                            float: 'left',
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '20 /* 142.857% */,px',
                                            letterSpacing: '0.25px',
                                            display: 'flex',
                                            alignItems: 'center'
                                          }}
                                        >
                                          <a
                                            href="tel:(021) 80676767"
                                            style={{
                                              textDecoration: 'none',
                                              color: '#2B323A',
                                              display: 'flex',
                                              width: 'max-content'
                                            }}
                                          >
                                            <img
                                              src="https://images.bareksa.com/icons/email-stock-phone.png"
                                              alt
                                              style={{
                                                padding: '0 5px',
                                                maxHeight: 20
                                              }}
                                            />
                                            (021) 80676767
                                          </a>
                                        </div>
                                        <div
                                          style={{
                                            padding: '8px 16px',
                                            marginRight: 0,
                                            backgroundColor: '#EFF1F3',
                                            fontFamily: 'Arial',
                                            borderRadius: 4,
                                            float: 'left',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '20 /* 142.857% */,px',
                                            letterSpacing: '0.25px',
                                            display: 'flex',
                                            alignItems: 'center'
                                          }}
                                        >
                                          <a
                                            href="mailto:cs@bareksa.com"
                                            style={{
                                              textDecoration: 'none',
                                              color: '#2B323A',
                                              display: 'flex',
                                              width: 'max-content'
                                            }}
                                          >
                                            <img
                                              src="https://images.bareksa.com/icons/email-stock-envelope.png"
                                              alt
                                              style={{
                                                padding: '0 5px',
                                                maxHeight: 20
                                              }}
                                            />
                                            cs@bareksa.com
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                    {/* Email Footer */}
                    <tr>
                      <td style={{ backgroundColor: '#E6F6EA', padding: 24 }}>
                        <table
                          border={0}
                          cellPadding={0}
                          cellSpacing={0}
                          width="100%"
                        >
                          <tbody>
                            <tr>
                              <td style={{ paddingBottom: 24 }}>
                                <table width="100%">
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div
                                          style={{
                                            fontFamily: 'Arial',
                                            fontSize: 16,
                                            fontStyle: 'normal',
                                            fontWeight: 700,
                                            marginBottom: 12,
                                            lineHeight: '20 /* 125% */,px',
                                            color: '#090A0A'
                                          }}
                                        >
                                          PT Bareksa Marketplace Indonesia
                                        </div>
                                      </td>
                                      <td rowSpan={2}>
                                        <div style={{ textAlign: 'center' }}>
                                          <a
                                            style={{
                                              padding: '0 7px',
                                              textDecoration: 'none'
                                            }}
                                            href="https://www.facebook.com/Bareksa/"
                                          >
                                            <img
                                              width={30}
                                              height={30}
                                              src="https://images.bareksa.com/icons/facebook_logo.png"
                                              alt="Facebook"
                                            />
                                          </a>
                                          <a
                                            style={{
                                              padding: '0 7px',
                                              textDecoration: 'none'
                                            }}
                                            href="https://twitter.com/bareksa"
                                          >
                                            <img
                                              width={30}
                                              height={30}
                                              src="https://images.bareksa.com/icons/x_logo.png"
                                              alt="Twitter"
                                            />
                                          </a>
                                          <a
                                            style={{
                                              padding: '0 7px',
                                              textDecoration: 'none'
                                            }}
                                            href="https://www.instagram.com/bareksa/"
                                          >
                                            <img
                                              width={30}
                                              height={30}
                                              src="https://images.bareksa.com/icons/instagram_logo.png"
                                              alt="Instagram"
                                            />
                                          </a>
                                          <a
                                            style={{
                                              padding: '0 7px',
                                              textDecoration: 'none'
                                            }}
                                            href="https://www.youtube.com/channel/UCW2UxQgA4n5XMwyrvDhMsrQ"
                                          >
                                            <img
                                              width={30}
                                              height={30}
                                              src="https://images.bareksa.com/icons/youtube_logo.png"
                                              alt="Youtube"
                                            />
                                          </a>
                                        </div>
                                      </td>
                                    </tr>
                                    <tr>
                                      <td>
                                        <div
                                          style={{
                                            fontFamily: 'Arial',
                                            fontSize: 14,
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '20 /* 142.857% */,px',
                                            letterSpacing: '0.25px',
                                            color: '#3D4751'
                                          }}
                                        >
                                          Jl. Kemang Raya 14 A-B-C Jakarta
                                          Selatan 12730
                                        </div>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ padding: '24px 0' }} colSpan={2}>
                                <table
                                  border={0}
                                  cellPadding={0}
                                  cellSpacing={0}
                                  width="100%"
                                >
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          fontFamily: 'Arial',
                                          fontSize: 16,
                                          fontStyle: 'normal',
                                          fontWeight: 700,
                                          lineHeight: '24 /* 150% */,px',
                                          color: '#3D4751'
                                        }}
                                      >
                                        Download Aplikasi Bareksa
                                      </td>
                                      <td style={{ textAlign: 'right' }}>
                                        <a href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&utm_medium=organic&utm_campaign=&utm_content=register-apps">
                                          <img
                                            src="https://images.bareksa.com/bareksa/img/logo/badge_google-play.png"
                                            style={{ maxWidth: 135 }}
                                          />
                                        </a>
                                      </td>
                                      <td style={{ textAlign: 'right' }}>
                                        <a href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&utm_medium=organic&utm_campaign=&utm_content=register-apps">
                                          <img
                                            src="https://images.bareksa.com/bareksa/img/logo/badge_app-store.png"
                                            style={{ maxWidth: 135 }}
                                          />
                                        </a>
                                      </td>
                                    </tr>
                                  </tbody>
                                </table>
                              </td>
                            </tr>
                            <tr>
                              <td>
                                <p
                                  style={{
                                    fontFamily: 'Arial',
                                    fontSize: 12,
                                    fontStyle: 'normal',
                                    fontWeight: 400,
                                    lineHeight: '20,px',
                                    /* 166.667% */ letterSpacing: '0.25px',
                                    color: '#808F9F'
                                  }}
                                >
                                  Seluruh produk investasi keuangan yang
                                  dipasarkan melalui situs bareksa.com dan
                                  aplikasi Bareksa Super App Investasi
                                  dikembangkan dan dikelola oleh PT Bareksa
                                  Marketplace Indonesia yang telah mendapatkan
                                  Izin Penyelenggara Sistem Elektronik dari
                                  Kementerian Komunikasi dan Informatika
                                  Republik Indonesia.
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      </body>
    </Html>
  );
};

export default NewUser;
