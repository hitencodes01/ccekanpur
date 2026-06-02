import { useState } from "react";

const slides = [
    { id: 1, src: "cce1.jpeg", alt: "CCE Gallery 1" },
    { id: 2, src: "cce2.jpg", alt: "CCE Gallery 1" },
    { id: 3, src: "cce3.jpg", alt: "CCE Gallery 1" },
    { id: 4, src: "cce4.jpg", alt: "CCE Gallery 1" },
    { id: 5, src: "cce5.jpg", alt: "CCE Gallery 1" },
];

export default function Gallery() {
    const [current, setCurrent] = useState(0);

    const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
    const next = () => setCurrent((c) => (c + 1) % slides.length);

    return (
        <div className="flex flex-col items-center bg-black w-full sm:w-1/2 mx-auto select-none">
            {/* Slide */}
            <h1 className="font-bold text-xl text-[#38bbeb] p-2">Gallery</h1>
            <div className="relative w-full overflow-hidden  rounded-xl shadow-lg">
                <img
                    src={slides[current].src}
                    alt={slides[current].alt}
                    className="w-full h-64  md:h-100 object-cover transition-opacity duration-300"
                />

                {/* Prev / Next arrows */}
                <button
                    onClick={prev}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-150"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button
                    onClick={next}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full w-8 h-8 flex items-center justify-center transition-colors duration-150"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                    </svg>
                </button>
            </div>

            {/* Dot / number navigation */}
            <div className="flex items-center justify-center gap-2 py-3">
                {slides.map((slide, i) => (
                    <button
                        key={slide.id}
                        onClick={() => setCurrent(i)}
                        className={`w-7 h-7 rounded-full text-xs font-bold transition-all duration-150 ${i === current
                                ? "bg-[#38bbeb] text-white shadow-md shadow-[#38bbeb]/30 scale-110"
                                : "bg-gray-200 text-gray-500 hover:bg-[#38bbeb]/30 hover:text-[#38bbeb]"
                            }`}
                    >
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
    );
}