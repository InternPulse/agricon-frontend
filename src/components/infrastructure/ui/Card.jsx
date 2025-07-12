export default function Card({ icon, alt, label, description }) {
  return (
    <div
      className={`flex p-5 hover:shadow rounded-2xl justify-between border border-[#E4E7EC] bg-white`}
    >
      <div>
        <h2 className="font-semibold text-xl text-[#101928] mb-1">{label}</h2>

        <p className="text-[#475367] max-w-[178px]">{description}</p>
      </div>

      <div className="flex justify-center items-center w-[37px] shrink-0 h-[37px] bg-[#448BE21A] self-end rounded-full">
        <img src={icon} alt={alt} className="w-[24px] h-[24px]" />
      </div>
    </div>
  );
}
