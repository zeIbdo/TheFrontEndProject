document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const regs = document.querySelector('.registerSec');
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const logMes=document.getElementById("login-message");

    axios.get('https://localhost:7049/api/Users', ).then((data)=>{
        data.data.forEach(e => {
            if(e.email===email&&e.password===password){
                logMes.innerHTML=`<h3 class="topTLogin"> Welcome Back ${e.fullname} </h3>

    `;
         regs.innerHTML=``;  
        }
        });
    })
    
});

