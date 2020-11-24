<template>
    <div class="post main-body p-5">
        <div class="container bg-white text-left">
            <div class="row d-flex flex-column">
                <div class="welcome__component">
                    <h2 class="pt-3 mt-3 text-center">Đăng tin</h2>
                </div>
                <div class="d-flex flex-column mx-5 my-1">
                    <div class="d-flex flex-column m-4">
                        <form action="http://localhost/process_file_upload.php" method="POST" enctype="multipart/form-data">
                            Chọn file để upload:
                            <input type="file" name="upload_file_input" id="upload_file_input">
                                <br>
                                <input type="submit" value="Upload Image" name="submit">
                        </form>
                    </div>
                    <div class="d-flex flex-column m-4">
                        <label class="" for="">Tiêu đề</label>
                        <input class="p-2" type="text">
                    </div>
                    <div class="d-flex flex-column m-4">
                        <label class="" for="">Giá tiền</label>
                        <input class="p-2" type="text">
                    </div>
                    <div class="d-flex flex-column m-4">
                        <label class="" for="">Diện tích</label>
                        <input class="p-2" type="text">
                    </div>
                    <div class="d-flex flex-column m-4">
                        <label class="" for="">Mô tả nhà trọ</label>
                        <textarea name="" id="" cols="30" rows="10">    Vị trí địa lý:  

        Gần trường đại học / cao đẳng:  

        Điều kiện cơ sở vật chất:
                    </textarea>
                    </div>
                    <div class="d-flex px-4 py-3 mb-2">
                        <button class="login__btn mx-3 w-50"><a class="btn-register" href="/dangtruyen">Đăng Tin</a></button>
                        <button class="login__btn mx-3 w-50"><a class="btn-register" href="/">Hủy</a></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "post",
    data() {
        return {
          
        }
    },
    methods: {
      
    }
}
</script>

<style>
#app{
    height: 100%;
}
    .container {
        border-radius: 10px;
    }
    .post {
        font-size: 18px;
    }
    .login__btn{
    background: linear-gradient(to right, #6190e9, #4236f0);
    box-shadow: 0px 11px 34px -10px #6190e9;
     padding:1rem;
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
    .btn-register {
      color: inherit;
      text-decoration: none;
    }
    button:focus {
      outline: none;
    }
    a:hover {
      color: inherit !important;
      text-decoration: none !important;
    }
    label {
        font-size: 20px;
    }
    input, textarea {
        border: 0.5px solid #cccccc;
        border-radius: 10px;
    }
</style>