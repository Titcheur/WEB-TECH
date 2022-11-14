import { useEffect, useState } from 'react'
import Layout from '../components/Layout.js'


export default function Courses() {
  const [courses, setCourses] = useState([])
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/courses')
      const courses = await response.json()
      setCourses(courses)
    }
    fetchData()
  }, [])
  return (
    <Layout>
        <div className='mb-15'>
          <p className='text-center text-4xl mb-7 mt-7'>Voici les différents cours de l'année</p>
            
                {courses.map( course => (
                  
                  <div key={course.name} className="Container">
                      <p className='mt-2 ml-2'>Nom du cours : {course.name}</p> 
                      <p className='mt-2 ml-2'>Description : {course.message}</p>
                      <p className='mt-2 ml-2'>Total heures : {course.time}</p>
                      <p className='mt-2 ml-2'>Nombre d'heure ratés  par Benjamin : {course.timeFailBen}</p>
                      <p className='mt-2 ml-2 mb-2'>Nombre d'heure ratés par Titouan : {course.timeFailTit}</p>
                </div>
                
                ))}
        </div>
    </Layout>
  )
}