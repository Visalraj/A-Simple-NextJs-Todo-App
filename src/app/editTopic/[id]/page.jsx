
import EditTopicForm from '@/app/components/editTopicForm'
import React from 'react'

const getTopic = async(id)=>{
    const Data = await fetch(`http://localhost:3000/api/topics/${id}`,{
      cache:'no-store'
    })
    return Data.json();
}

const editTopic = async({params}) => {
  const {id} = params;
  const {result} = await getTopic(id);
  const {title,description} = result;
  return (
    <>
      <EditTopicForm id = {id} title ={title} description = {description}/>
    </>
  )
}

export default editTopic