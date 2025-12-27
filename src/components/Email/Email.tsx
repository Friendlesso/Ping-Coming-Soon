export function Email() {
  return (

    <div className="flex sm:flex-row flex-col items-center gap-4 sm:w-[65%] w-full">
      <input
        id="emailInput"
        type="email"
        placeholder="Your Email Address..."
        className="
          w-[70%] 
          py-4 px-5 
          border-2 border-(--gray-200) rounded-3xl 
          relative 
          outline-none
        "
      />
      <button className="sm:w-[30%] w-[70%] bg-(--blue-500) text-white font-semibold rounded-3xl py-3.5 cursor-pointer hover:opacity-80 transition-opacity duration-150">
        Notify Me
      </button>
    </div>
  )
}