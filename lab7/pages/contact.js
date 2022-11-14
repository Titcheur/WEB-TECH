

import Layout from '../components/layout.js'

export default function Home() {
    return (
        <Layout>
            <div className='back'>
            <p className='text-center mt-3 text-6xl mb-6' >Social NetWorks : </p>
                <div className='Container'>
                    <div >
                        <p className='text-center text-3xl mb-3'>Instagram</p>
                        <p className='text-center'>Guyon Benjamin :</p>
                        <a className='ml-13'   href='https://www.instagram.com/guyonbenjamin'>
                        <div className='ml-2 mb-2'>
                                <img className='mt-2 ' src='/logoinsta.png' alt="" width={20} height={20}></img>
                            </div>
                        </a>
                        <p className='text-center ml-2'>Garreta Titouan : </p>
                        <a  href='https://www.instagram.com/titouan_garreta'>
                            <div className='ml-2'>
                                <img src='/logoinsta.png' alt="" width={20} height={20}></img>
                            </div>
                        </a>    
                        <p className='text-center text-3xl mb-3 '>Github :</p>
                        <a  href='https://github.com/Titcheur/WEB-TECH'>
                            <div className='mb-2 ml-2'>
                                <img src='/GitHubLogo.png' alt="" width={20} height={20}></img>          
                            </div>
                            
                        </a>
                    </div>
                </div>
                <div className='Container'>
                    <div >
                    <p className='text-center text-3xl mb-3 '>Nous contacter : </p>
                        <label className='text-xl ml-2'for="name">Nom : </label>
                        <input  className='border-black border-2 mb-2 ' type="text" id="name" name="name" ></input>
                        <p></p>
                        <label className='text-xl ml-2' for="name">Prénom : </label>
                        <input className='border-black border-2 mb-2 ' type="text" id="name" name="name" ></input>
                        <p></p>
                        <label className='text-xl ml-2' for="name">Adresse EMail : </label>
                        <input className='border-black border-2 mb-2 ' type="email" id="name" name="name" ></input>
                        <p></p>
                        <p className='text-xl text-center mb-2'>Votre message :</p>
                        <textarea className='border-black border-2 mb-2 ml-9' name="ameliorer" id="ameliorer" rows="10" cols="50">
                        Ecrire ici ....
                        </textarea> 
                    </div>
                </div>
            </div>
        </Layout>
    )  
}