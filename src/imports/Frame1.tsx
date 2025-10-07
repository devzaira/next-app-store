import img14577184552763 from "figma:asset/269ddd76462c42c51f8a480781f4ba1c4090e43d.png";
import { img14577184552762 } from "./svg-xmfuv";

function Background() {
  return (
    <div className="absolute contents left-0 top-0" data-name="Background">
      <div className="absolute bg-[#3182ce] bottom-[52.93%] left-0 right-0 top-0" data-name="Background Header" />
      <div className="absolute flex h-[1116.52px] items-center justify-center left-0 top-[-242.16px] w-[1440px]">
        <div className="flex-none rotate-[180deg]">
          <div className="h-[1116.52px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[0px_242.164px] mask-size-[1440px_482px] relative w-[1440px]" data-name="1457718455276 2" style={{ maskImage: `url('${img14577184552762}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img14577184552763} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="bg-white relative size-full">
      <Background />
      <div className="absolute h-[706px] left-[-7px] top-[480.5px] w-[1454px]">
        <div className="absolute inset-[-1.27%_-0.96%_-2.69%_-0.96%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1482 734">
            <g filter="url(#filter0_d_5_321)" id="Rectangle 9">
              <path d="M14 9H1468V715H14V9Z" fill="url(#paint0_linear_5_321)" />
            </g>
            <defs>
              <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="734" id="filter0_d_5_321" width="1482" x="0" y="0">
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                <feOffset dy="5" />
                <feGaussianBlur stdDeviation="7" />
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_5_321" />
                <feBlend in="SourceGraphic" in2="effect1_dropShadow_5_321" mode="normal" result="shape" />
              </filter>
              <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_5_321" x1="51.5226" x2="1237.3" y1="715" y2="355.321">
                <stop stopColor="#313860" />
                <stop offset="1" stopColor="#151928" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}