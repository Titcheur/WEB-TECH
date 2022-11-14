

import Layout from '../components/layout.js'

export default function () {
  return (
    <Layout>
        <div className='back'>
            <p className='text-center font-bold text-2xl'>Information sur la colocation </p>
            <div className='Container'>
                <img className='imgAbout mt-2 m' src='/benjaminPhoto.jpg' width={150} height={150}></img>
                <p className='text-center'> -Benjamin Guyon</p>
                <p className='text-center'> -21 ans</p>
                <p className='text-center mb-2'> -Etudiant en Systeme d'information section Internationale</p>        
            </div>
        <div className='Container'>
            <img className='mt-2'  src='/titouanPhoto.jpg' width={150} height={150}></img>
            <p className='text-center'> -Titoaun Garreta</p>
            <p className='text-center'> -21 ans</p>
            <p className='text-center mb-2'> -Etudiant en Systeme d'information section Internationale</p>
        </div>
            <div className='Container'>                
                <p className='text-center text-xl mb-2 font-bold mt-2'>Localisation de la coloc :</p>
                <iframe className='ml-2 mr-2 mb-2'  src="https://www.google.com/maps/d/embed?mid=1e4oB0a2vY-lK-y5c1Xr6MheO314qZVo&ehbc=2E312F" width="450" height="450"></iframe>   
            </div>
        </div>
    </Layout>
  )
}
