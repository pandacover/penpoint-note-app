import React from 'react'

const Navbar: React.FC = () => {
    return (
        <header className='w-full h-16 absolute top-0 left-0 flex justify-between items-center px-4 py-2 border-b-2 border-green-600 text-green-500'>
            <h3>Penpoint</h3>
            <div>
                <button>Logout</button>
            </div>
        </header>
    )
}

export default Navbar