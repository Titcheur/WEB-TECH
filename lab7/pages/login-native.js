const { default: Layout } = require("../components/layout");

const logForm = document.querySelector('#log-form');
logForm.addEventListener('submit',addLog);

function addLog(e){
    e.preventDefault();
    const formData = new FormData(logForm);
    const username = formData.get('username');
    const password = formData.get('password');
    return (
        <Layout>
            <form id='logForm'>
            <div className="Container">
               <label for='username'> Username</label>
               <imput type='text' name='username' placeholder='Username'></imput>
               <label for='passWord'> Username</label>
               <imput type='password' name='password' placeholder='password'></imput>
            </div>
            </form>
        </Layout>
    
    )
    
}