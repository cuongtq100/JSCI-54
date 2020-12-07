

const style =`
    .register-container{
        width: 100vw;
        height:100vh;
        background: url('https://www.cancer.org/content/dam/cancer-org/images/photographs/single-use/espresso-coffee-cup-with-beans-on-table-restricted.jpg');
        background-repeat: no-repeat;
         background-size: cover;
         display:flex;
         justify-content:flex-end;
       
    }
    #register-form{
        width:30vw;
        background: #fff;
        height:100vh;
    }
    h1{
        text-align:center;
        color:#363636;

    }
`
class RegisterScreen extends HTMLElement{
    constructor(){
        super();
        this._shadowroot = this.attachShadow({mode: 'open'})
    }
    connectedCallback(){
this._shadowroot.innerHTML=`
      <style> ${style} </style>
        <div class = 'register-container'>
            <form id='register-form'>
              <h1>CI Project<h1>
              <input-wrapper id='firstname' type='text' placeholder='First name'></input-wrapper>
              <input-wrapper id='lastname' type='text' placeholder='Last name'></input-wrapper>
              <input-wrapper id='email' type='text' placeholder='Email'></input-wrapper>
              <input-wrapper id='password' type='password' placeholder='Password'></input-wrapper>
              <input-wrapper id='confirm-password' type='text' placeholder='Confirm Password'></input-wrapper>
              <button>Register</button>
            </form>
        </div>
`
const registerForm = this._shadowroot.getElementById('register-form')
        registerForm.addEventListener('submit',(e)=>{
            e.preventDefault();
            const firstname = this._shadowroot.getElementById('firstname').Value;
            const lastname = this._shadowroot.getElementById('lastname').Value;
            const email = this._shadowroot.getElementById('email').Value;
            const password = this._shadowroot.getElementById('password').Value;
            const confirmpassword = this._shadowroot.getElementById('confirm-password').Value;
            const data ={
                'name': `${firstname} ${lastname}`,
                'email' : email,
                'password': CryptoJS.MD5(password).toString()
                
            }

            if (!(firstname && lastname && email && password && confirmpassword)){
                alert('Hãy điền đầy đủ thông tin')
            } else if (password != confirmpassword){
                alert('Mật khẩu không khớp')
            } else {
                firebase.firestore().collection('users').add(data);
            console.log(data.password);
            alert('Đăng ký thành công')
            }

            
        })
    }
 

}
window.customElements.define('register-screen',RegisterScreen)


