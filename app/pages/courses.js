import { useEffect, useState } from 'react'
import Layout from '../components/layout.js'
import styles from '../styles/Courses.module.css'

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
        <div className={styles.back}>

            
                {courses.map( course => (
                  
                  <div key={course.name} className={styles.Container}>
                      <p>Nom du cours : {course.name}</p> 
                      <p>Description : {course.message}</p>
                      <p>Total heures : {course.time}</p>
                      <p>Nombre d'heure ratés  par Benjamin : {course.timeFailBen}</p>
                      <p>Nombre d'heure ratés par Titouan : {course.timeFailTit}</p>
                </div>
                
                ))}
        </div>
    </Layout>
  )
}