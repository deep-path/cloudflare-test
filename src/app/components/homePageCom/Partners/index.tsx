import React, { useEffect, useState } from 'react';
import {
  PartnersBgIcon,
  PartnersMobileBgIcon,
  PartnersOrderly,
  PartnersOKEX,
  PartnersRainbow,
  PartnerScedeStore,
  PartnerTransak,
  PartnersCoin,
  PartnersPikespeak,
  PartnersFrax,
  PartnersImmunefi,
  PartnersSweatEconomy,
  PartnersBurrow,
  PartnersNear,
  PartnersBlocksec,
  PartnersSlowMist
} from '../../layoutIcon/Icon';
import { MobileGrid,PartnersMobileBg } from '../../icon/SDKIntro';
import styles from './index.module.css'

const Partners = () => {
  return (
    <div className="relative mx-auto overflow-hidden md:mt-[100px]">
      <div className="flex lg:justify-start sm:justify-center sm:font-thin text-white text-2xl">Partners</div>
      <div className="flex justify-start text-[54px] text-white mt-3 font-bold sm:hidden">
        <span className="text-white opacity-30 mr-4">Get</span>
        <span className="text-green-10 mr-4">better</span>
        <span className={styles.gtogether}>together</span>
      </div>
      <div className="fccc text-[40px] text-white mt-[40px] font-bold lg:hidden">
        <div className='frcc'>
        <span className="text-white opacity-30 mr-4">Get</span>
        <span className="text-green-10 mr-4">better</span>
        </div>
        <span className={styles.gtogether}>together</span>
      </div>
      <div className="flex flex-col justify-center items-center mt-11 sm:hidden pb-[215px]">
        <div className="relative z-10 grid grid-cols-4 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersNear
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://near.org/')}
          />
          <PartnersBlocksec
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://blocksec.com/')}
          />
          <PartnersSlowMist
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://slowmist.io/')}
          />
          <PartnersImmunefi
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://immunefi.com/')}
          />
        </div>
        <div className="relative z-10 grid grid-cols-4 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersOKEX
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://www.okex.com/')}
          />
          <PartnersFrax
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://frax.finance/')}
          />
          <PartnersCoin
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://coin98.com/')}
          />
          <PartnersBurrow
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://burrow.finance/')}
          />
          {/* <PartnersOrderly 
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://orderly.network/')}
          /> */}
        </div>
        <div className="relative z-10 grid grid-cols-4 sm:hidden md:hidden gap-x-24 gap-y-16 mt-16 w-full">
          <PartnersSweatEconomy
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://sweateconomy.com/')}
          />
          <PartnersPikespeak
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://pikespeak.ai/')}
          />
          <PartnersRainbow
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://rainbowbridge.app/')}
          />
          <PartnerScedeStore
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://cede.store/')}
          />
          {/* <PartnerTransak
            className="justify-self-center self-center origin-center opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
            onClick={() => window.open('https://transak.com/')}
          /> */}
        </div>

        <PartnersMobileBgIcon className="absolute top-40 lg:hidden"></PartnersMobileBgIcon>
        <PartnersBgIcon className="absolute sm:hidden"></PartnersBgIcon>

        {/* <div
          onClick={goRefApp}
          className="lg:hidden flex font-extrabold items-center justify-center bg-primary rounded-lg cursor-pointer  mt-44 text-sm text-black h-8 w-32 hover:bg-hightGreenColor"
        >
          Launch APP <BannerArrowIcon className="ml-1 transform scale-75" />
        </div> */}
      </div>

      <div className="flex flex-col justify-center items-center mt-11 lg:hidden px-[38px] relative">
      <div className="relative z-10 grid xs:grid-cols-2 md:grid-cols-3 xs:pb-[40px] md:pb-[100px] gap-y-10 gap-x-5 mt-16 w-full items-center">
  <PartnersNear
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://near.org/')}
  />
  <PartnersBlocksec
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://blocksec.com/')}
  />
  <PartnersSlowMist
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://slowmist.io/')}
  />
  <PartnersImmunefi
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://immunefi.com/')}
  />
  <PartnersOKEX
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://www.okex.com/')}
  />
  <PartnersFrax
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://frax.finance/')}
  />
  <PartnersCoin
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://coin98.com/')}
  />
  <PartnersBurrow
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://burrow.finance/')}
  />
  <PartnersSweatEconomy
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://sweateconomy.com/')}
  />
  <PartnersPikespeak
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://pikespeak.ai/')}
  />
  <PartnersRainbow
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://rainbowbridge.app/')}
  />
  <PartnerScedeStore
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://cede.store/')}
  />
  {/* <PartnerTransak
    className="w-[140px] h-[30px] opacity-80 hover:opacity-100 hover:filter hover:drop-shadow-lightWhite cursor-pointer"
    onClick={() => window.open('https://transak.com/')}
  /> */}
</div>


        <MobileGrid className="absolute  h-full w-full"></MobileGrid>
        <PartnersMobileBg className="absolute w-full"/>
      </div>
    </div>
  );
};

export default Partners;
