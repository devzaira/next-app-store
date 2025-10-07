import svgPaths from "./svg-myptlyf1h4";
import imgAutodeskReCapLogo1 from "figma:asset/fbc98c82121b18889b70fe9f49f4fd47ebf42a22.png";
import imgImage52 from "figma:asset/4ae889ad002ce20ef022569ffee411a6bb9b367c.png";
import imgImage53 from "figma:asset/f25fb8559e7b9345471592e162597d6f78c7b237.png";
import imgImage60 from "figma:asset/0ef0fae137344d1ab8567646635087e6c6c4c603.png";
import imgImage59 from "figma:asset/6727d6ab999d1e3372ce7828701c1417f34a6b53.png";
import imgImage65 from "figma:asset/600286426247883aa36f94af8f022ded0a1bc17e.png";

function Categories() {
  return (
    <div className="bg-[#dae0ee] h-[44px] overflow-clip relative rounded-[10px] shrink-0 w-[166px]" data-name="Categories">
      <p className="absolute font-['Amiko:Regular',_sans-serif] leading-[normal] left-[52px] not-italic text-[18px] text-black text-nowrap top-[13px] whitespace-pre">Categories</p>
      <div className="absolute inset-[15.91%_78.62%_15.91%_6.64%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 25 30">
          <path d={svgPaths.p772d880} fill="var(--fill-0, #504E4E)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

function All() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="all">
      <div className="[grid-area:1_/_1] bg-white h-[31.568px] ml-0 mt-0 relative rounded-[5px] w-[128.9px]">
        <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Medium',_sans-serif] font-medium h-[25.543px] leading-[normal] ml-[63.913px] mt-[4px] not-italic relative text-[18px] text-black text-center translate-x-[-50%] w-[43.826px]">All</p>
    </div>
  );
}

function Free() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="free">
      <div className="[grid-area:1_/_1] h-[32px] ml-0 mt-0 relative w-[135px]">
        <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-solid border-white bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
      </div>
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal h-[26px] leading-[normal] ml-[63.853px] mt-[4px] not-italic relative text-[#615f5f] text-[18px] text-center translate-x-[-50%] w-[49.5px]">Free</p>
    </div>
  );
}

function ByRequest() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid place-items-start relative shrink-0" data-name="by request">
      <div className="[grid-area:1_/_1] h-[35px] ml-0 mt-0 w-[141px]" />
      <p className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal h-[26px] leading-[normal] ml-[70.5px] mt-[4px] not-italic relative text-[#615f5f] text-[17px] text-center translate-x-[-50%] w-[110.096px]">Paid</p>
    </div>
  );
}

function Tabs() {
  return (
    <div className="bg-[#dae0ee] box-border content-stretch flex gap-[4px] h-[41px] items-start justify-center leading-[0] overflow-clip px-[5px] py-[3px] relative rounded-[10px] shrink-0 w-[422.9px]" data-name="tabs">
      <All />
      <Free />
      <ByRequest />
    </div>
  );
}

function Split() {
  return (
    <div className="h-[53.8px] relative shrink-0 w-[61px]" data-name="split">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 61 54">
        <g id="split">
          <path d={svgPaths.p27748400} fill="var(--fill-0, #504E4E)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame75() {
  return (
    <div className="absolute content-center flex flex-wrap gap-[335px] items-center justify-between left-0 top-[-10px] w-[899px]">
      <Categories />
      <Tabs />
      <Split />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[54px] left-[9px] top-[20px] w-[899px]">
      <Frame75 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[94px] relative shrink-0 w-full">
      <Frame17 />
    </div>
  );
}

function NavMenuLightTheme() {
  return (
    <div className="h-[64px] relative shrink-0 w-full" data-name="Nav Menu (Light Theme)">
      <div className="overflow-clip size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[64px] items-start pb-[20px] pt-0 px-[30px] relative w-full">
          <Frame13 />
        </div>
      </div>
    </div>
  );
}

function CardAutodesk() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px] top-[30px]" data-name="Card- Autodesk" style={{ left: "calc(100% + 66.643px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Request</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        ReCap
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[34px] left-[54px] top-[30px] w-[40px]" data-name="Autodesk ReCap logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAutodeskReCapLogo1} />
      </div>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px] top-[30px]" data-name="Card" style={{ left: "calc(100% + 255.072px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-4px_-5px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Access
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
    </div>
  );
}

function Card1() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] left-[30px] rounded-[10px] size-[149px] top-[30px]" data-name="Card">
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-4px_-5px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Access
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
    </div>
  );
}

function CardAcrobat() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px] top-[30px]" data-name="Card- Acrobat" style={{ left: "calc(14.286% + 73.286px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute left-[54px] size-[40px] top-[27px]" data-name="image 53">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.44%] left-[-7.69%] max-w-none top-[-7.22%] w-[113.19%]" src={imgImage53} />
        </div>
      </div>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] left-1/2 not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre">Acrobat</p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">Request</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function CardSafari() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px] top-[30px]" data-name="Card- Safari" style={{ left: "calc(28.571% + 115.571px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Safari Browser
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute size-[40px] top-[27px] translate-x-[-50%]" data-name="image 60" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
    </div>
  );
}

function CardAutodesk1() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px] top-[30px]" data-name="Card- Autodesk" style={{ left: "calc(57.143% + 29.429px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Request</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        ReCap
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[34px] left-[54px] top-[30px] w-[40px]" data-name="Autodesk ReCap logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAutodeskReCapLogo1} />
      </div>
    </div>
  );
}

function CardTeams() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px] top-[30px]" data-name="Card- Teams" style={{ left: "calc(71.429% + 72.714px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Microsoft Teams
      </p>
      <div className="absolute h-[37px] left-[54px] top-[29px] w-[40px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
    </div>
  );
}

function CardTeams1() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] left-[30px] rounded-[10px] size-[149px]" data-name="Card- Teams" style={{ top: "calc(25% + 22.5px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Microsoft Teams
      </p>
      <div className="absolute h-[37px] left-[54px] top-[29px] w-[40px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
    </div>
  );
}

function CardSafari1() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Safari" style={{ top: "calc(25% + 22.5px)", left: "calc(14.286% + 73.286px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Safari Browser
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute size-[40px] top-[27px] translate-x-[-50%]" data-name="image 60" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
    </div>
  );
}

function CardAutodesk2() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Autodesk" style={{ top: "calc(25% + 22.5px)", left: "calc(28.571% + 115.571px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Request</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        ReCap
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[34px] left-[54px] top-[30px] w-[40px]" data-name="Autodesk ReCap logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAutodeskReCapLogo1} />
      </div>
    </div>
  );
}

function CardAcrobat1() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Acrobat" style={{ top: "calc(25% + 22.5px)", left: "calc(57.143% + 29.429px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute left-[54px] size-[40px] top-[27px]" data-name="image 53">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.44%] left-[-7.69%] max-w-none top-[-7.22%] w-[113.19%]" src={imgImage53} />
        </div>
      </div>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] left-1/2 not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre">Acrobat</p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">Request</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Card2() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card" style={{ top: "calc(25% + 22.5px)", left: "calc(71.429% + 72.714px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-4px_-5px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Access
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
    </div>
  );
}

function CardTeams2() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] left-[30px] rounded-[10px] size-[149px]" data-name="Card- Teams" style={{ top: "calc(50% + 15px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Microsoft Teams
      </p>
      <div className="absolute h-[37px] left-[54px] top-[29px] w-[40px]" data-name="image 59">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage59} />
      </div>
    </div>
  );
}

function CardAutodesk3() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Autodesk" style={{ top: "calc(50% + 15px)", left: "calc(14.286% + 73.286px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Request</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        ReCap
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[34px] left-[54px] top-[30px] w-[40px]" data-name="Autodesk ReCap logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAutodeskReCapLogo1} />
      </div>
    </div>
  );
}

function CardAcrobat2() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Acrobat" style={{ top: "calc(50% + 15px)", left: "calc(28.571% + 115.571px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute left-[54px] size-[40px] top-[27px]" data-name="image 53">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.44%] left-[-7.69%] max-w-none top-[-7.22%] w-[113.19%]" src={imgImage53} />
        </div>
      </div>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] left-1/2 not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre">Acrobat</p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">Request</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card" style={{ top: "calc(50% + 15px)", left: "calc(57.143% + 29.429px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-4px_-5px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Access
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
    </div>
  );
}

function CardSafari2() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Safari" style={{ top: "calc(50% + 15px)", left: "calc(71.429% + 72.714px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Safari Browser
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute size-[40px] top-[27px] translate-x-[-50%]" data-name="image 60" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
    </div>
  );
}

function CardSafari3() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] left-[30px] rounded-[10px] size-[149px]" data-name="Card- Safari" style={{ top: "calc(75% + 7.5px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Safari Browser
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute size-[40px] top-[27px] translate-x-[-50%]" data-name="image 60" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage60} />
      </div>
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card" style={{ top: "calc(75% + 7.5px)", left: "calc(14.286% + 73.286px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-4px_-5px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #9ECBFF)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Install</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        Access
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }}>
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
      </div>
    </div>
  );
}

function CardAutodesk4() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Autodesk" style={{ top: "calc(75% + 7.5px)", left: "calc(28.571% + 115.571px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Request</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        ReCap
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[34px] left-[54px] top-[30px] w-[40px]" data-name="Autodesk ReCap logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAutodeskReCapLogo1} />
      </div>
    </div>
  );
}

function CardAcrobat3() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Acrobat" style={{ top: "calc(75% + 7.5px)", left: "calc(57.143% + 29.429px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute left-[54px] size-[40px] top-[27px]" data-name="image 53">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <img alt="" className="absolute h-[114.44%] left-[-7.69%] max-w-none top-[-7.22%] w-[113.19%]" src={imgImage53} />
        </div>
      </div>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] left-1/2 not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre">Acrobat</p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <div className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">
        <p className="mb-0">Request</p>
        <p>&nbsp;</p>
      </div>
    </div>
  );
}

function CardAutodesk5() {
  return (
    <div className="absolute bg-[rgba(218,224,238,0.38)] rounded-[10px] size-[149px]" data-name="Card- Autodesk" style={{ top: "calc(75% + 7.5px)", left: "calc(71.429% + 72.714px)" }}>
      <div className="absolute bg-[#dae0ee] h-[64px] left-1/2 rounded-[14px] shadow-[-5px_-4px_7px_1px_#ffffff,1px_1px_12px_0px_rgba(60,37,89,0.66)] top-[15px] translate-x-[-50%] w-[69px]" />
      <div className="absolute h-[23px] left-[43px] top-[115px] w-[69px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 69 23">
          <path d={svgPaths.p1d048e00} fill="var(--fill-0, #B6E3F3)" id="Rectangle 63" />
        </svg>
      </div>
      <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[77.5px] not-italic text-[12px] text-black text-center text-nowrap top-[119px] translate-x-[-50%] whitespace-pre">Request</p>
      <p className="absolute font-['Arial:Regular',_sans-serif] leading-[normal] not-italic text-[14px] text-black text-center text-nowrap top-[89px] translate-x-[-50%] whitespace-pre" style={{ left: "calc(50% - 0.5px)" }}>
        ReCap
      </p>
      <div className="absolute h-[39px] top-[28px] translate-x-[-50%] w-[40px]" data-name="image 52" style={{ left: "calc(50% - 0.5px)" }} />
      <div className="absolute h-[34px] left-[54px] top-[30px] w-[40px]" data-name="Autodesk ReCap logo 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAutodeskReCapLogo1} />
      </div>
    </div>
  );
}

function All1() {
  return (
    <div className="bg-white h-[783px] relative rounded-[30px] shrink-0 w-[906px]" data-name="All">
      <div className="h-[783px] overflow-x-clip overflow-y-auto relative w-[906px]">
        <CardAutodesk />
        <Card />
        <Card1 />
        <CardAcrobat />
        <CardSafari />
        <CardAutodesk1 />
        <CardTeams />
        <CardTeams1 />
        <CardSafari1 />
        <CardAutodesk2 />
        <CardAcrobat1 />
        <Card2 />
        <CardTeams2 />
        <CardAutodesk3 />
        <CardAcrobat2 />
        <Card3 />
        <CardSafari2 />
        <CardSafari3 />
        <Card4 />
        <CardAutodesk4 />
        <CardAcrobat3 />
        <CardAutodesk5 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(2,17,33,0.12)] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function WithDetailsPane() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[12px] h-[828px] items-start justify-center overflow-x-clip overflow-y-auto pl-[30px] pr-0 py-[20px] relative rounded-[30px] shrink-0 w-[945px]" data-name="with details pane">
      <All1 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex flex-col h-[919px] items-start justify-end relative shrink-0 w-[954px]" data-name="Left">
      <NavMenuLightTheme />
      <WithDetailsPane />
    </div>
  );
}

function Frame82() {
  return (
    <div className="box-border content-center flex flex-wrap gap-[10px] items-center justify-center pb-[10px] pt-[20px] px-[20px] relative shrink-0">
      <div className="font-['Inter:Regular',_sans-serif] font-normal leading-[0] not-italic relative shrink-0 text-[0px] text-black text-nowrap whitespace-pre">
        <p className="font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[30px] mb-0 text-[30px]">Microsoft Access</p>
        <p className="leading-[30px] mb-0 text-[20px]">Database Software and Applications</p>
        <p className="leading-[30px]">
          <span className="font-['Inter:Light',_sans-serif] font-light not-italic text-[16px]">{`Version 2.5.0  | 1.01 KB  | Development`}</span>
          <span className="text-[20px]"> </span>
        </p>
      </div>
    </div>
  );
}

function Frame79() {
  return (
    <div className="box-border gap-[10px] grid grid-cols-[repeat(1,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[190px] px-0 py-[10px] relative shrink-0 w-full">
      <div className="[grid-area:1_/_1] font-['Inter:Regular',_sans-serif] font-normal leading-[34px] not-italic relative shrink-0 text-[15px] text-black w-[387px]">
        <p className="mb-0">{`A relational database management system (RDBMS). `}</p>
        <p>It provides the tools and features required to organize, analyze, and utilize data. It is a productivity software from the Office suite designed to help users create, manipulate, and manage databases.</p>
      </div>
    </div>
  );
}

function Frame20() {
  return (
    <div className="bg-[#9ecbff] h-[41px] relative rounded-[15px] shrink-0 w-[118px]">
      <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[normal] left-[59px] not-italic text-[20px] text-black text-center text-nowrap top-[8.5px] translate-x-[-50%] whitespace-pre">Install</p>
    </div>
  );
}

function Frame80() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-[20px] py-0 relative shrink-0 w-[417px]">
      <Frame79 />
      <Frame20 />
    </div>
  );
}

function Right() {
  return (
    <div className="bg-white h-[896px] relative rounded-[30px] shrink-0 w-[461px]" data-name="Right">
      <div className="content-stretch flex flex-col h-[896px] items-start overflow-clip relative w-[461px]">
        <div className="aspect-[690/388] relative shrink-0 w-full" data-name="image 65">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage65} />
        </div>
        <Frame82 />
        <Frame80 />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0px_2px] border-[rgba(2,17,33,0.12)] border-solid inset-0 pointer-events-none rounded-[30px]" />
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 content-start flex flex-wrap gap-0 grow items-start min-h-px min-w-px relative shrink-0 w-full" data-name="Container">
      <Left />
      <Right />
    </div>
  );
}

function Frame76() {
  return (
    <div className="content-stretch flex flex-col h-[1466.49px] items-center relative shrink-0 w-full">
      <Container />
    </div>
  );
}

function AppComponent() {
  return (
    <div className="absolute bg-[#ebecee] content-stretch flex flex-col h-[928px] items-center left-0 overflow-clip top-0 w-[1440px]" data-name="App Component">
      <Frame76 />
    </div>
  );
}

export default function SidePanel() {
  return (
    <div className="bg-white relative size-full" data-name="SidePanel">
      <AppComponent />
    </div>
  );
}