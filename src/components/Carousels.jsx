export default function Carousels() {
  return (
    <div className="flex justify-center gap-2 mt-4">
      <div className="w-[82px] h-[4px] rounded bg-green-600"></div> {/* Active */}
      <div className="w-[82px] h-[4px] rounded bg-green-200"></div>
      <div className="w-[82px] h-[4px] rounded bg-green-200"></div>
      <div className="w-[82px] h-[4px] rounded bg-green-200"></div>
      <div className="w-[82px] h-[4px] rounded bg-green-200"></div>
    </div>
  );
}
