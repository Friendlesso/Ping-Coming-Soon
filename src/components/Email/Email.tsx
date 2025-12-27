import React, { useState } from "react"

export function Email() {
  const [email, setEmail] = useState("");
  const [hasError, setHasError] = useState(false);

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    setHasError(email.length > 0 && !e.currentTarget.checkValidity())
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!e.currentTarget.checkVisibility()) {
      setHasError(false);
    }
  }

  return (
    <form action="submit" onSubmit={handleSubmit} className="flex sm:flex-row flex-col items-center gap-4 sm:w-[65%] w-full relative">
      <input
        id="emailInput"
        type="email"
        required
        minLength={4}
        value={email}
        placeholder="Your Email Address..."
        className={`
          w-[70%] 
          py-4 px-5 
          border-2 rounded-3xl 
          relative 
          outline-none
          ${hasError
            ? 'border-(--red-400)'
            : 'border-(--gray-200)'
          }
        `}
        onBlur={handleBlur}
        onChange={(e) => {
          setEmail(e.target.value)
        }}
      />
      {hasError && (
        <p className="sm:-bottom-8 sm:left-6 text-(--red-400) sm:absolute">Please provide a valid email!</p>
      )}
      <button
        type="submit"
        aria-label="Submit Email"
        className="sm:w-[30%] w-[70%] bg-(--blue-500) text-white font-semibold rounded-3xl py-3.5 cursor-pointer hover:opacity-80 transition-opacity duration-150">
        Notify Me
      </button>
    </form>
  )
}