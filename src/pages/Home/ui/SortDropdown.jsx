import { useState } from 'react';

export default function SortDropdown({ value, onChangeSort, options }) {
    const [open, setOpen] = useState(false);

    const onClickListItem = (index) => {
        onChangeSort(index);
        setOpen(false);
    }
    return (
        <div className="relative">
            <div className="flex items-center gap-2">
                <b className="text-sm">Сортировка по:</b>
                <span
                    className="cursor-pointer border-b border-dotted border-[#fe5f1e] text-sm text-[#fe5f1e]"
                    onClick={() => setOpen(!open)}
                >
                    {options[value].name}
                </span>
            </div>
            {open && (
                <div className="absolute right-0 z-10 mt-3 w-40 overflow-hidden rounded-xl bg-white py-3 shadow-xl">
                    {options.map((obj, i) => (
                        <div
                            key={i}
                            onClick={() => onClickListItem(i)}
                            className={`cursor-pointer px-4 py-3 text-sm ${value === i ? "text-[#fe5f1e] font-bold" : "text-[#171514]"}`}
                        >
                            {obj.name}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
