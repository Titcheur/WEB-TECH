import Link from 'next/link'

function About() {
  return ( 
        
    <>
        <head>
            <title>
                Lab 4  
                CSS and Javascript
            </title>
        </head>
        <body>
            <h1>Bienvenue sur la page about</h1>
            <div>
                    <ul>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </ul>
                    <ul>
                        <Link href="/articles">
                            <a>Articles pages </a>
                        </Link>                </ul>
                    <ul>
                        <Link href="/contacts">
                            <a>Contacts pages</a>
                        </Link>
                    </ul>
            </div>
        </body>
        <footer>
            <p> Create by Garreta and Guyon </p>
        </footer>
    </>
  )
  }
  
  export default About