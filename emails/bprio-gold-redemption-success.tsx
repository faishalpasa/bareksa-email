import * as React from 'react';
import { Img } from '@react-email/components';

import LayoutBprio from './static/components/Layout/bprio';

const TABLE_CELL_VALUE = '{{.value}}';

const TABLE_REDEMPTION_ROWS = [
  {
    field: 'Nomor Order',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Waktu Order',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Nilai Penjualan Bersih',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Berat Emas',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Biaya Penjualan',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Biaya Transfer',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Jumlah Dana Cair',
    value: TABLE_CELL_VALUE
  }
];

const TABLE_BANK_ACCOUNT_ROWS = [
  {
    field: 'Nama Rekening Penerima',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Bank Penerima',
    value: TABLE_CELL_VALUE
  },
  {
    field: 'Nomor Rekening Penerima',
    value: TABLE_CELL_VALUE
  }
];

const BprioGoldRedemptionSuccess = () => {
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
                                    Penjualan Emas Berhasil
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
                                              margin: 0,
                                              marginBottom: 16
                                            }}
                                          >
                                            Penjualan emas Treasury Anda telah
                                            selesai diproses. Berikut rincian
                                            penjualan Anda:
                                          </p>

                                          <div
                                            style={{
                                              padding: 12,
                                              border: '1px solid #0000001F'
                                            }}
                                          >
                                            <table style={{ width: '100%' }}>
                                              <tbody>
                                                <tr>
                                                  <td
                                                    style={{
                                                      borderBottom:
                                                        '1px solid #0000001F',
                                                      padding: '12px',
                                                      paddingRight: '4px',
                                                      width: 24
                                                    }}
                                                  >
                                                    <Img
                                                      src="https://images.bareksa.com/logo/partnership/treasury-circle-bg-brown-4x.png"
                                                      style={{
                                                        width: 24,
                                                        height: 24
                                                      }}
                                                    />
                                                  </td>
                                                  <td
                                                    style={{
                                                      borderBottom:
                                                        '1px solid #0000001F',
                                                      padding: '12px',
                                                      paddingLeft: '4px'
                                                    }}
                                                  >
                                                    <span
                                                      style={{
                                                        fontFamily: 'Lato',
                                                        fontWeight: 700,
                                                        fontSize: 20,
                                                        lineHeight: '28px',
                                                        letterSpacing: 0,
                                                        textAlign: 'center',
                                                        margin: 0
                                                      }}
                                                    >
                                                      Treasury
                                                    </span>
                                                  </td>
                                                </tr>
                                                {TABLE_REDEMPTION_ROWS.map(
                                                  (row, index) => (
                                                    <tr key={index}>
                                                      <td
                                                        style={{
                                                          borderBottom:
                                                            index ===
                                                            TABLE_REDEMPTION_ROWS.length -
                                                              1
                                                              ? 'none'
                                                              : '1px solid #0000001F',
                                                          padding: '12px'
                                                        }}
                                                        colSpan={2}
                                                      >
                                                        <p
                                                          style={{
                                                            fontFamily: 'Lato',
                                                            fontWeight: 400,
                                                            fontStyle:
                                                              'Regular',
                                                            fontSize: 12,
                                                            lineHeight: '16px',
                                                            letterSpacing: 0,
                                                            margin: 0,
                                                            color: '#7D8188'
                                                          }}
                                                        >
                                                          {row.field}
                                                        </p>

                                                        <p
                                                          style={{
                                                            fontFamily: 'Lato',
                                                            fontWeight: 600,
                                                            fontStyle:
                                                              'SemiBold',
                                                            fontSize: 14,
                                                            lineHeight: '20px',
                                                            letterSpacing: 0,
                                                            margin: 0,
                                                            color: '#000000DE'
                                                          }}
                                                        >
                                                          {row.value}
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  )
                                                )}
                                              </tbody>
                                            </table>
                                          </div>

                                          <div
                                            style={{
                                              padding: 12,
                                              border: '1px solid #0000001F',
                                              marginTop: 16
                                            }}
                                          >
                                            <table style={{ width: '100%' }}>
                                              <tbody>
                                                {TABLE_BANK_ACCOUNT_ROWS.map(
                                                  (row, index) => (
                                                    <tr key={index}>
                                                      <td
                                                        style={{
                                                          borderBottom:
                                                            index ===
                                                            TABLE_BANK_ACCOUNT_ROWS.length -
                                                              1
                                                              ? 'none'
                                                              : '1px solid #0000001F',
                                                          padding: '12px'
                                                        }}
                                                        colSpan={2}
                                                      >
                                                        <p
                                                          style={{
                                                            fontFamily: 'Lato',
                                                            fontWeight: 400,
                                                            fontStyle:
                                                              'Regular',
                                                            fontSize: 12,
                                                            lineHeight: '16px',
                                                            letterSpacing: 0,
                                                            margin: 0,
                                                            color: '#7D8188'
                                                          }}
                                                        >
                                                          {row.field}
                                                        </p>

                                                        <p
                                                          style={{
                                                            fontFamily: 'Lato',
                                                            fontWeight: 600,
                                                            fontStyle:
                                                              'SemiBold',
                                                            fontSize: 14,
                                                            lineHeight: '20px',
                                                            letterSpacing: 0,
                                                            margin: 0,
                                                            color: '#000000DE'
                                                          }}
                                                        >
                                                          {row.value}
                                                        </p>
                                                      </td>
                                                    </tr>
                                                  )
                                                )}
                                              </tbody>
                                            </table>
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

export default BprioGoldRedemptionSuccess;
