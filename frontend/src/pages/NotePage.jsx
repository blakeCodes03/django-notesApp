import React, { useState, useEffect } from 'react'

import { Icon } from '@iconify/react';

import { useParams, useNavigate} from 'react-router-dom'

const NotePage = () => {
    const navigate = useNavigate();
    const  pageId  = useParams();
    const noteId = pageId.id  /*because useParams() returns a key/value pair*/
    // console.log(noteId);


    let [note, setNote] = useState(null)

    useEffect(() => {
        getNote()
    }, [noteId])


    let getNote = async () => {
        if (noteId === 'new') return

        let response = await fetch(`/api/notes/${noteId}`)
        let data = await response.json()
        setNote(data)
    }

    let createNote = async () => {
        fetch(`/api/notes/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    let updateNote = async () => {
        fetch(`/api/notes/${noteId}/update/`, {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(note)
        })
    }


    let deleteNote = async () => {
        fetch(`/api/notes/${noteId}/delete/`, {
            method: 'DELETE',
            'headers': {
                'Content-Type': 'application/json'
            }
        })
        navigate('/');

    }

    let handleSubmit = () => {
        if (noteId !== 'new' && note.body == '') {
            deleteNote()
        } else if (noteId !== 'new') {
            updateNote()
        } else if (noteId === 'new' && note.body !== '') {
            createNote()
        }
        navigate('/');
    }

    let handleChange = (value) => {
        setNote(note => ({ ...note, 'body': value }))
    }

    return (
        <div className="note" >
            <div className="note-header">
                <h3>
                    <Icon onClick={handleSubmit} icon="ep:d-arrow-left" color="#f68657" height="48px"/>
                </h3>
                {noteId !== 'new' ? 
                    <button onClick={deleteNote} >Delete</button>
                 : 
                    <button onClick={handleSubmit} >Done</button>
                }

            </div>
            <textarea onChange={(e) => { handleChange(e.target.value) }} value={note?.body}></textarea>
        </div>
    )
}

export default NotePage
