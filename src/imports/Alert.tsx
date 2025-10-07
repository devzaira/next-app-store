import svgPaths from "./svg-tir9twmsxy";

function EpWarningFilled() {
  return (
    <div className="absolute left-[12px] size-[24px] top-[9px]" data-name="ep:warning-filled">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="ep:warning-filled">
          <path d={svgPaths.p18f7df80} fill="var(--fill-0, #F51414)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

export default function Alert() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] shadow-[0px_0px_4px_1px_rgba(255,2,2,0.7)] size-full" data-name="Alert">
      <p className="absolute font-['Product_Sans:Regular',_sans-serif] leading-[normal] left-[42px] not-italic text-[12px] text-black w-[225px]" style={{ top: "calc(50% - 15.5px)" }}>
        Error installing Adobe Acrobat Pro 2025
      </p>
      <p className="absolute font-['Product_Sans_Light:Regular',_sans-serif] leading-[normal] left-[154.5px] not-italic text-[11px] text-black text-center translate-x-[-50%] w-[273px]" style={{ top: "calc(50% + 3.5px)" }}>
        Please check with support if the issue continues
      </p>
      <EpWarningFilled />
    </div>
  );
}