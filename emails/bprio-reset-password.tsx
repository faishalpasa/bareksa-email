import * as React from 'react';
import { Img } from '@react-email/components';

import LayoutBprio from './static/components/Layout/bprio';

const VerificationRDN = () => {
  return (
    <LayoutBprio>
      <table
        bgcolor="#F5F5F5"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        width="100%"
      >
        <tbody>
          <tr>
            <td>
              <table
                bgcolor="#F5F5F5"
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
                      <Img
                        src="https://images.bareksa.com/email/bprio-gold-header_2.png"
                        style={{
                          width: '100%'
                        }}
                      />
                    </td>
                  </tr>
                  {/* Bareksa Logo */}
                  <tr>
                    <td>
                      <div
                        style={{
                          padding: '0 24px',
                          backgroundColor: '#F5F5F5'
                        }}
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
                                    backgroundColor: '#97624A',
                                    borderTopLeftRadius: 12,
                                    borderTopRightRadius: 12,
                                    padding: '16px 12px'
                                  }}
                                >
                                  <span
                                    style={{
                                      color: '#fff',
                                      margin: 0,
                                      fontSize: 24,
                                      fontFamily: 'Open Sans',
                                      fontWeight: 600
                                    }}
                                  >
                                    Reset Password Bareksa Prioritas
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
                                >
                                  {/* Header Greeting */}
                                  <tbody>
                                    <tr>
                                      <td>
                                        <div
                                          style={{
                                            color: '#3D4751',
                                            fontFamily: 'Lato',
                                            fontSize: 16,
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '24px',
                                            padding: '24px',
                                            borderBottomLeftRadius: 12,
                                            borderBottomRightRadius: 12,
                                            backgroundColor: '#FFF'
                                          }}
                                        >
                                          <p style={{ margin: '0px 0px 16px' }}>
                                            Kepada Yth,
                                          </p>

                                          <p style={{ margin: '0px 0px 16px' }}>
                                            Bapak/Ibu <b>{`{{.name}}`}</b>, ,
                                          </p>
                                          <p
                                            style={{
                                              fontFamily: 'Lato',
                                              fontSize: 16,
                                              fontWeight: 400,
                                              lineHeight: '24px',
                                              color: '#3D4751',
                                              margin: 0
                                            }}
                                          >
                                            Anda lupa password?
                                          </p>

                                          <p
                                            style={{
                                              fontFamily: 'Lato',
                                              fontSize: 16,
                                              fontWeight: 400,
                                              lineHeight: '24px',
                                              color: '#3D4751',
                                              margin: '0px 0px 16px'
                                            }}
                                          >
                                            Kami menerima permintaan untuk reset
                                            password akun Bareksa Prioritas
                                            anda. Berikut adalah password baru
                                            anda:
                                          </p>

                                          <p
                                            style={{
                                              fontFamily: 'Lato',
                                              fontSize: 16,
                                              fontWeight: 600,
                                              lineHeight: '24px',
                                              color: '#3D4751',
                                              margin: '0px 0px 16px'
                                            }}
                                          >
                                            {`{{.password}}`}
                                          </p>

                                          <p
                                            style={{
                                              fontFamily: 'Lato',
                                              fontSize: 16,
                                              fontWeight: 400,
                                              lineHeight: '24px',
                                              color: '#3D4751',
                                              margin: '0px 0px 16px'
                                            }}
                                          >
                                            Untuk melakukan reset password,
                                            silakan klik tombol dibawah.
                                          </p>

                                          <div
                                            style={{
                                              fontWeight: 700,
                                              fontSize: 16,
                                              lineHeight: '20px',
                                              color: 'rgba(0, 0, 0, 0.6)',
                                              textAlign: 'center',
                                              marginBottom: 8,
                                              justifyContent: 'center',
                                              fontStyle: 'normal',
                                              width: 'fit-content'
                                            }}
                                          >
                                            <a
                                              href="{{.open_app}}"
                                              style={{
                                                padding: '8px 55px',
                                                display: 'block',
                                                borderRadius: 24,
                                                backgroundColor: '#22B252',
                                                textDecoration: 'none',
                                                fontFamily:
                                                  '"Nunito Sans", sans-serif',
                                                color: '#FFFFFF'
                                              }}
                                            >
                                              Reset Password
                                            </a>
                                          </div>
                                          <p
                                            style={{
                                              fontWeight: 400,
                                              fontSize: 16,
                                              lineHeight: '24px',
                                              color: 'rgba(0, 0, 0, 0.6)',
                                              marginBottom: 16,
                                              fontFamily: 'Lato'
                                            }}
                                          >
                                            Atau salin dan buka URL berikut pada
                                            browser anda:
                                            <br />
                                            <a
                                              href="{{.url}}"
                                              style={{
                                                color: '#1E8FE1'
                                              }}
                                            >
                                              {`{{.url}}`}
                                            </a>
                                          </p>
                                          <p
                                            style={{
                                              fontWeight: 400,
                                              fontSize: 16,
                                              lineHeight: '24px',
                                              color: 'rgba(0, 0, 0, 0.6)',
                                              marginBottom: 16,
                                              fontFamily: 'Lato'
                                            }}
                                          >
                                            Bila membutuhkan bantuan, silakan
                                            hubungi Advisor Anda atau Customer
                                            Service kami pada hari kerja pukul
                                            09.00 - 17.00 WIB.
                                          </p>
                                        </div>
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
                                  padding: '0px 24px',
                                  backgroundColor: '#F5F5F5'
                                }}
                              >
                                <div
                                  style={{
                                    padding: '24px'
                                  }}
                                >
                                  <p
                                    style={{
                                      color: '#5C6E7D',
                                      fontFamily: 'Lato',
                                      fontSize: 14,
                                      fontStyle: 'normal',
                                      fontWeight: 700,
                                      lineHeight: '24px',
                                      margin: '0 0 8px'
                                    }}
                                  >
                                    Salam Hangat
                                  </p>
                                  <p
                                    style={{
                                      color: '#5C6E7D',
                                      fontFamily: 'Lato',
                                      fontSize: 14,
                                      fontStyle: 'normal',
                                      lineHeight: '24px',
                                      margin: '0 0 8px'
                                    }}
                                  >
                                    Bareksa Prioritas
                                  </p>

                                  <p
                                    style={{
                                      color: '#5C6E7D',
                                      fontFamily: 'Lato',
                                      fontSize: 12,
                                      fontStyle: 'normal',
                                      lineHeight: '20px',
                                      margin: 0
                                    }}
                                  >
                                    Telp.{' '}
                                    <a
                                      href="tel:021-80676767"
                                      style={{
                                        color: '#1E8FE1'
                                      }}
                                    >
                                      021-80676767
                                    </a>
                                  </p>
                                  <p
                                    style={{
                                      color: '#5C6E7D',
                                      fontFamily: 'Lato',
                                      fontSize: 12,
                                      fontStyle: 'normal',
                                      lineHeight: '20px',
                                      margin: 0
                                    }}
                                  >
                                    Email.{' '}
                                    <a
                                      href="mailto:cs@bareksa-prioritas.com"
                                      style={{
                                        color: '#1E8FE1'
                                      }}
                                    >
                                      cs@bareksa-prioritas.com
                                    </a>
                                  </p>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  {/* Email Footer */}
                  <tr>
                    <td style={{ backgroundColor: '#040404' }}>
                      <Img
                        src="https://images.bareksa.com/email/bprio-gold-footer.png"
                        style={{
                          width: '100%'
                        }}
                      />
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
                                      <div style={{ padding: '12px 24px' }}>
                                        <p
                                          style={{
                                            textAlign: 'center',
                                            color: '#fff',
                                            fontWeight: 400,
                                            fontSize: 12,
                                            fontFamily: 'Lato',
                                            margin: '0px 0px 36px'
                                          }}
                                        >
                                          Copyright © 2023 Bareksa Prioritas.
                                          All rights reserved.
                                        </p>

                                        <p
                                          style={{
                                            fontFamily: 'Arial',
                                            fontSize: 12,
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '20px',
                                            /* 166.667% */ letterSpacing:
                                              '0.25px',
                                            color: '#FFFFFFBD'
                                          }}
                                        >
                                          Seluruh produk investasi keuangan yang
                                          dipasarkan melalui situs bareksa.com
                                          dan aplikasi Bareksa Super App
                                          Investasi dikelola dan dikembangkan
                                          oleh PT Bareksa Marketplace Indonesia
                                          yang telah mendapatkan Izin
                                          Penyelenggara Sistem Elektronik dari
                                          Kementerian Komunikasi dan Informatika
                                          Republik Indonesia.
                                        </p>
                                        <p
                                          style={{
                                            margin: '0 !important',
                                            fontFamily: 'Arial',
                                            fontSize: 12,
                                            fontStyle: 'normal',
                                            fontWeight: 400,
                                            lineHeight: '20px',
                                            /* 166.667% */ letterSpacing:
                                              '0.25px',
                                            color: '#FFFFFFBD'
                                          }}
                                        >
                                          Seluruh transaksi Emas Digital
                                          didasarkan pada kerja sama antara PT
                                          Bareksa Inovasi Digital dan
                                          perusahaan-perusahaan yang telah
                                          memiliki izin sebagai Pedagang Fisik
                                          Emas Digital dari BAPPEBTI dan OJK.
                                        </p>
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
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </LayoutBprio>
  );
};

export default VerificationRDN;
