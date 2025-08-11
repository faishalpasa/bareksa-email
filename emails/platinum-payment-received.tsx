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
            <div className="bg-[#EFF1F3] rounded-md py-6 px-3 mb-6">
              <p className="text-[#2B323A] text-xl font-semibold leading-6 m-0">
                Pembayaraan Diterima
              </p>
            </div>
          </Section>

          <Section className="px-6 bg-white">
            <Text className="text-[#3D4751] text-base font-normal leading-6">
              Halo <b>{'{{.name}}'}</b>,
            </Text>
            <Text className="text-[#3D4751] text-base font-normal leading-6">
              Pembayaran kamu sudah berhasil kami terima. Berikut rincian
              pembelian kamu:
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
              Pembelian akan diproses dalam waktu maksimal 2 hari kerja.
            </Text>
          </Section>

          <DefaultFooter />
        </Section>
      </Tailwind>
    </Layout>
  );
};

export default TestingTemplate;
