import * as React from "react";
import { Text, Section, Row, Column, Button } from "@react-email/components";

import Layout from "../static/components/Layout";
import ContactStock from "../static/components/Contact/ContactStock";
import Header from "../static/components/Header";
import FooterStock from "../static/components/Footer/Stock";

const FailedRegistrationRDN = () => {
  return (
    <Layout>
      <Header title="Pendaftaran Gagal" bgColor="#FFF3E0" color="#F57902" />

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
              Maaf, pembuatan akun Bareksa Saham kamu tidak dapat dilanjutkan.
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column>
            <div className="p-3 bg-[#EFF1F3]">
              <Text className="text-sm font-arial m-0 font-normal text-[#5C6E7D]">
                Nama
              </Text>
              <Text className="text-sm font-arial m-0 mb-3 font-bold text-[#2B323A]">
                {`{{.name}}`}
              </Text>

              <Text className="text-sm font-arial m-0 font-normal text-[#5C6E7D]">
                Alasan
              </Text>
              <Text className="text-sm font-arial m-0 mb-3 font-bold text-[#2B323A]">
                Salinan fisik (hard copy) dokumen tidak dikirim sampai waktu yang ditentukan.
              </Text>
            </div>
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
              Tak perlu khawatir, setelah ini, kamu dapat melakukan pendaftaran kembali melalui aplikasi Bareksa. Kini, pendaftaran untuk semua jenis rekening akan diproses dalam 1 hari kerja bursa (bila dilakukan sebelum pukul 12.00 WIB).
            </Text>
          </Column>
        </Row>
        <Row className="mb-4">
          <Column className="text-center">
            <Button className="bg-[#22B252] text-white text-base font-bold font-nunito py-3 px-20 rounded-full w-fit" href={`{{.open_app}}`}>
              Daftar Saham Lagi
            </Button>
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