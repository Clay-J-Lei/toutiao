<template>
  <div class="login-container">
    <van-nav-bar
      title="登录"
      left-arrow
      @click-left="$router.back()"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="user.username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="user.password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { login } from '@/api/user'
import { Toast } from 'vant'

export default {
  name: 'loginIndex',
  data () {
    return {
      user: {
        username: '',
        password: ''
      }
    }
  },
  methods: {
    async onSubmit () {
      Toast.loading({
        message: '登录中...',
        forbidClick: true,
        duration: 0
      })
      try {
        const res = await login(this.user)
        if (res.status === 200) {
          Toast.success('登录成功！')
          this.$store.commit('setUser', res.data)

          this.$router.back()
        }
      } catch (err) {
        Toast.fail('登录失败，用户名或密码错误')
      }
    }
  }
}
</script>

<style scoped lang="less">
.login-container {
  .send-btn {
    width: 76px;
    height: 23px;
    background-color: #ededed;

    .van-button__text {
      font-size: 11px;
      color: #666666;
    }
  }

  .login-btn-wrap {
    padding: 26px 16px;

    .login-btn {
      background-color: #6db4fb;
      border: none;

      .van-button__text {
        font-size: 15px;
      }
    }
  }
}
</style>
