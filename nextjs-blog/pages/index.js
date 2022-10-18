import Link from 'next/link'

function Home() {
  return ( 
        
    <>
    <head>
        <title>
            Lab 4  
            CSS and Javascript
        </title>
    </head>
    <body>
        <h1>Bienvenue sur la page index</h1>
            <div>
                <ul>
                    <Link href="/articles">
                        <a>Articles</a>
                    </Link>
                </ul>
                <ul>
                    <Link href="/about">
                        <a>About Us</a>
                    </Link>
                </ul>
                <ul>
                    <Link href="/contacts">
                        <a>Contacts pages</a>
                    </Link>
                </ul>
            </div>
        </body>
        <footer>
            <p> Create by Garreta and Guyon (footer)</p>
        </footer>
        </>
  )
}

export default Home