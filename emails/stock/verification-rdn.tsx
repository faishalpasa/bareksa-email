import * as React from "react";
import { Text, Section, Row, Column } from "@react-email/components";

import Layout from "../static/components/Layout";
import ContactStock from "../static/components/Contact/ContactStock";
import Header from "../static/components/Header";
import FooterStock from "../static/components/Footer/Stock";

const FailedRegistrationRDN = () => {
  return (
    <Layout>
      <Header title="Pembukaan RDN BCA" bgColor="#FFF3E0" color="#F57902" />

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
              Kami masih menunggu salinan fisik (hard copy) dokumenmu untuk melanjutkan pendaftaran Bareksa Saham. Mohon perhatikan deadline dan detail pengiriman dokumen berikut:
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <div className="p-3 bg-[#EFF1F3]">
              <Text className="text-sm font-arial m-0 font-normal text-[#5C6E7D]">
                Deadline pengiriman
              </Text>
              <Text className="text-sm font-arial m-0 mb-3 font-bold text-[#2B323A]">
                Senin, 9 September 2024
              </Text>

              <Text className="text-sm font-arial m-0 font-normal text-[#5C6E7D]">
                Dokumen dan Panduan Pengiriman
              </Text>
              <Text className="text-sm font-arial m-0 mb-3 font-bold text-[#2B323A]">
                Temukan email dengan subject “Bareksa Saham: Pembukaan RDN BCA (Untuk Dicetak & Ditandatangani)”
              </Text>
            </div>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <Text className="text-base font-arial m-0 font-normal text-[#3D4751]">
              Apabila dokumen belum diterima pihak Bareksa hingga tanggal di atas, pendaftaran tidak dapat diproses lebih lanjut dan akan berstatus “Gagal”. Kamu perlu mengulang proses pengisian data dari awal saat status pendaftaran telah berubah.
            </Text>
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

      <ContactStock />
      <FooterStock />
    </Layout>
  );
};

export default FailedRegistrationRDN;