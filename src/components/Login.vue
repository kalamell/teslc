<template>
    <div class="container">
        <div id="loginbox" style="margin-top:20px;" class="mainbox col-md-4 col-md-offset-4 col-sm-8 col-sm-offset-2">
            <div class="panel panel-info" >
                <div class="panel-heading">
                    <div class="panel-title">
                        <img src="../assets/logo.png"  class='img-responsive' style="width: 250px;" />
                    </div>
                </div>
                <div style="padding-top:30px" class="panel-body" >

                    <div style="display:none" id="login-alert" class="alert alert-danger col-sm-12"></div>

                    <form @submit.prevent="login" id="loginform" class="form-horizontal" role="form">
                            <div style="margin-bottom: 25px" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                                <input
                                    id="login-username"
                                    type="text"
                                    class="form-control"
                                    name="username"
                                    v-model="username"
                                    @blur="checkUsername"
                                    ref="username"
                                    value="" placeholder="รหัสพนักงาน">
                            </div>

                            <div style="" class="input-group">
                                <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                                <input id=""
                                    type="password"
                                    class="form-control"
                                    name="password"
                                    v-model="password"
                                    v-show="!showPass"
                                    @focus="checkUsername"
                                    placeholder="รหัสผ่าน">

                                <input id=""
                                    type="text"
                                    class="form-control"
                                    name="password"
                                    v-model="password"
                                    v-show="showPass"
                                    placeholder="รหัสผ่าน">
                            </div>
                            <div class="input-group" style="margin-bottom: 10px; ">
                              <div class="checkbox">
                                <label>
                                  <input id="chkShowPassword"
                                    type="checkbox"
                                    name="showpass"
                                    @click="showPass = !showPass"
                                    value="1"> แสดงรหัสผ่าน
                                </label>
                              </div>
                            </div>


                            <div style="margin-top:10px" class="form-group">
                                <div class="col-sm-12">
                                  <button id="btn-login" type="submit" class="col-sm-12 btn btn-success" style="padding-top: 10px; padding-bottom: 10px;">Login  </button>
                                </div>
                            </div>

                            <div class="form-group">
                                <div class="col-md-12 control">
                                    <div style="">
                                        <a href="#" @click="forgetPassword">
                                            ลืมรหัสผ่าน
                                        </a>
                                    </div>
                                </div>
                            </div>
                    </form>
                </div>
            </div>
         </div>
    </div>

</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      showPass: false,
      showForget: false,
      username: '',
      password: '',
      forgetPass: false,
    };
  },
  methods: {
    forgetPassword() {
    },
    login() {
        console.log('ffd')
        //this.$store.commit('setUser', '1');
        this.$router.push('/');
    },
    checkUsername() {
        if (this.username == '') {
            this.$refs.username.focus();
        }
    }
  },
};
</script>
<style>


* {
    -webkit-box-sizing: border-box;
       -moz-box-sizing: border-box;
            box-sizing: border-box;
    outline: none;
}

body {
    background-color: #29363f;
}
.checkbox label, .radio label, a { color: #fff; }
.panel-info>.panel-heading, .panel-info,.panel-info { background-color: transparent; border: 0px }
img {
 margin: 0 auto;
}

</style>