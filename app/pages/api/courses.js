
export const db = [{
  name: 'Réseaux Informatique',
  message: 'Network , router , Switch ,Cisco Pack Tracer',
  time: '32 heures',
  timeFailBen:'4 heures',
  timeFailTit:'données inconnues '
}, {
  name: 'Technologie Web ',
  message: 'html , Js',
  time: '29 heures',
  timeFailBen:'6 heures',
  timeFailTit:'données inconnues '
}, {
  name: 'Système exploitation',
  message: 'idk',
  time: '32 heures',
  timeFailBen:'5 heures',
  timeFailTit:'données inconnues '
},{
  name: 'Management equipe',
  message: 'Jeux de roles',
  time: '22 heures',
  timeFailBen:'8 heures',
  timeFailTit:'données inconnues '
},{
  name: 'English',
  message: 'English i think ',
  time: '15 heures',
  timeFailBen:'6 heures',
  timeFailTit:'données inconnues '
},{
  name: 'DevOps et SRE',
  message: 'idk',
  time: '32 heures',
  timeFailBen:'5 heures',
  timeFailTit:'données inconnues '
},{
  name: 'Database',
  message: 'sql,noSql,querys',
  time: '32 heures',
  timeFailBen:'3 heures',
  timeFailTit:'données inconnues '
}]

export default function handler(req, res) {
  res.status(200).json(db)
}