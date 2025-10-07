import imgAdobe2 from "figma:asset/d970afa03ca7ebce85e3ca15a0969eb80bf4f28e.png";

function Circle149Px() {
  return (
    <div className="absolute bg-white overflow-clip rounded-[15px] size-[64px] translate-x-[-50%] translate-y-[-50%]" data-name="circle-149px" style={{ top: "calc(50% - 26.5px)", left: "calc(50% + 0.5px)" }}>
      <div className="absolute left-1/2 rounded-[15px] size-[74px] top-0 translate-x-[-50%]" data-name="adobe 2">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[15px] size-full" src={imgAdobe2} />
      </div>
    </div>
  );
}

export default function CardVariant13() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] shadow-[0px_2px_6px_0px_rgba(0,0,0,0.15),1px_2px_7.2px_0px_rgba(0,0,0,0.1)] size-full" data-name="Card/Variant13">
      <p className="absolute font-['Product_Sans:Regular',_sans-serif] leading-[normal] not-italic text-[15px] text-black text-nowrap whitespace-pre" style={{ top: "calc(50% + 11.5px)", left: "calc(50% - 26.5px)" }}>
        Acrobat
      </p>
      <Circle149Px />
      <div className="absolute font-['Inter:Light',_sans-serif] font-light h-[8px] leading-[11px] not-italic text-[10px] text-black text-center top-[111px] translate-x-[-50%] w-[132px]" style={{ left: "calc(50% + 0.5px)" }}>
        <p className="mb-0">{`Convert, Fill & `}</p>
        <p>Sign Documents</p>
      </div>
    </div>
  );
}