import React from 'react';
import {
  Column,
  Img,
  Row,
  Section,
  Tailwind,
  Text,
  Hr
} from '@react-email/components';
import Layout from './static/components/Layout';
import DefaultHeader from './static/components/Header/Default';
import DefaultFooter from './static/components/Footer/Default';

const TestingTemplate: React.FC = () => {
  return (
    <Layout>
      <Tailwind>
        <Section width={600} style={{ fontFamily: 'Arial' }}>
          <DefaultHeader />

          <Section className="px-6 bg-white">
            <Text className="text-[#3D4751] text-base font-normal leading-6">
              Halo <b>{'{{.name}}'}</b>,
            </Text>
            <Text className="text-[#3D4751] text-base font-normal leading-6">
              Berikut detail transaksi Reksa Dana Anda.
            </Text>
          </Section>

          <Section className="px-6 bg-white">
            <Section className="bg-[#F7F9FA]">
              <Row className="p-3">
                <Column className="w-10 pr-4">
                  <Img
                    src="https://placehold.co/400x400"
                    className="size-10 rounded-full"
                  />
                </Column>
                <Column>
                  <Text className="text-[#00000099] text-xs font-normal leading-4 m-0 mb-1">
                    Pendapatan Tetap
                  </Text>
                  <Text className="text-[#000000DE] text-base font-bold leading-6 m-0">
                    Syailendra Fixed Income Fund Kapital
                  </Text>
                </Column>
              </Row>

              <Hr className="mx-3 w-auto" />

              <Row className="px-3 pb-3 pt-3">
                <Column className="bg-[#E1F5FE] py-1 px-2 rounded-l-md w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Order Dikelola RM
                  </Text>
                </Column>
                <Column className="bg-[#E1F5FE] py-1 px-2 text-right rounded-r-md w-1/2">
                  <div className="bg-[#00579A] rounded-md w-fit mr-0 ml-auto py-1 px-2">
                    <Text className="text-white text-sm font-semibold leading-4 m-0">
                      Bareksa Platinum
                    </Text>
                  </div>
                </Column>
              </Row>

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Nomor Order
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#2B323A] text-base font-normal leading-4 m-0">
                    {'{{.order_number}}'}
                  </Text>
                </Column>
              </Row>

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Nomor Invoice
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#2B323A] text-base font-normal leading-4 m-0">
                    {'{{.invoice_number}}'}
                  </Text>
                </Column>
              </Row>

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Tanggal Order
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#2B323A] text-base font-normal leading-4 m-0">
                    {'{{.order_date}}'}
                  </Text>
                </Column>
              </Row>

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Nilai Pembelian
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#2B323A] text-base font-normal leading-4 m-0">
                    {'{{.purchase_value}}'}
                  </Text>
                </Column>
              </Row>

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Biaya Pembelian
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#2B323A] text-base font-normal leading-4 m-0">
                    {'{{.purchase_fee}}'}
                  </Text>
                </Column>
              </Row>

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Biaya Pembayaran
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#2B323A] text-base font-normal leading-4 m-0">
                    {'{{.payment_fee}}'}
                  </Text>
                </Column>
              </Row>

              <Row className="px-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-normal leading-6 m-0">
                    Biaya Admin
                  </Text>
                  <Text className="text-[#697C8E] text-xs font-normal leading-4 m-0">
                    *Untuk pembayaran bea meterai & peningkatan kualitas
                    layanan.
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2  align-baseline">
                  <Text className="text-[#2B323A] text-base font-normal leading-4 m-0">
                    {'{{.purchase_value}}'}
                  </Text>
                </Column>
              </Row>

              <Hr className="mx-3 w-auto border-dashed" />

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-semibold leading-6 m-0">
                    Total
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2  align-baseline">
                  <Text className="text-[#2B323A] text-base font-semibold leading-4 m-0">
                    {'{{.total_value}}'}
                  </Text>
                </Column>
              </Row>

              <Row className="px-3 pb-3">
                <Column className="py-1 px-2 w-1/2">
                  <Text className="text-[#697C8E] text-base font-semibold leading-6 m-0">
                    Metode Pembayaran
                  </Text>
                </Column>
                <Column className="py-1 px-2 w-1/2  align-baseline">
                  <Text className="text-[#2B323A] text-base font-semibold leading-4 m-0">
                    {'{{.payment_method}}'}
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>

          <Section className="px-6 bg-white">
            <Text className="text-[#3D4751] text-base font-normal leading-6">
              Berikut adalah nomor telepon Anda yang terdaftar di sistem Bareksa
              Prioritas, yang juga menerima OTP transaksi ini:
            </Text>
          </Section>

          <Section className="px-6 bg-white">
            <Section className="bg-[#F7F9FA]">
              <Text className="text-[#2B323A] text-xl font-semibold leading-6">
                {'{{.phone_number}}'}
              </Text>
            </Section>
          </Section>

          <Section className="px-6 bg-white">
            <Text className="text-[#3D4751] text-base font-normal leading-6">
              Berikut adalah kode OTP kamu:
            </Text>
          </Section>

          <Section className="px-6 bg-white">
            <Section className="bg-[#F7F9FA]">
              <Text className="text-[#2B323A] text-3xl font-semibold leading-6">
                {'{{.otp}}'}
              </Text>
            </Section>
          </Section>

          <Section className="px-6 bg-white">
            <Text className="text-[#3D4751] text-base font-normal leading-6">
              PERINGATAN! demi keamanan transaksi, jangan membagikan OTP kepada
              siapapun, kecuali Advisor Anda yang akan menjalankan transaksi.
            </Text>
          </Section>

          <Section className="px-6 bg-white">
            <Section className="bg-[#E1F5FE] p-3">
              <Row className="mb-2">
                <Column className="size-5 pr-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    className="align-bottom"
                  >
                    <path
                      d="M9.99984 1.66602C5.4165 1.66602 1.6665 5.41602 1.6665 9.99935C1.6665 14.5827 5.4165 18.3327 9.99984 18.3327C14.5832 18.3327 18.3332 14.5827 18.3332 9.99935C18.3332 5.41602 14.5832 1.66602 9.99984 1.66602ZM10.8332 13.3327C10.8332 13.8327 10.4998 14.166 9.99984 14.166C9.49984 14.166 9.1665 13.8327 9.1665 13.3327V9.99935C9.1665 9.49935 9.49984 9.16602 9.99984 9.16602C10.4998 9.16602 10.8332 9.49935 10.8332 9.99935V13.3327ZM9.99984 7.49935C9.49984 7.49935 9.1665 7.16602 9.1665 6.66602C9.1665 6.16602 9.49984 5.83268 9.99984 5.83268C10.4998 5.83268 10.8332 6.16602 10.8332 6.66602C10.8332 7.16602 10.4998 7.49935 9.99984 7.49935Z"
                      fill="#0188D0"
                    />
                  </svg>
                </Column>
                <Column>
                  <Text className="text-[#3D4751] text-sm font-semibold leading-5 m-0">
                    Ketentuan Penting
                  </Text>
                </Column>
              </Row>
              <Row className="mb-0">
                <Column className="size-5 pr-1 align-baseline">
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0 text-right">
                    1.
                  </Text>
                </Column>
                <Column>
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0">
                    Instruksi Pembelian yang masuk ke dalam sistem Bareksa
                    Prioritas sebelum pukul 13:00 WIB, akan mengikuti
                    perhitungan NAB pada hari yang sama.
                  </Text>
                </Column>
              </Row>
              <Row className="mb-0">
                <Column className="size-5 pr-1 align-baseline">
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0 text-right">
                    2.
                  </Text>
                </Column>
                <Column>
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0">
                    Instruksi Pembelian yang tercatat masuk ke dalam sistem
                    Bareksa Prioritas setelah pukul 13:00 WIB, akan mengikuti
                    perhitungan NAB hari berikutnya.
                  </Text>
                </Column>
              </Row>
              <Row className="mb-0">
                <Column className="size-5 pr-1 align-baseline">
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0 text-right">
                    3.
                  </Text>
                </Column>
                <Column>
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0">
                    Pastikan nama dan nomor rekening bank Anda sudah sesuai
                    dengan nama Pemegang Unit Penyertaan Reksa Dana.
                  </Text>
                </Column>
              </Row>
              <Row className="mb-0">
                <Column className="size-5 pr-1 align-baseline">
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0 text-right">
                    4.
                  </Text>
                </Column>
                <Column>
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0">
                    Instruksi Pembelian akan otomatis dibatalkan jika ketentuan
                    unit minimum dan/atau saldo minimum Reksa Dana tidak sesuai
                    dengan batas minimum Pembelian unit penyertaan (sesuai
                    ketentuan prospektus).
                  </Text>
                </Column>
              </Row>
              <Row className="mb-0">
                <Column className="size-5 pr-1 align-baseline">
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0 text-right">
                    5.
                  </Text>
                </Column>
                <Column>
                  <Text className="text-[#3D4751] text-sm font-normal leading-5 m-0">
                    Bank Kustodian akan menjalankan transaksi Pembelian Reksa
                    Dana selambat-lambatnya 7 (tujuh) hari kerja. Mohon hubungi
                    kami, apabila dalam batas waktu terselout, transaksi Anda
                    belum dijalankan.
                  </Text>
                </Column>
              </Row>
            </Section>
          </Section>

          <DefaultFooter />
        </Section>
      </Tailwind>
    </Layout>
  );
};

export default TestingTemplate;
