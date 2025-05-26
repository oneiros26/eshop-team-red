import "./contactForm.css";

function Textarea() {
  return (
    <div className="flex flex-col w-full">
      <label className="text-md text-slate-800 font-medium mb-1">
        Please provide details.
      </label>
      <textarea className="px-2 py-1 h-30 overflow-scroll resize-none w-full rounded-lg text-slate-800 bg-gray-50 border border-gray-300 focus:border-blue-500 text-sm outline-0 transition-all"></textarea>
    </div>
  );
}

export default Textarea;
