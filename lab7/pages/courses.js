import Layout from '../components/Layout.js'
import Head from 'next/head'


export default function Courses({courses}) {
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

export async function getStaticProps(ctx) {
  const response = await fetch(`http://localhost:3000/api/courses`)
  const courses = await response.json()
  return {
    props: {
      courses: courses
    }
  };
}