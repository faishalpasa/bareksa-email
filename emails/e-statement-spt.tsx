import * as React from 'react';
import { Img } from '@react-email/components';

import Layout from './static/components/Layout';

const ZeroPortofolio = () => {
  return (
    <Layout>
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
                              align="left"
                              style={{
                                backgroundColor: '#FFF',
                                padding: '16px 32px'
                              }}
                            >
                              <Img
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
                                      lineHeight: '28px',
                                      fontFamily: 'Arial',
                                      letterSpacing: '0.25px',
                                      color: '#2B323A',
                                      alignSelf: 'stretch'
                                    }}
                                  >
                                    Dokumen Pendukung SPT
                                  </span>
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
                                  style={{ margin: '24px 0px' }}
                                >
                                  {/* Header Greeting */}
                                  <tbody>
                                    <tr>
                                      <td
                                        style={{
                                          color: '#3D4751',
                                          fontFamily: 'Arial',
                                          fontSize: 14,
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
                                            fontSize: 14,
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                            color: '#3D4751'
                                          }}
                                        >
                                          Silakan mengunduh lampiran untuk
                                          menemukan dokumen pendukung laporan
                                          SPT Tahunan kamu untuk produk Reksa
                                          Dana. Lampiran dapat dibuka dengan
                                          format kode sandi <b>ddmmyyyy</b>.
                                        </p>

                                        <p
                                          style={{
                                            fontFamily: 'Arial',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                            color: '#3D4751',
                                            margin: 0
                                          }}
                                        >
                                          dd : tanggal lahir kamu
                                        </p>
                                        <p
                                          style={{
                                            fontFamily: 'Arial',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                            color: '#3D4751',
                                            margin: 0
                                          }}
                                        >
                                          mm : bulan lahir kamu
                                        </p>
                                        <p
                                          style={{
                                            fontFamily: 'Arial',
                                            fontSize: 14,
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                            color: '#3D4751',
                                            margin: 0
                                          }}
                                        >
                                          yyyy : tahun lahir kamu
                                        </p>

                                        <p
                                          style={{
                                            fontWeight: 400,
                                            fontSize: 14,
                                            lineHeight: '24px',
                                            color: '#3D4751',
                                            marginBottom: 16
                                          }}
                                        >
                                          Kamu juga dapat menemukan panduan
                                          pengisian SPT Tahunan pada lampiran
                                          atau klik di bawah ini.
                                        </p>

                                        <a
                                          href="{{.open_app}}"
                                          style={{
                                            textDecoration: 'none',
                                            fontFamily:
                                              '"Nunito Sans", sans-serif',
                                            color: '#0188D0',
                                            fontWeight: 700,
                                            fontSize: 14
                                          }}
                                        >
                                          Lihat Panduan Pengisian SPT
                                        </a>
                                        <p
                                          style={{
                                            fontWeight: 'bolder',
                                            fontSize: 14,
                                            lineHeight: '24px',
                                            color: '#3D4751'
                                          }}
                                        >
                                          {`Pastikan kamu lapor SPT Tahunan sebelum <dd month yyyy>`}
                                        </p>
                                        <p
                                          style={{
                                            fontWeight: 400,
                                            fontSize: 14,
                                            lineHeight: '24px',
                                            color: '#3D4751',
                                            marginBottom: 16
                                          }}
                                        >
                                          Jika kamu memiliki pertanyaan atau
                                          membutuhkan bantuan, silakan
                                          menghubungi CS Bareksa melalui Pusat
                                          Bantuan atau Live Chat di aplikasi.
                                        </p>
                                        <p
                                          style={{
                                            fontWeight: 'bolder',
                                            fontSize: 14,
                                            lineHeight: '24px',
                                            color: '#3D4751'
                                          }}
                                        >
                                          Raih <i>financial freedom</i> bersama
                                          Bareksa, #AmanPastiBisa
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
                                          lineHeight: '20px',
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
                                          <Img
                                            src="https://images.bareksa.com/icons/email-stock-comment.png"
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
                                          lineHeight: '20px',
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
                                          <Img
                                            src="https://images.bareksa.com/icons/email-stock-phone.png"
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
                                          lineHeight: '20px',
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
                                          <Img
                                            src="https://images.bareksa.com/icons/email-stock-envelope.png"
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
                                          lineHeight: '20px',
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
                                            textDecoration: 'none',
                                            display: 'inline-block'
                                          }}
                                          href="https://www.facebook.com/Bareksa/"
                                        >
                                          <Img
                                            width={30}
                                            height={30}
                                            src="https://images.bareksa.com/icons/facebook_logo.png"
                                            alt="Facebook"
                                          />
                                        </a>
                                        <a
                                          style={{
                                            padding: '0 7px',
                                            textDecoration: 'none',
                                            display: 'inline-block'
                                          }}
                                          href="https://twitter.com/bareksa"
                                        >
                                          <Img
                                            width={30}
                                            height={30}
                                            src="https://images.bareksa.com/icons/x_logo.png"
                                            alt="Twitter"
                                          />
                                        </a>
                                        <a
                                          style={{
                                            padding: '0 7px',
                                            textDecoration: 'none',
                                            display: 'inline-block'
                                          }}
                                          href="https://www.instagram.com/bareksa/"
                                        >
                                          <Img
                                            width={30}
                                            height={30}
                                            src="https://images.bareksa.com/icons/instagram_logo.png"
                                            alt="Instagram"
                                          />
                                        </a>
                                        <a
                                          style={{
                                            padding: '0 7px',
                                            textDecoration: 'none',
                                            display: 'inline-block'
                                          }}
                                          href="https://www.youtube.com/channel/UCW2UxQgA4n5XMwyrvDhMsrQ"
                                        >
                                          <Img
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
                                          lineHeight: '20px',
                                          letterSpacing: '0.25px',
                                          color: '#3D4751'
                                        }}
                                      >
                                        Jl. Kemang Raya 14 A-B-C Jakarta Selatan
                                        12730
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
                                        lineHeight: '24px',
                                        color: '#3D4751'
                                      }}
                                    >
                                      Download Aplikasi Bareksa
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                      <a href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&utm_medium=organic&utm_campaign=&utm_content=register-apps">
                                        <Img
                                          src="https://images.bareksa.com/bareksa/img/logo/badge_google-play.png"
                                          style={{ maxWidth: 135 }}
                                        />
                                      </a>
                                    </td>
                                    <td style={{ textAlign: 'right' }}>
                                      <a href="https://bareksa.onelink.me/bLEI/bareksahomefooter?utm_source=bareksa-landing-page&utm_medium=organic&utm_campaign=&utm_content=register-apps">
                                        <Img
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
                                  lineHeight: '20px',
                                  letterSpacing: '0.25px',
                                  color: '#808F9F'
                                }}
                              >
                                Seluruh produk investasi keuangan yang
                                dipasarkan melalui situs bareksa.com dan
                                aplikasi Bareksa Super App Investasi
                                dikembangkan dan dikelola oleh PT Bareksa
                                Marketplace Indonesia yang telah mendapatkan
                                Izin Penyelenggara Sistem Elektronik dari
                                Kementerian Komunikasi dan Informatika Republik
                                Indonesia.
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
    </Layout>
  );
};

export default ZeroPortofolio;
