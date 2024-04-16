import React, { useEffect, useState } from 'react'

export default function Blogs({setBookMarked}) {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, [])

    console.log({blogs})

  return (
    <div className='md:w-2/3'>
        <h1>Blogs</h1>
    </div>
  )
}
