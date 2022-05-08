import React, { useContext } from 'react'
import { GlobalContext } from './Layout'
import Note from './note'

const Prompt: React.FC = () => {
    const { togglePrompt } = useContext(GlobalContext)
    return (
        <>
            {togglePrompt === 1 ? <Note.CreateNoteTitlePrompt key={1} /> : ''}
            {togglePrompt === 2 ? <Note.CreateNoteContentPrompt key={2} /> : ''}
        </>
    )
}


export default Prompt
