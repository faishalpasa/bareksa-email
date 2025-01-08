import * as React from 'react';
import { Img } from '@react-email/components';

import Layout from './static/components/Layout';

const VerificationRDN = () => {
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
                {/* Bareksa Logo  Here*/}
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
                                    backgroundColor: '#FFF3E0',
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
                                      color: '#F57902',
                                      alignSelf: 'stretch'
                                    }}
                                  >
                                    Pembukaan RDN BCA
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
                                            lineHeight: '24px',
                                            color: '#3D4751'
                                          }}
                                        >
                                          Kami masih menunggu salinan fisik
                                          (hard copy) dokumenmu untuk
                                          melanjutkan pendaftaran Bareksa Saham.
                                          Mohon perhatikan deadline dan detail
                                          pengiriman dokumen berikut:
                                        </p>
                                        <div
                                          style={{
                                            padding: 12,
                                            backgroundColor: '#EFF1F3'
                                          }}
                                        >
                                          <p
                                            style={{
                                              fontWeight: 400,
                                              fontSize: 16,
                                              lineHeight: '24px',
                                              color: '#5C6E7D',
                                              margin: 0
                                            }}
                                          >
                                            Deadline pengiriman
                                          </p>
                                          <p
                                            style={{
                                              fontWeight: 700,
                                              fontSize: 16,
                                              lineHeight: '24px',
                                              color: '#2B323A',
                                              marginTop: 0,
                                              marginBottom: 16
                                            }}
                                          >
                                            Senin, 9 September 2024
                                          </p>
                                          <p
                                            style={{
                                              fontWeight: 400,
                                              fontSize: 16,
                                              lineHeight: '24px',
                                              color: '#5C6E7D',
                                              margin: 0
                                            }}
                                          >
                                            Dokumen dan Panduan Pengiriman
                                          </p>
                                          <p
                                            style={{
                                              fontWeight: 700,
                                              fontSize: 16,
                                              lineHeight: '24px',
                                              color: '#2B323A',
                                              margin: 0
                                            }}
                                          >
                                            Temukan email dengan subject
                                            “Bareksa Saham: Pembukaan RDN BCA
                                            (Untuk Dicetak &amp;
                                            Ditandatangani)”
                                          </p>
                                        </div>
                                        <p
                                          style={{
                                            fontWeight: 400,
                                            fontSize: 16,
                                            lineHeight: '24px',
                                            color: 'rgba(0, 0, 0, 0.6)',
                                            marginBottom: 16
                                          }}
                                        >
                                          Apabila dokumen belum diterima pihak
                                          Bareksa hingga tanggal di atas,
                                          pendaftaran tidak dapat diproses lebih
                                          lanjut dan akan berstatus “Gagal”.
                                          Kamu perlu mengulang proses pengisian
                                          data dari awal saat status pendaftaran
                                          telah berubah.
                                        </p>
                                        <p
                                          style={{
                                            fontWeight: 400,
                                            fontSize: 16,
                                            lineHeight: '24px',
                                            color: 'rgba(0, 0, 0, 0.6)',
                                            marginBottom: 16
                                          }}
                                        >
                                          Bila membutuhkan bantuan lebih lanjut,
                                          silakan hubungi CS Bareksa melalui
                                          Pusat Bantuan.
                                        </p>
                                        <p
                                          style={{
                                            fontWeight: 'bolder',
                                            fontSize: 14,
                                            lineHeight: '24px',
                                            color: 'rgba(0, 0, 0, 0.6)'
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
                                          lineHeight: '20px' /* 142.857% */,
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
                                          lineHeight: '20px' /* 142.857% */,
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
                                          lineHeight: '20px' /* 142.857% */,
                                          letterSpacing: '0.25px',
                                          display: 'flex',
                                          alignItems: 'center'
                                        }}
                                      >
                                        <a
                                          href="mailto:cs.saham@bareksa.com"
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
                                          cs.saham@bareksa.com
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
                                          lineHeight: '20px' /* 125% */,
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
                                          lineHeight: '20px' /* 142.857% */,
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
                                        lineHeight: '24px' /* 150% */,
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
                                Kementerian Komunikasi dan Informatika Republik
                                Indonesia.
                              </p>
                              <p
                                style={{
                                  margin: '0 !important',
                                  fontFamily: 'Arial',
                                  fontSize: 12,
                                  fontStyle: 'normal',
                                  fontWeight: 400,
                                  lineHeight: '20px',
                                  /* 166.667% */ letterSpacing: '0.25px',
                                  color: '#808F9F'
                                }}
                              >
                                Seluruh transaksi saham dilakukan dengan izin
                                sebagai Mitra Pemasaran Perantara Pedagang Efek
                                dari OJK yang diberikan kepada PT Bareksa Portal
                                Investasi bekerja sama dengan PT Ciptadana
                                Sekuritas Asia.
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

export default VerificationRDN;
