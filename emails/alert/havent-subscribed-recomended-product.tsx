import * as React from "react";
import { Text, Section, Row, Column, Button } from "@react-email/components";

import Layout from "../static/components/Layout";
import ContactReksadana from "../static/components/Contact/ContactReksadana";
import Header from "../static/components/Header";
import FooterReksadana from "../static/components/Footer/Reksadana";

const ZeroPorto = () => {
  return (
    <Layout>
      <Header title="Rekomendasi Reksa Dana" bgColor="#F7F9FA" />

      <Section className="p-6">
        <Row className="mb-4">
          <Column>
            <Text className="text-base font-arial m-0 font-normal text-[#3D4751]">
              Halo <span className="font-bold">{`{{.name}}`}</span>
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <Text className="text-base font-arial m-0 font-normal text-[#3D4751]">
              Sudah siap mengecek analisa investasi dan potensi keuntunganmu? Inilah kinerja portofoliomu per <span className="font-bold">[xx month yyyy]</span>.
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <table className="w-full border-none">
              <thead>
                <tr>
                  <td className="text-[#3D4751] font-arial font-bold text-sm p-3 w-1/3">
                    Tipe Reksa Dana
                  </td>
                  <td className="text-[#3D4751] font-arial font-bold text-sm p-3 w-1/3">
                    Nama Reksa Dana
                  </td>
                  <td className="text-[#3D4751] font-arial font-bold text-sm p-3 w-1/3">
                    Imbal Hasil
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F7F9FA]">
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Tipe Reksa Dana]
                  </td>
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Nama Reksa Dana]
                  </td>
                  <td className="text-[#17A349] font-arial font-normal text-sm p-3">
                    +99,99%
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Tipe Reksa Dana]
                  </td>
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Nama Reksa Dana]
                  </td>
                  <td className="text-[#E63312] font-arial font-normal text-sm p-3">
                    -99,99%
                  </td>
                </tr>
                <tr className="bg-[#F7F9FA]">
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Tipe Reksa Dana]
                  </td>
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Nama Reksa Dana]
                  </td>
                  <td className="text-[#5C6E7D] font-arial font-normal text-sm p-3">
                    0,00%
                  </td>
                </tr>
              </tbody>
            </table>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <Text className="text-base font-arial m-0 font-normal text-[#3D4751]">
              Ayo optimalkan keuntungan investasimu dan selesaikan transaksi sebelum pukul 13.00 WIB untuk mendapatkan harga/unit hari ini.
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <table className="w-full border-none">
              <thead>
                <tr>
                  <td className="text-[#3D4751] font-arial font-bold text-sm p-3 w-1/3">
                    Tipe Reksa Dana
                  </td>
                  <td className="text-[#3D4751] font-arial font-bold text-sm p-3 w-1/3">
                    Nama Reksa Dana
                  </td>
                  <td className="text-[#3D4751] font-arial font-bold text-sm p-3 w-1/3">
                    Imbal Hasil/X Bulan <span className="text-red-500">*</span>
                  </td>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-[#F7F9FA]">
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Tipe Reksa Dana]
                  </td>
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Nama Reksa Dana]
                  </td>
                  <td className="text-[#17A349] font-arial font-normal text-sm p-3">
                    +99,99%
                  </td>
                </tr>
                <tr className="bg-white">
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Tipe Reksa Dana]
                  </td>
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Nama Reksa Dana]
                  </td>
                  <td className="text-[#E63312] font-arial font-normal text-sm p-3">
                    -99,99%
                  </td>
                </tr>
                <tr className="bg-[#F7F9FA]">
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Tipe Reksa Dana]
                  </td>
                  <td className="text-[#3D4751] font-arial font-normal text-sm p-3">
                    [Nama Reksa Dana]
                  </td>
                  <td className="text-[#5C6E7D] font-arial font-normal text-sm p-3">
                    0,00%
                  </td>
                </tr>
              </tbody>
            </table>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <Text className="text-sm font-arial m-0 font-normal text-[#697C8E]">
              <span className="text-red-500">*</span><i>Berdasarkan kinerja di masa lalu</i>
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <Text className="text-base font-arial m-0 font-normal text-[#3D4751]">
              Ayo optimalkan keuntungan investasimu dan selesaikan transaksi sebelum pukul 13.00 WIB untuk mendapatkan harga/unit hari ini.
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column className="text-center">
            <Button className="bg-[#22B252] text-white text-base font-bold font-nunito py-3 px-20 rounded-full w-fit" href={`{{.open_app}}`}>
              Buka Aplikasi Bareksa
            </Button>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <Text className="text-sm font-arial m-0 font-normal text-[#3D4751]">
              Bila membutuhkan bantuan lebih lanjut, silakan hubungi CS melalui Pusat Bantuan.
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <Text className="text-sm font-arial m-0 font-bold text-[#3D4751]">
              Raih <i>financial freedom</i> bersama Bareksa, #AmanPastiBisa
            </Text>
          </Column>
        </Row>
      </Section>

      <ContactReksadana />
      <FooterReksadana />
    </Layout>
  );
};

export default ZeroPorto;