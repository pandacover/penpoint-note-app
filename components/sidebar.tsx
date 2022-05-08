import React, { useContext } from 'react';
import { GlobalContext } from './Layout';

const Sidebar: React.FC = () => {
    const { setTogglePrompt } = useContext(GlobalContext)
    return (
        <main className='absolute top-16 left-0 bg-green-600 text-white w-48 h-sidebar-height px-2 py-4 flex flex-col items-center'>
            <div>
                <button onClick={() => setTogglePrompt(1)}>Create Note +</button>
            </div>
        </main>
    )
}

export default Sidebar