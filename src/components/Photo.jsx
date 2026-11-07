import { useState } from "react";

/* Put your photo at public/images/profile.jpg. A placeholder shows if it is missing. */
export default function Photo({ className = "", ratio = "aspect-square" }) {
  const [failed, setFailed] = useState(false);
  const base = `${ratio} rounded-2xl border-2 border-ink ${className}`;
  if (failed)
    return (
      <div role="img" aria-label="Profile photo placeholder" className={`graph grid place-items-center text-sage-deep ${base}`}>
        <svg viewBox="0 0 24 24" className="h-1/2 w-1/2" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true"><circle cx="12" cy="8" r="4" /><path d="M4 21c1-5 4-7 8-7s7 2 8 7" /></svg>
      </div>
    );
  return <img src={`${import.meta.env.BASE_URL}images/profile.jpg`} alt="Profile photo of Siva Prasad Chakri Dhanakoti" onError={() => setFailed(true)} className={`object-cover ${base}`} />;
}
