import React from 'react'

export default function Button({children, disabled}) {
  return (
    <button disabled={disabled} className="bg-yellow-500 text-stone-800 
    font-semibold uppercase py-3 px-4 inline-block tracking-widest rounded-full
     hover:bg-yellow-400 transition-colors duration-300 focus:outline-none focus:ring focus:bg-yellow-400
     focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-4">
      {children}
    </button>
  )
}
