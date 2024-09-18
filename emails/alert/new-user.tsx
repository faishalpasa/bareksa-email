import * as React from "react";
import { Text, Section, Row, Column, Img } from "@react-email/components";

import Layout from "../static/components/layout";
import Header from "../static/components/header";
import FooterReksadana from "../static/components/footer/reksadana";

const NewUser = () => {
  return (
    <Layout>
      <Header title="Rekomendasi Reksa Dana" bgColor="#F7F9FA" />

      <Section className="p-6">
        <Row>
          <Column>
            <Text className="text-base font-arial m-0 mb-2 font-normal text-[#3D4751]">Halo <span className="font-bold">{`{{name}}`}</span></Text>
          </Column>
        </Row>
        <Row>
          <Column>
            <Text className="text-base font-arial m-0 mb-2 font-normal text-[#3D4751]">Ini saatnya kamu kembali berinvestasi reksa dana yang dapat memberikan potensi keuntungan maksimal. Tim Analis Bareksa telah mengkurasi produk-produk reksa dana pilihan untukmu.</Text>
          </Column>
        </Row>
      </Section>


      <Section className="p-6">
        <Row>
          <Column>
            <Text className="text-base font-arial m-0 mb-4 font-bold text-[#5C6E7D]">Pusat Bantuan Bareksa</Text>
          </Column>
        </Row>
        
        <Row>
          <Column className="flex gap-4">
            <a href="" className="bg-[#EFF1F3] flex items-center gap-2 px-4 py-2 no-underline rounded">
              <Img src="https://images.bareksa.com/icons/email-stock-comment.png" className="w-5 h-5" />
              <Text className="text-sm font-arial m-0 font-normal text-[#000000]">Live Chat</Text>
            </a>
            <a href="tel:02180676767" className="bg-[#EFF1F3] flex items-center gap-2 px-4 py-2 no-underline rounded">
              <Img src="https://images.bareksa.com/icons/email-stock-phone.png" className="w-5 h-5" />
              <Text className="text-sm font-arial m-0 font-normal text-[#000000]">(021) 80676767</Text>
            </a>
            <a href="mailto:cs@bareksa.com" className="bg-[#EFF1F3] flex items-center gap-2 px-4 py-2 no-underline rounded">
              <Img src="https://images.bareksa.com/icons/email-stock-envelope.png" className="w-5 h-5" />
              <Text className="text-sm font-arial m-0 font-normal text-[#000000]">cs@bareksa.com</Text>
            </a>
          </Column>
        </Row>
      </Section>

      <FooterReksadana />
    </Layout>
  );
};

export default NewUser;