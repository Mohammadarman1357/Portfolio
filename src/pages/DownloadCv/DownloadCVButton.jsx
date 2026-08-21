import { useState } from "react";
import "./DownloadCVButton.css";

export default function DownloadCVButton() {
    const [checked, setChecked] = useState(false);

    const handleChange = (e) => {
        if (checked) return;

        setChecked(true);

        // Start CV download
        const link = document.createElement("a");
        link.href = "../../../public/ArmanCV.pdf";
        link.download = "ArmanCV.pdf";

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // Reset after complete animation
        setTimeout(() => {
            setChecked(false);
        }, 5000);
    };

    return (
        <div className="download-container">

            <label
                className={`download-label ${checked ? "download-checked" : ""
                    }`}
            >

                <input
                    type="checkbox"
                    className="download-input"
                    checked={checked}
                    onChange={handleChange}
                />

                <span className="download-circle">

                    {/* Download Icon */}
                    <svg
                        className="download-icon"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M12 19V5m0 14-4-4m4 4 4-4"
                        />
                    </svg>

                    {/* Square */}
                    <div className="download-square" />

                </span>

                <p className="download-title">
                    Download CV
                </p>

                <button
                    type="button"
                    className="download-title download-open"
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();

                        window.open("/ArmanCV.pdf", "_blank", "noopener,noreferrer");
                    }}
                >
                    Open
                </button>

            </label>

        </div>
    );
}