
"use client";

import { Footer, FooterCopyright, FooterIcon, FooterLink, FooterLinkGroup, FooterTitle } from "flowbite-react";

export default function Footer1() {
  return (
    <Footer style={{ backgroundColor: '#1e1e2f' }} className="text-white"> 
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4">
          <div>
            <FooterTitle title="Contact Us" />
            <FooterLinkGroup row style={{gap:"10px"}} >
              <FooterLink href="https://github.com/rupampaul123">Github </FooterLink>
              <FooterLink href="https://www.instagram.com/rupampaul_/">Instagram </FooterLink>
              <FooterLink href="https://www.linkedin.com/in/rupam-paul-bag-66bb3b307/">LinkedIn </FooterLink>
            </FooterLinkGroup>
          </div>
        </div>
      </div>
    </Footer>
  );
}
