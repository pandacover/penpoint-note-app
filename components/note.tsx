import React, { useState, useContext, useEffect } from 'react'
import { motion } from 'framer-motion'
import { GlobalContext } from './Layout'
import Loader from './loader'
import { useRemark } from 'react-remark'

const variantTitlePrompt = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 }
}

const CreateNoteTitlePrompt: React.FC = () => {
    const [noteTitle, setNoteTitle] = useState('')
    const { setTogglePrompt } = useContext(GlobalContext)
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault()
        setIsLoading(true)
        setTimeout(() => {
            setIsLoading(false)
            setTogglePrompt(2)
        }, 3000)

    }

    return (
        <main className='absolute left-0 top-0 w-screen h-screen z-[999] bg-[#0007] text-sm flex flex-col justify-center items-center'>
            <motion.div variants={variantTitlePrompt} initial='hidden' animate='visible' className='w-4/12 min-h-fit flex flex-col'>
                <div className='w-full h-8 bg-zinc-700 flex justify-center items-center text-white font-medium'>
                    <span>Add a title</span>
                </div>
                <form className='w-full min-h-fit bg-zinc-900 px-4 py-6 flex flex-col items-center gap-6'>
                    <label htmlFor='note-title' className='sr-only'>Note Title</label>
                    <input value={noteTitle} onChange={({ currentTarget }) => setNoteTitle(currentTarget.value)} autoComplete='off' maxLength={48} className='appearance-none w-full h-2 px-2 py-4 outline-none rounded-sm' type='text' name='note-title' id='note-title' />
                    <div className='w-full flex'>
                        <div className='flex-1 text-white'>
                            <span className={`${noteTitle.length === 48 ? 'text-red-500' : 'text-green-500'}`}>{noteTitle.length}</span> / 48
                        </div>
                        <div className='flex-1 flex justify-end space-x-4' >
                            <button className='px-4 py-0 bg-green-500 text-white rounded-sm flex gap-4 items-center' onClick={(e) => handleClick(e)}>{isLoading ? 'Adding' : 'Add'} {isLoading ? <Loader /> : ''}</button>
                            <button className='px-2 py-1 bg-white rounded-sm' onClick={() => setTogglePrompt(0)}>Cancel</button>
                        </div>
                    </div>
                </form>
            </motion.div>
        </main>
    )
}

const CreateNoteContentPrompt: React.FC = () => {
    const [stateContent, setStateContent] = useState('')
    const [reactContent, setMarkdownSource] = useRemark()
    useEffect(() => {
        const timeout = setTimeout(() => {
            setMarkdownSource(stateContent)
        }, 250)

        return () => {
            clearTimeout(timeout)
        }
    }, [stateContent, setMarkdownSource])

    return (
        <div className='absolute left-48 top-16 w-content-width h-sidebar-height p-4 z-[999] flex gap-2'>
            <form className='flex-1'>
                <label htmlFor='note-content' className='sr-only'>Note Content</label>
                <textarea value={stateContent} onChange={({ currentTarget }) => setStateContent(currentTarget.value)} autoFocus className='outline-none w-full min-h-full bg-transparent text-white p-4' placeholder='Just start typing' name='note-content' id='note-content'></textarea>
            </form>
            <div className='flex-1 px-2 min-h-full text-white overflow-y-scroll'>
                <pre>
                    {reactContent}
                </pre>
            </div>
        </div>
    )
}


const Note = {
    CreateNoteTitlePrompt,
    CreateNoteContentPrompt
}

export default Note