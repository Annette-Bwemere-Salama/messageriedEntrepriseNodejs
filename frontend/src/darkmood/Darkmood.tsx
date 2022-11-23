import React from 'react'
function Darkmood() {
    // const [darkToggle, setDarkToggle] = React.useState(false)
    // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //     document.documentElement.classList.add('dark')
    //   } else {
    //     document.documentElement.classList.remove('dark')
    //   }

    //   localStorage.theme = 'light'

    //   localStorage.theme = 'dark'

    //   localStorage.removeItem('theme')
    return (
        <button
            // onClick={() => setDarkToggle(!darkToggle)}
            className="mt-auto flex items-center justify-center hover:text-indigo-100 text-indigo-500 h-10 w-10">
            <svg className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>

        </button>
    )
}

export default Darkmood
