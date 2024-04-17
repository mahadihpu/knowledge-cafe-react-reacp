import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function Blog() {
    let { blogId } = useParams();
    const [blogData, setBlogData] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${blogId}`)
        .then(res => res.json())
        .then(data => setBlogData(data))
    }, [blogId])


    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/")
    }

  return (
    <div>
        {
            blogData && <div className='w-[90%] m-auto pt-4'>
                 <img
                src={`https://picsum.photos/id/${blogId}/800/400`}
                alt="blog Cover"
                className="w-full h-auto object-cover object-center rounded-md"
              />
              <h4 className='text-4xl pt-2 font-medium'>Title: {blogData.title}</h4>
              <br />
              <p>{blogData.body}</p>
              <button onClick={handleClick} className='mt-3 px-3 py-1 rounded-md bg-purple-300 text-center text-purple-900 font-semibold'>Back</button>
            </div>
        }
    </div>
  )
}
