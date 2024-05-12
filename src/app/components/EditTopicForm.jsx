'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const EditTopicForm = ({id,title,description}) => {
	const route = useRouter();
 	const[topic,setTopic] = useState({newtitle:title,newdescription:description});
  	const handleDataChange = (params)=>(e)=>{
		if(params == 'title')
		setTopic({...topic,newtitle:e.target.value});
		else
		setTopic({...topic,newdescription:e.target.value});
  	}

	const handleUpdate = async(e)=>{
		e.preventDefault();
		console.log(title+'     '+description)
		try {
			const res = await fetch(`http://localhost:3000/api/topics/${id}`,{
				method:"PUT",
				headers:{
					"Content-type":"application/json"
				},
				body:JSON.stringify({
					"newTitle":topic.newtitle,
					"newDescription": topic.newdescription
				})
			})
			if(!res.ok)
				throw new Error('Error on updating')

			route.push("/");
		} catch (error) {
			console.log(error)
		}
	}

	return (      
		<>
			<form className='flex flex-col gap-3'>
				<input className='border border-slate-500 px-8 py-2' type="text" defaultValue={title} onChange = {handleDataChange('title')} placeholder='Topic Title'/>
				<input className='border border-slate-500 px-8 py-2' type="text" defaultValue={description} onChange = {handleDataChange('description')} placeholder='Topic Description'/>
				<button className='bg-green-500 text-whte font-bold py-3 px-6 w-fit' onClick={handleUpdate}> Update Topic</button>
			</form>
		</>      
	)
}

export default EditTopicForm