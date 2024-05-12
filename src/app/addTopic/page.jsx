'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const addTopic = () => {
 	const [topics,setTopics] = useState({title:'',description:''});
	const router = useRouter();
	const handleValues = (params)=>(e)=>{
		if(params == 'title')
			setTopics({...topics,title:e.target.value});
		else
			setTopics({...topics,description:e.target.value});
	}
 	const handleSubmitAction = async(e)=>{
		e.preventDefault();
		if(!topics.title || !topics.description ){
			alert('Invalid entry');
			return;
		}
		try {
			const res = await fetch('http://localhost:3000/api/topics',{
				method:'POST',
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify({
					"title":topics.title,
					"description":topics.description
				})
			})
			if(res.ok)
				router.push('/')
			else
				throw new Error('Failed to Add topic')
		} catch (error) {
			console.log(error)
		}
    }
  	
  return (
    <form className='flex flex-col gap-3' onSubmit={handleSubmitAction}>
        <input className='border border-slate-500 px-8 py-2' type="text" onChange={handleValues('title')} placeholder='Topic Title'/>
        <input className='border border-slate-500 px-8 py-2' type="text" onChange={handleValues('description')}  placeholder='Topic Description'/>
        <button className='bg-green-500 text-whte font-bold py-3 px-6 w-fit '>Add Topic</button>
    </form>
  )
}

export default addTopic