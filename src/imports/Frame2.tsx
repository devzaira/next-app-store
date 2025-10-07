import img14577184552763 from "figma:asset/269ddd76462c42c51f8a480781f4ba1c4090e43d.png";
import { img14577184552762 } from "./svg-0gqss";

function Background() {
  return (
    <div className="absolute contents left-[-505.78px] top-[-742.07px]" data-name="Background">
      <div className="absolute flex inset-[-72.47%_-9.03%_-0.98%_-35.12%] items-center justify-center">
        <div className="flex-none h-[1042.26px] rotate-[331.328deg] w-[1795.94px]">
          <div className="bg-[#3182ce] size-full" data-name="Background Header" />
        </div>
      </div>
      <div className="absolute flex h-[2979.939px] items-center justify-center left-[-757.03px] top-[-1201.51px] w-[2734.088px]">
        <div className="flex-none rotate-[151.328deg]">
          <div className="h-[2414.31px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[251.243px_459.437px] mask-size-[2075.79px_1776.14px] relative w-[1795.94px]" data-name="1457718455276 2" style={{ maskImage: `url('${img14577184552762}')` }}>
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img14577184552763} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Frame2() {
  return (
    <div className="bg-white relative size-full">
      <div className="absolute flex h-[1238.39px] items-center justify-center left-[-265.96px] top-[240px] w-[1863.303px]">
        <div className="flex-none rotate-[170.675deg]">
          <div className="h-[971.1px] relative w-[1728.8px]">
            <div className="absolute inset-[-0.93%_-0.81%_-1.96%_-0.81%]">
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1757 1000">
                <g filter="url(#filter0_d_6_16)" id="Rectangle 10">
                  <path d="M14 9H1742.8V980.1H14V9Z" fill="url(#paint0_linear_6_16)" />
                </g>
                <defs>
                  <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="999.1" id="filter0_d_6_16" width="1756.8" x="0" y="0">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                    <feOffset dy="5" />
                    <feGaussianBlur stdDeviation="7" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.05 0" />
                    <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_6_16" />
                    <feBlend in="SourceGraphic" in2="effect1_dropShadow_6_16" mode="normal" result="shape" />
                  </filter>
                  <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_6_16" x1="58.6143" x2="1499.19" y1="980.1" y2="602.382">
                    <stop stopColor="#313860" />
                    <stop offset="1" stopColor="#151928" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <Background />
    </div>
  );
}