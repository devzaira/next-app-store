import svgPaths from "./svg-tbi8hscunq";
import imgAlbertsonsLogo500X2813 from "figma:asset/bc4ff77f6f60aae3678a9a586cf49077655dc441.png";
import imgImage59 from "figma:asset/6727d6ab999d1e3372ce7828701c1417f34a6b53.png";
import imgImage52 from "figma:asset/4ae889ad002ce20ef022569ffee411a6bb9b367c.png";
import imgImage62 from "figma:asset/bc67b9c37e617d3ac4ebacf0a7cb2010b7c39d7d.png";
import imgImage63 from "figma:asset/023d73c34997eef09a0bea2ac8fa1653401fa4c0.png";
import imgAutodeskReCapLogo2 from "figma:asset/fbc98c82121b18889b70fe9f49f4fd47ebf42a22.png";
import imgImage34 from "figma:asset/ad04b71d91bbf035b966f70bea1aa70067bd16f5.png";
import imgImage37 from "figma:asset/4f768fd55c21d0610a84af854985bf5b8c508668.png";
import imgImage53 from "figma:asset/f25fb8559e7b9345471592e162597d6f78c7b237.png";
import { img, img1 } from "./svg-33o2l";

interface SearchRequestProps {
  state?: "Default" | "Active";
}

function SearchRequest({ state = "Default" }: SearchRequestProps) {
  if (state === "Active") {
    return (
      <div className="bg-white relative rounded-[6px] size-full" data-name="State=Active">
        <div className="flex flex-row items-center size-full">
          <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[12px] py-[4px] relative size-full">
            <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
              <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-500 text-nowrap whitespace-pre">Search Request</p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="absolute border border-neutral-500 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_0px_0px_3px_rgba(161,161,161,0.5)]" />
      </div>
    );
  }
  return (
    <div className="bg-white cursor-pointer relative rounded-[6px] size-full" data-name="State=Default">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex items-center justify-between overflow-clip px-[12px] py-[4px] relative size-full">
          <div className="basis-0 content-stretch flex gap-[10px] grow items-center min-h-px min-w-px relative shrink-0" data-name="Text">
            <div className="relative shrink-0 size-[18px]" data-name="Vector">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                <path d={svgPaths.p19cb5800} fill="var(--fill-0, #090511)" fillOpacity="0.5" id="Vector" />
              </svg>
            </div>
            <p className="font-['Inter:Regular',_sans-serif] font-normal leading-[24px] not-italic relative shrink-0 text-[16px] text-neutral-500 text-nowrap whitespace-pre">Search Request</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Pagination() {
  return (
    <div className="content-stretch flex gap-[4px] items-center relative size-full" data-name="Pagination">
      <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-left">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-6.25%_-12.5%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={img} />
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Previous</p>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Wrapper">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Number">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">1</p>
        </div>
      </div>
      <div className="bg-white box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Wrapper">
        <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[6px] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.1)]" />
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Number">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">2</p>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Wrapper">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0" data-name="Number">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">3</p>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[10px] items-center justify-center p-[10px] relative rounded-[6px] shrink-0 size-[36px]" data-name="Wrapper">
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="ellipsis">
          <div className="absolute inset-[45.83%_16.67%]" data-name="Vector">
            <div className="absolute inset-[-37.5%_-4.69%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 3">
                <g id="Vector">
                  <path d={svgPaths.p33284b70} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p31a2d700} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  <path d={svgPaths.p37afd600} stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="box-border content-stretch flex gap-[4px] h-[36px] items-center justify-center px-[12px] py-[8px] relative rounded-[6px] shrink-0" data-name="Buttons">
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-950 text-nowrap whitespace-pre">Next</p>
        </div>
        <div className="overflow-clip relative shrink-0 size-[16px]" data-name="chevron-right">
          <div className="absolute bottom-1/4 left-[37.5%] right-[37.5%] top-1/4" data-name="Vector">
            <div className="absolute inset-[-6.25%_-12.5%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface BadgeProps {
  type?: "Default" | "Destructive" | "Destructive_number" | "Outline" | "Secondary" | "Secondary_icon" | "Secondary_number" | "Default_number";
}

function Badge({ type = "Default" }: BadgeProps) {
  if (type === "Secondary") {
    return (
      <div className="bg-neutral-100 relative rounded-[8px] size-full" data-name="Type=Secondary">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Secondary</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Destructive") {
    return (
      <div className="bg-red-600 relative rounded-[8px] size-full" data-name="Type=Destructive">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.95)] text-nowrap whitespace-pre">Destructive</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Outline") {
    return (
      <div className="relative rounded-[8px] size-full" data-name="Type=Outline">
        <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Outline</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary_icon") {
    return (
      <div className="bg-[#0090ff] relative rounded-[8px] size-full" data-name="Type=Secondary_icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="relative shrink-0 size-[14px]" data-name="progress">
              <div className="absolute inset-0" data-name="Vector">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                  <g id="Vector"></g>
                </svg>
              </div>
              <div className="absolute inset-[82.53%_58.33%_13.43%_31.33%]" data-name="Vector">
                <div className="absolute inset-[-176.94%_-69.14%_-176.95%_-69.14%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
                    <path d={svgPaths.pb929000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[13.43%_12.51%_13.43%_58.33%]" data-name="Vector">
                <div className="absolute inset-[-9.77%_-24.5%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 13">
                    <path d={svgPaths.p2ed58d00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[60.42%_80.92%_28.78%_13.97%]" data-name="Vector">
                <div className="absolute inset-[-66.15%_-139.73%_-66.14%_-139.75%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
                    <path d={svgPaths.p30c3cf00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[31.33%_82.53%_56.25%_13.02%]" data-name="Vector">
                <div className="absolute inset-[-57.54%_-160.39%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 3 4">
                    <path d={svgPaths.p347e1a00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
              <div className="absolute inset-[13.43%_58.33%_80.92%_28.78%]" data-name="Vector">
                <div className="absolute inset-[-126.45%_-55.44%_-126.43%_-55.43%]" style={{ "--stroke-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 3">
                    <path d={svgPaths.p19e6ed00} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Processing</p>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Destructive_number") {
    return (
      <div className="bg-red-600 box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-0 py-[2px] relative rounded-[9999px] size-full" data-name="Type=Destructive_number">
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.95)] text-nowrap whitespace-pre">99</p>
        </div>
      </div>
    );
  }
  if (type === "Secondary_number") {
    return (
      <div className="relative rounded-[9999px] size-full" data-name="Type=Secondary_number">
        <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[4px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Geist_Mono:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">20+</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Default_number") {
    return (
      <div className="bg-[#004488] relative rounded-[9999px] size-full" data-name="Type=Default_number">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">8</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#004488] relative rounded-[8px] size-full" data-name="Type=Default">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">Badge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

interface Badge1Props {
  type?: "Default" | "Default_number" | "Destructive" | "Destructive_number" | "Outline" | "Secondary" | "Secondary_icon" | "Secondary_number";
}

function Badge1({ type = "Default" }: Badge1Props) {
  if (type === "Secondary") {
    return (
      <div className="bg-neutral-100 relative rounded-[8px] size-full" data-name="Type=Secondary">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Secondary</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Destructive") {
    return (
      <div className="bg-red-600 relative rounded-[8px] size-full" data-name="Type=Destructive">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.95)] text-nowrap whitespace-pre">Destructive</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Outline") {
    return (
      <div className="relative rounded-[8px] size-full" data-name="Type=Outline">
        <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[8px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">Outline</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Secondary_icon") {
    return (
      <div className="bg-red-600 relative rounded-[8px] size-full" data-name="Type=Secondary_icon">
        <div className="flex flex-row items-center justify-center size-full">
          <div className="box-border content-stretch flex gap-[4px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="overflow-clip relative shrink-0 size-[14px]" data-name="circle-x">
              <div className="absolute inset-[8.333%]" data-name="Vector">
                <div className="absolute inset-[-4.286%]" style={{ "--stroke-0": "rgba(250, 250, 250, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
                    <path d={svgPaths.p2ebbdd00} id="Vector" stroke="var(--stroke-0, #FAFAFA)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Cancelled</p>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Default_number") {
    return (
      <div className="bg-[#004488] relative rounded-[9999px] size-full" data-name="Type=Default_number">
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">8</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (type === "Destructive_number") {
    return (
      <div className="bg-red-600 box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-0 py-[2px] relative rounded-[9999px] size-full" data-name="Type=Destructive_number">
        <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
          <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-[rgba(255,255,255,0.95)] text-nowrap whitespace-pre">99</p>
        </div>
      </div>
    );
  }
  if (type === "Secondary_number") {
    return (
      <div className="relative rounded-[9999px] size-full" data-name="Type=Secondary_number">
        <div aria-hidden="true" className="absolute border border-neutral-200 border-solid inset-0 pointer-events-none rounded-[9999px]" />
        <div className="flex flex-col items-center justify-center size-full">
          <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[4px] py-[2px] relative size-full">
            <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
              <p className="font-['Geist_Mono:Medium',_sans-serif] font-medium leading-[16px] relative shrink-0 text-[12px] text-neutral-950 text-nowrap whitespace-pre">20+</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-[#004488] relative rounded-[8px] size-full" data-name="Type=Default">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-center justify-center px-[10px] py-[2px] relative size-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Text">
            <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[16px] not-italic relative shrink-0 text-[12px] text-neutral-50 text-nowrap whitespace-pre">Badge</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function RequestsVariant2() {
  return (
    <div className="relative size-full" data-name="Requests/Variant2">
      <div className="absolute h-[77px] left-0 overflow-clip top-0 w-[1440px]" data-name="Toolbar with bg">
        <div className="absolute h-[77px] left-[23px] top-0 w-[66px]" data-name="Albertsons-logo-500x281 3">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <img alt="" className="absolute h-[151.89%] left-0 max-w-none top-[-27.3%] w-[315.13%]" src={imgAlbertsonsLogo500X2813} />
          </div>
        </div>
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[normal] left-[168.5px] not-italic text-[24px] text-[rgba(0,0,0,0.7)] text-center text-nowrap top-[26px] translate-x-[-50%] whitespace-pre">Apps</p>
        <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[normal] left-[278px] not-italic text-[24px] text-black text-center text-nowrap top-[28px] translate-x-[-50%] whitespace-pre">Requests</p>
        <div className="absolute bg-[rgba(165,232,243,0.5)] h-[51px] left-[389px] rounded-[10px] top-[13px] w-[661px]">
          <p className="absolute font-['Inter:Medium',_sans-serif] font-medium leading-[normal] left-[18px] not-italic text-[20px] text-[rgba(9,5,17,0.5)] text-nowrap top-[14.27px] tracking-[-0.2px] whitespace-pre">Search apps</p>
          <div className="absolute h-[24.924px] left-[619.2px] top-[13.04px] w-[23.804px]" data-name="Vector">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 25">
              <path d={svgPaths.p18600f80} fill="var(--fill-0, #090511)" fillOpacity="0.5" id="Vector" />
            </svg>
          </div>
        </div>
        <div className="absolute h-[67px] left-[1102px] top-[11px] w-[92px]">
          <div className="absolute contents left-[269px] top-[5px]" data-name="Toolbar">
            <div className="absolute contents left-[269px] top-[5px]" data-name="icons">
              <div className="absolute contents left-[269px] top-[5px]" data-name="user profile">
                <div className="absolute left-[269px] size-[45px] top-[5px]" data-name="Ellipse">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 45 45">
                    <circle cx="22.5" cy="22.5" fill="var(--fill-0, #D9D9D9)" id="Ellipse" r="22.5" />
                  </svg>
                </div>
                <div className="absolute left-[278px] overflow-clip size-[27.409px] top-[12.36px]" data-name="majesticons:user">
                  <div className="absolute inset-[12.5%_16.67%]" data-name="Group">
                    <div className="absolute inset-[-4.86%_-5.47%]">
                      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 23">
                        <g id="Group">
                          <path d={svgPaths.p47cb680} fill="var(--fill-0, #504E4E)" id="Vector" stroke="var(--stroke-0, #504E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p1bb6c160} id="Vector_2" stroke="var(--stroke-0, #504E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                          <path d={svgPaths.p3bf40900} fill="var(--fill-0, #504E4E)" id="Vector_3" stroke="var(--stroke-0, #504E4E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                        </g>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute h-[38px] left-[1238px] top-[16px] w-[118px]">
          <div className="absolute font-['Amiko:Regular',_sans-serif] leading-[normal] left-[118px] not-italic text-[14px] text-nowrap text-right text-white top-[6px] translate-x-[-100%] whitespace-pre">
            <p className="mb-0">LDAP</p>
            <p>MACHINE NAME</p>
          </div>
        </div>
        <div className="absolute left-[1119px] size-[48px] top-[15px]" data-name="solar:moon-stars-bold">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
            <g id="solar:moon-stars-bold">
              <path d={svgPaths.p2932b700} fill="var(--fill-0, #FDF30F)" id="Vector" />
              <path d={svgPaths.pff6ecf0} fill="var(--fill-0, #FDF30F)" id="Vector_2" />
            </g>
          </svg>
        </div>
      </div>
      <div className="absolute bg-[#f7fafc] content-stretch flex flex-col h-[908px] items-center left-0 overflow-clip top-[78px] w-[1440px]" data-name="App Component" />
      <div className="absolute bg-[#dae0ee] h-[44px] overflow-clip rounded-[10px] top-[135px] translate-x-[-50%] w-[463px]" data-name="tabs" style={{ left: "calc(18.75% + 17.5px)" }}>
        <div className="absolute contents left-[7px] translate-y-[-50%]" data-name="all" style={{ top: "calc(50% - 0.216px)" }}>
          <div className="absolute bg-white h-[31.568px] left-[7px] rounded-[5px] translate-y-[-50%] w-[128.9px]" style={{ top: "calc(50% - 0.216px)" }}>
            <div aria-hidden="true" className="absolute border border-[#ececec] border-solid inset-[-0.5px] pointer-events-none rounded-[5.5px]" />
          </div>
          <p className="absolute font-['Inter:Medium',_sans-serif] font-medium h-[26px] leading-[normal] left-[71.5px] not-italic text-[18px] text-black text-center translate-x-[-50%] w-[105px]" style={{ top: "calc(50% - 12px)" }}>
            Open
          </p>
        </div>
        <div className="absolute contents left-[136px] top-[6px]" data-name="free">
          <div className="absolute h-[32px] left-[136px] top-1/2 translate-y-[-50%] w-[171px]">
            <div aria-hidden="true" className="absolute border-[0px_2px_0px_0px] border-solid border-white bottom-0 left-0 pointer-events-none right-[-1px] top-0" />
          </div>
          <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[26px] leading-[normal] left-[214.5px] not-italic text-[#615f5f] text-[18px] text-center top-[10px] translate-x-[-50%] w-[121px]">Delivered</p>
        </div>
        <div className="absolute contents left-[322px] translate-y-[-50%]" data-name="by request" style={{ top: "calc(50% + 4.5px)" }}>
          <div className="absolute h-[35px] left-[322px] translate-y-[-50%] w-[141px]" style={{ top: "calc(50% + 4.5px)" }} />
        </div>
        <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[26px] leading-[normal] left-[382.5px] not-italic text-[#615f5f] text-[18px] text-center top-[10px] translate-x-[-50%] w-[121px]">All</p>
      </div>
      <div className="absolute bg-white h-[765px] overflow-clip rounded-[15px] top-[212px] translate-x-[-50%] w-[1319px]" style={{ left: "calc(43.75% + 72.5px)" }}>
        <div className="absolute bg-white h-[63px] left-[-1px] top-[543px] w-[1319px]" data-name="tr6">
          <div className="h-[63px] overflow-clip relative w-[1319px]">
            <div className="absolute h-[49px] left-[1173px] top-[7px] w-[20px]" />
            <div className="absolute h-[49px] left-[276px] top-[7px] w-[138px]" />
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[112px] p-[10px] top-[7px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                Teams
              </p>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[849px] p-[10px] top-[10px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                09/12/2025 10:00 AM
              </p>
            </div>
            <div className="absolute h-[37px] left-[63px] top-[11px] w-[40px]" data-name="image 59">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage59} />
            </div>
            <div className="absolute left-[1242px] overflow-clip size-[33px] top-[17px]" data-name="Chevron icon">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-6.06%_-3.03%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
                    <path d="M1 1L9.25 9.25L17.5 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(28,179,86,0.85)] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center left-[616px] px-[10px] py-[2px] rounded-[8px] top-[10px] w-[107px]" data-name="Badge">
              <div className="relative shrink-0 size-[14px]" data-name="circle-check">
                <div className="absolute inset-0" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector"></g>
                  </svg>
                </div>
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path d={svgPaths.p31a60b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Delivered</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute bg-white h-[63px] left-[-1px] top-[606px] w-[1319px]" data-name="tr5">
          <div className="h-[63px] overflow-clip relative w-[1319px]">
            <div className="absolute h-[49px] left-[1173px] top-[7px] w-[20px]" />
            <div className="absolute h-[49px] left-[276px] top-[7px] w-[138px]" />
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[115px] p-[10px] top-[7px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                Access
              </p>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[849px] p-[10px] top-[8px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                09/12/2025 10:00 AM
              </p>
            </div>
            <div className="absolute h-[39px] left-[66px] top-[11px] w-[40px]" data-name="image 52">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage52} />
            </div>
            <div className="absolute left-[1242px] overflow-clip size-[33px] top-[17px]" data-name="Chevron icon">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-6.06%_-3.03%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
                    <path d="M1 1L9.25 9.25L17.5 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bg-red-600 box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center left-[616px] px-[10px] py-[2px] rounded-[8px] top-[18px] w-[107px]" data-name="Badge">
              <Badge1 type="Secondary_icon" />
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute bg-white h-[63px] left-[-1px] top-[480px] w-[1319px]" data-name="tr4">
          <div className="h-[63px] overflow-clip relative w-[1319px]">
            <div className="absolute h-[49px] left-[1173px] top-[7px] w-[20px]" />
            <div className="absolute h-[49px] left-[276px] top-[7px] w-[138px]" />
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[113px] p-[10px] top-[7px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                Zeplin
              </p>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[848px] p-[10px] top-[8px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                09/12/2025 10:00 AM
              </p>
            </div>
            <div className="absolute h-[32px] left-[64px] top-[11px] w-[40px]" data-name="image 62">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage62} />
            </div>
            <div className="absolute left-[1242px] overflow-clip size-[33px] top-[17px]" data-name="Chevron icon">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-6.06%_-3.03%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
                    <path d="M1 1L9.25 9.25L17.5 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute bg-[rgba(28,179,86,0.85)] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center left-[616px] px-[10px] py-[2px] rounded-[8px] top-[13px] w-[107px]" data-name="Badge">
              <div className="relative shrink-0 size-[14px]" data-name="circle-check">
                <div className="absolute inset-0" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 32">
                    <g id="Vector"></g>
                  </svg>
                </div>
                <div className="absolute inset-[8.33%]" data-name="Vector">
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
                    <path d={svgPaths.p31a60b00} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" />
                  </svg>
                </div>
              </div>
              <p className="font-['Inter:Medium',_sans-serif] font-medium leading-[20px] not-italic relative shrink-0 text-[14px] text-neutral-50 text-nowrap whitespace-pre">Delivered</p>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute bg-white h-[63px] left-[-1px] top-[406px] w-[1319px]" data-name="tr3">
          <div className="h-[63px] overflow-clip relative w-[1319px]">
            <div className="absolute h-[49px] left-[1173px] top-[7px] w-[20px]" />
            <div className="absolute h-[49px] left-[276px] top-[7px] w-[138px]" />
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[119px] p-[10px] top-[4px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                Illustrator
              </p>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[849px] p-[10px] top-[4px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                09/12/2025 10:00 AM
              </p>
            </div>
            <div className="absolute h-[43px] left-[70px] top-[8px] w-[45px]" data-name="image 63">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[111.79%] left-[-3.79%] max-w-none top-[-5.46%] w-[107.79%]" src={imgImage63} />
              </div>
            </div>
            <div className="absolute left-[1242px] overflow-clip size-[33px] top-[17px]" data-name="Chevron icon">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-6.06%_-3.03%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
                    <path d="M1 1L9.25 9.25L17.5 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[606px] p-[10px] top-[11px]">
              <div className="bg-[#0090ff] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[10px] py-[2px] relative rounded-[8px] shrink-0 w-[107px]" data-name="Badge">
                <Badge type="Secondary_icon" />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute bg-white h-[63px] left-[-1px] top-[332px] w-[1319px]" data-name="tr2">
          <div className="h-[63px] overflow-clip relative w-[1319px]">
            <div className="absolute h-[49px] left-[1173px] top-[7px] w-[20px]" />
            <div className="absolute h-[49px] left-[276px] top-[7px] w-[138px]" />
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[115px] p-[10px] top-[14px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                ReCap
              </p>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[850px] p-[10px] top-[10px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                09/12/2025 10:00 AM
              </p>
            </div>
            <div className="absolute h-[34px] left-[66px] top-[18px] w-[40px]" data-name="Autodesk ReCap logo 2">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgAutodeskReCapLogo2} />
            </div>
            <div className="absolute left-[1242px] overflow-clip size-[33px] top-[17px]" data-name="Chevron icon">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-6.06%_-3.03%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
                    <path d="M1 1L9.25 9.25L17.5 1" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[606px] p-[10px] top-[11px]">
              <div className="bg-[#0090ff] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[10px] py-[2px] relative rounded-[8px] shrink-0 w-[107px]" data-name="Badge">
                <Badge type="Secondary_icon" />
              </div>
            </div>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute bg-white h-[269px] left-0 top-[63px] w-[1319px]" data-name="tr1">
          <div className="h-[269px] overflow-clip relative w-[1319px]">
            <div className="absolute h-[49px] left-[1173px] top-[7px] w-[20px]" />
            <div className="absolute h-[49px] left-[276px] top-[7px] w-[138px]" />
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[606px] p-[10px] top-[11px]">
              <div className="bg-[#0090ff] box-border content-stretch flex gap-[4px] h-[28px] items-center justify-center px-[10px] py-[2px] relative rounded-[8px] shrink-0 w-[107px]" data-name="Badge">
                <Badge type="Secondary_icon" />
              </div>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[850px] p-[10px] top-[2px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                09/12/2025 10:00 AM
              </p>
            </div>
            <div className="absolute left-[1242px] overflow-clip size-[33px] top-[17px]" data-name="Chevron icon">
              <div className="absolute bottom-[37.5%] left-1/4 right-1/4 top-[37.5%]" data-name="Vector">
                <div className="absolute inset-[-6.06%_-3.03%]" style={{ "--stroke-0": "rgba(10, 10, 10, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 10">
                    <path d="M17.5 9.25L9.25 1L1 9.25" id="Vector" stroke="var(--stroke-0, #0A0A0A)" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="absolute h-[98px] left-[940px] top-[171px] w-[335px]" data-name="image 34">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage34} />
            </div>
            <div className="absolute h-[61px] left-[940px] top-[94px] w-[224px]" data-name="image 37">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage37} />
            </div>
            <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[30px] not-italic right-[1102px] text-[#2f2b2b] text-[15px] text-right top-[200px] w-[182px] whitespace-pre-wrap">Order By John Doe</p>
            <div className="absolute h-[49px] left-[940px] top-[51px] w-[153px]">
              <p className="absolute font-['Nunito_Sans:Bold',_sans-serif] font-bold leading-[1.45] left-[10px] text-[20px] text-black text-nowrap top-[10px] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                RIM12344566{" "}
              </p>
            </div>
            <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[123px] p-[10px] top-[7px]">
              <p className="font-['Nunito_Sans:Regular',_sans-serif] font-normal leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
                Acrobat
              </p>
            </div>
            <div className="absolute left-[74px] size-[40px] top-[11px]" data-name="image 53">
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <img alt="" className="absolute h-[114.44%] left-[-7.69%] max-w-none top-[-7.22%] w-[113.19%]" src={imgImage53} />
              </div>
            </div>
            <p className="absolute font-['Inter:Semi_Bold',_sans-serif] font-semibold leading-[30px] not-italic right-[1122px] text-[#2f2b2b] text-[15px] text-right top-[230px] w-[182px]">Business Reason</p>
          </div>
          <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-neutral-200 border-solid inset-0 pointer-events-none" />
        </div>
        <div className="absolute bg-[#f3f3f3] h-[63px] left-0 overflow-clip top-0 w-[1319px]" data-name="th">
          <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[1197px] p-[10px] top-[7px]">
            <p className="font-['Nunito_Sans:Bold',_sans-serif] font-bold leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              More Info
            </p>
          </div>
          <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[626px] p-[10px] top-[7px]">
            <p className="font-['Nunito_Sans:Bold',_sans-serif] font-bold leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Status
            </p>
          </div>
          <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[876px] p-[10px] top-[7px]">
            <p className="font-['Nunito_Sans:Bold',_sans-serif] font-bold leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Est Delivery Date
            </p>
          </div>
          <div className="absolute box-border content-stretch flex gap-[10px] items-center justify-center left-[62px] p-[10px] top-[7px]">
            <p className="font-['Nunito_Sans:Bold',_sans-serif] font-bold leading-[1.45] relative shrink-0 text-[20px] text-black text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
              Application
            </p>
          </div>
          <div className="absolute bg-white cursor-pointer h-[36px] left-[998px] rounded-[6px] top-[-68px] w-[320px]" data-name="Search Request">
            <SearchRequest />
          </div>
        </div>
        <div className="absolute content-stretch flex gap-[4px] items-center top-[693px] translate-x-[-50%]" data-name="Pagination" style={{ left: "calc(50% - 0.5px)" }}>
          <Pagination />
        </div>
        <div className="absolute h-[110px] left-[73px] text-black top-[149px] w-[415px]" data-name="Answer">
          <p className="absolute font-['Nunito_Sans:Bold',_sans-serif] font-bold leading-[1.45] left-0 text-[20px] top-[-16.5px] w-[298px]" style={{ fontVariationSettings: "'wdth' 100, 'YTLC' 500" }}>
            Adobe Acrobat Pro 2025
          </p>
          <p className="absolute font-['Inter:Regular',_sans-serif] font-normal leading-[20px] left-0 not-italic text-[14px] top-[12px] w-[1195px] whitespace-pre-wrap">V2.5.0 | 100 MB | Design</p>
          <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[3px] leading-[20px] left-0 not-italic text-[14px] top-[46px] w-[372px]">View, share, annotate, add comments, and sign documents - all in one app. You can store your files online and read documents anywhere. </p>
          <p className="absolute font-['Inter:Regular',_sans-serif] font-normal h-[3px] leading-[20px] left-0 not-italic text-[14px] top-[119.5px] w-[1195px] whitespace-pre-wrap"> </p>
        </div>
      </div>
      <div className="absolute bg-white cursor-pointer h-[45px] rounded-[6px] top-[139px] w-[320px]" data-name="Search Request" style={{ left: "calc(62.5% + 154px)" }}>
        <SearchRequest />
      </div>
    </div>
  );
}

export default function RequestsVariant3() {
  return (
    <div className="bg-[#f7fafc] relative size-full" data-name="Requests/Variant2">
      <RequestsVariant2 />
    </div>
  );
}