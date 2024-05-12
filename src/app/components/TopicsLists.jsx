import React from 'react';
import RemoveBtn from './RemoveBtn';
import {HiPencilAlt} from 'react-icons/hi';
import Link from 'next/link';

const getTopics = async()=>{
	try {
		const result = await fetch('http://localhost:3000/api/topics',{
			cache:'no-store'
		});
		if(!result.ok){
			throw new Error('Failed to Fetch Data');
		}
		return result.json();
	} catch (error) {
		console.log('Error on loading - '+error)
	}
}

const TopicsLists = async () => {
	const {topics} = await getTopics();
	topics.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
	
  return (
    <>
		{topics.map((topic,id)=>(
			<div key ={id} className='p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start'>
				<div>
					<h2 className='font-bold text-2xl'>{topic.title}</h2>
					<div>
						{topic.description}
					</div>
				</div>
				<div className='flex gap-2'>
					<RemoveBtn id={topic._id}/>
					<Link href={`/editTopic/${topic._id}`}><HiPencilAlt size={24}/></Link>
				</div>
			</div>
		))}
    </>
  )
}

export default TopicsLists