import { db } from '../courses.js'

export default function handler(req, res) {
  const course = db.find( course => course.name === req.query.slug)
  if( !course) return res.status(404).json('Wrong courses')
  res.status(200).json(article)
}