import Link from 'next/link'
function Contacts() {
    return ( 
        
        <>
        <head>
            <title>
                Lab 4  
                CSS and Javascript
            </title>
        </head>
        <body>
            <h1>Bienvenue sur la page contacts</h1>
                <div>
                    <ul>
                        <Link href="/">
                            <a>Home</a>
                        </Link>
                    </ul>
                    <ul>
                        <Link href="/about">
                            <a>About Us</a>
                        </Link>
                    </ul>
                    <ul>
                        <Link href="/articles">
                            <a>articles pages</a>
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
  export default Contacts