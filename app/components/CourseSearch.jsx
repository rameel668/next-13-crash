"use client"

import React from 'react'
import { useState } from 'react'

export default function CourseSearch({ getSearchResults }) {
    const [query, setQuery] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const res = await fetch(`/api/courses/search?query=${query}`);
        const courses = await res.json();
        getSearchResults(courses);

    }

    return (
    <div>
        <form onSubmit={handleSubmit} className='search-form'>
            <input type="text" className="search-input" value={query} onChange={(e) => setQuery(e.target.value)} placeholder='Search Courses....' />
            <button className="search-button" type='submit'>Search</button>
        </form>
    </div>
  )
}
