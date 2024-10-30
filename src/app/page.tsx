 'use client'
import React, { use } from 'react';
import { useState,useEffect } from 'react';
import Navbar from '@/app/components/homePageCom/Navbar';
import Data from '@/app/components/homePageCom/Data';
import Investors from '@/app/components/homePageCom/Investors';
import { SDKIntro } from '@/app/components/homePageCom/SDKIntro/index';
import Footer from '@/app/components/homePageCom/Footer';
import Partners from '@/app/components/homePageCom/Partners';
import Link from '@/app/components/homePageCom/common/Link';
import LinkMobile from '@/app/components/homePageCom/common/LinkMobile';
import { FooterLink } from '@/app/components/homePageCom/common/FooterLink';
import { NavbarNearIcon,RefTokenIcon,Logo} from './components/layoutIcon/Icon';
import { getAuthenticationHeaders } from '@/utils/signature';

const HomePage = () => {
  const [price, setPrice] = useState('');
  useEffect(() => {
    fetch('https://api.ref.finance/get-token-price?token_id=token.v2.ref-finance.near', {
      method: 'GET',
      headers: getAuthenticationHeaders('/get-token-price')
    })
      .then(response => response.json())
      .then(data => {
        const formattedPrice = Number(data.price).toFixed(2);
        setPrice(formattedPrice);
      })
      .catch(error => {
        console.error('Error fetching price:', error);
      });
  }, []);
  return (
    <div className="min-h-screen bg-dark-30">
      <header>
        <Navbar />
      </header>
      <div className="mx-auto lg:px-[130px] sm:mt-[94px]">
        <section className="mx-auto">
          <div className="lg:hidden w-full flex flex-col items-center justify-center">
            <Logo />
            <LinkMobile className="mt-5" />
          </div>
          <Data />
          <SDKIntro />
          <Investors />
          <Partners />
        </section>
      </div>
      <footer
        className="border border-r-0 border-l-0  pt-[100px] sm:hidden"
        style={{
          borderColor: 'rgba(255,255,255,.2)'
        }}
      >
        <div className="px-[130px]">
          <Footer />
        </div>
      </footer>

      <footer
        className="mt-[131px] lg:hidden"
      >
        <div className="px-[30px]">
          <Footer />
        </div>
      </footer>

      <Link className="py-[100px] w-full flex items-center justify-center sm:hidden" />
      <Link className="py-[100px] px-[30px] w-full grid grid-cols-3 lg:hidden place-items-center gap-y-[30px]" />
      <div className="w-full flex items-center justify-between lg:px-[130px] mt-[84px] sm:hidden">
        <div className="flex justify-between items-center md:hidden">
          <div>
            <FooterLink href="https://immunefi.com/bounty/reffinance/">
              <span className="underline text-gray-60 hover:text-white">Bug Bounty</span>
            </FooterLink>
          </div>
          <div className="mx-9">
            <FooterLink href="https://guide.ref.finance/developers/audits">
              <span className="underline text-gray-60 hover:text-white">Security</span>
            </FooterLink>
          </div>
          <div>
            <FooterLink href="https://app.ref.finance/risks">
              <span className="underline text-gray-60 hover:text-white">Risks</span>
            </FooterLink>
          </div>
        </div>
        <div className="text-gray-60 text-sm">@ 2024 Ref finance Ltd</div>
      </div>
      <div className='h-[38px] w-full bg-dark-320 fixed bottom-0 flex items-center justify-between px-[38px] z-[12] lg:hidden'>
        <div className="flex items-center">
          <RefTokenIcon/>
        <span className='text-gray-10 text-xs mx-1.5'>Price</span>
        <div className="flex items-center">
                {price && <span className="text-white text-xs sm:ml-0 md:ml-0">${price}</span>}
              </div>
        </div>
      <div
            onClick={()=>window.open('https://awesomenear.com/ref-finance')}
            className="flex items-center text-white text-xs cursor-pointer "
          >
            <span className='text-gray-10'>Built on</span>
            <span className="flex items-center ml-3 ">
              <NavbarNearIcon className="mr-1 text-white"></NavbarNearIcon>NEAR
            </span>
          </div>
      </div>
    </div>
  );
};

export default HomePage;
