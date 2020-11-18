<template>
    <div class="container">
        <div class="welcome__component">
            <h2 class="pt-2">Đăng nhập</h2>
        </div>
        <div class="form__component">
            <div class="input__box box__space">
                <label class="input__label">User name</label>
                <input class="input__model" type="text"/>
            </div>
            <div class="input__box box__space">
                <label class="input__label">
                    Password
                </label>
                <input class="input__model" :type="passwordFieldType" v-model="password"/>
                
                
                <button class="btn-inhenrt input__icon" @click="switchVisibility" v-if="isEye">
                  <i class="fas fa-eye" @click="isEye = !isEye"></i>
                </button>
                <button  class="btn-inhenrt input__icon" @click="switchVisibility" v-else>
                  <i class="fas fa-eye-slash" @click="isEye = !isEye"></i>
                </button>
            </div>
            <div class="sub__action box__space">
                <div>
                    <a href="#" class="sub__action__link">Quên mật khẩu</a>
                </div>
                <a href="#" class="sub__action__link">Lấy lại mật khẩu?</a>
            </div>
            <div class="main__action">
                <button class="login__btn w-50"><a class="btn-register" href="/login">Đăng nhập</a></button>
            </div>
            <div class="main__action">
                <button class="login__btn "><a class="btn-register" href="/register">Đăng ký</a></button>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "login",
    data() {
        return {
          password: '',
          passwordFieldType: 'password',
          isEye: false,
        }
    },
    methods: {
      switchVisibility() {
        this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password'
      }
    }
}
</script>

<style>
    body{
    background: linear-gradient(to right, #d8f385, #fbff00);
    display: flex;
    justify-content: center;
    align-items:center;
    height:100vh;
    }
    #app {
      background-color: inherit;
      font-size: 15px;
    }
    .container{
      background-color:white;
      border-radius: 1rem;
      width:300px;
      height: 400px;
      overflow: hidden;
    }
    .center__box{
      position: absolute;
      top: 40%;
      left: 0.5rem;
      transform: translateY(-50%);
      z-index: 2;
      color: white;
    }
    .center__box span,.center__box h1{
      padding:0;
      margin:0
    }
    .form__component{
      display: flex;
      justify-content: center;
      align-items: stretch;
      flex-direction: column;
      padding:1rem;
    }
    .box__space{
      margin-bottom: 1rem;
    }
    .input__box{
      border:1px solid rgb(209, 208, 208);
      position: relative;
      margin:1rem 0;
      border-radius:0.5rem;
      padding:0.25rem;
    }
    .input__label{
      position: absolute;
      top:0;
      transform: translateY(-50%);
      left: 1rem;
      font-size: 0.7rem;
      font-weight: 600;
      background-color: white;
      padding:0.25rem;
      text-transform: uppercase;
    }
    .input__model{
      border:none;
      outline:none;
      height:26px;
      padding:0 1rem;
      font-weight: bold;
    }
    .input__icon{
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      color:rgb(209, 208, 208);
    }
    .sub__action{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.75rem;
    }
    .main__action{
      display:flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;
    }
    .login__btn{
    background: linear-gradient(to right, #59ea72, #16ad52);
    box-shadow: 0px 11px 34px -10px #46a952;
     padding:0.75rem;
     width:75%;
     border:none;
     outline:none;
     border-radius: 100px;
     color:white;
     font-weight: bold;
     display:flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
    }
    .sub__action__link{
      color:black;
      text-decoration: initial;
    }
    i{
        font-family: 'FontAwesome';
        font-size: 18px;
    }
    .input__icon{
      position: absolute;
      right: 0.5rem;
      top: 50%;
      transform: translateY(-50%);
      color:#717171;
    }
    .btn-inhenrt {
      background: inherit;
      border: none;
    }
    button:focus {
      outline: none;
    }
    .btn-register {
      color: inherit;
    }
    .btn-register:hover  {
      color: inherit;
      text-decoration:  none;
    }
</style>