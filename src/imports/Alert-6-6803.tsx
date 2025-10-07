import svgPaths from "./svg-s6ivclrpzd";

function Group() {
  return (
    <div className="absolute inset-[24.44%_88.7%_22.22%_2.91%]" data-name="Group">
      <div className="absolute inset-[-8.33%_-7.71%]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 28">
          <g id="Group">
            <path d={svgPaths.p15228900} fill="var(--fill-0, white)" id="Vector" stroke="var(--stroke-0, white)" strokeLinejoin="round" strokeWidth="4" />
            <path d={svgPaths.p877eb80} id="Vector_2" stroke="var(--stroke-0, black)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
          </g>
        </svg>
      </div>
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute contents inset-[24.44%_88.7%_22.22%_2.91%]" data-name="Group">
      <Group />
    </div>
  );
}

function MaskGroup() {
  return (
    <div className="absolute contents inset-[24.44%_88.7%_22.22%_2.91%]" data-name="Mask group">
      <Group1 />
      <div className="absolute inset-[19.11%_87.86%_16.89%_2.07%]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 32 29">
          <path d="M0 0H31.1161V28.8H0V0Z" fill="var(--fill-0, #00BBFF)" id="Vector" />
        </svg>
      </div>
    </div>
  );
}

export default function Alert() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] shadow-[0px_0px_4px_1px_rgba(0,187,255,0.7)] size-full" data-name="Alert">
      <p className="absolute font-['Product_Sans:Regular',_sans-serif] leading-[normal] left-[46px] not-italic text-[12px] text-black w-[249px]" style={{ top: "calc(50% - 14.5px)" }}>
        Installation completed: Adobe Acrobat Pro 2025
      </p>
      <p className="absolute font-['Inter:Light',_sans-serif] font-light leading-[normal] left-[46px] not-italic text-[10px] text-black w-[249px]" style={{ top: "calc(50% + 4.5px)" }}>
        You can now open it from your desktop menu
      </p>
      <MaskGroup />
    </div>
  );
}