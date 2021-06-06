<template>
  <div class="my-container">
    <van-cell-group v-if="user" class="my-info">
      <van-cell
        class="base-info"
        title="单元格"
        value="内容"
        border="false"
        center
      >
        <van-image
          class="avatar"
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          slot="icon"
          fit="cover"
        />
        <div slot="title" class="name">用户名</div>
        <van-button size="small" round class="update-info">编辑资料</van-button>
      </van-cell>
      <van-grid class="data-info" :border="false">
        <van-grid-item class="data-info-item">
          <div class="test-wrap" slot="text">
            <div class="cont">123</div>
            <div class="text">头条</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="test-wrap" slot="text">
            <div class="cont">123</div>
            <div class="text">关注</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="test-wrap" slot="text">
            <div class="cont">123</div>
            <div class="text">粉丝</div>
          </div>
        </van-grid-item>
        <van-grid-item class="data-info-item">
          <div class="test-wrap" slot="text">
            <div class="cont">123</div>
            <div class="text">获赞</div>
          </div>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <div v-else class="not-login">
      <div @click="$router.push('/login')" class="my-moblie">
        <img class="shouji" src="./moblie.png" alt="">
      </div>
      <div class="text">
        登录 / 注册
      </div>
    </div>
    <van-grid class="nav-grid md-5" :column-num="2">
      <van-grid-item class="nav-grid-item" icon="star-o" text="收藏"/>
      <van-grid-item class="nav-grid-item" icon="browsing-history-o" text="历史"/>
    </van-grid>
    <van-cell title="消息通知" is-link to="/"/>
    <van-cell title="小爱同学" class="md-5" is-link to="/"/>
    <van-cell v-if="user" class="loginout-cell" @click="onLoginout" title="退出登录"/>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'myIndex',
  data () {
    return {}
  },
  computed: {
    ...mapState(['user'])
  },
  methods: {
    onLoginout () {
      console.log('out')
      this.$dialog.confirm({
        title: '退出提示',
        message: '确认退出吗？'
      }).then(() => {
        // on confirm
        this.$store.commit('setUser', null)
      })
        .catch(() => {
          // on cancel
        })
    }
  }
}
</script>

<style scoped lang="less">
.my-container {
  .my-info {
    background: url("./bannerTop_new.png") no-repeat;
    background-size: cover;

    .base-info {
      box-sizing: border-box;
      height: 115px;
      background-color: unset;
      padding-top: 38px;
      padding-bottom: 11px;

      .avatar {
        width: 66px;
        height: 66px;
        border: 1px solid #fff;
        margin-right: 11px;
      }

      .name {
        color: #000;
        font-size: 25px;
      }

      .update-info {
        height: 16px;
        font-size: 10px;
        color: #666;
      }
    }

    .data-info {
      .data-info-item {
        height: 65px;
        color: blue;

        .test-wrap {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;

          .cont {
            font-size: 18px;
          }

          .text {
            font-size: 11px;
          }
        }
      }
    }

    /deep/ .van-grid-item__content {
      background-color: unset;
    }
  }

  .not-login {
    height: 180px;
    background: url("bannerTop_new.png") no-repeat;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .my-moblie {
      height: 66px;
      width: 66px;

      .shouji {
        width: 66px;
        height: 66px;
        border-radius: 50%;
        background-color: #ededed;
        border: 1px solid #fff;

      }
    }

    .text {
      font-size: 14px;
      color: blue;
    }
  }

  /deep/ .nav-grid {
    .data-info-item {
      height: 70px;

      .van-icon {
        font-size: 22px;

        .van-icon-star-o {
          color: red;
        }
      }
    }
  }

  .loginout-cell {
    text-align: center;
    color: red;
  }

  .md-5 {
    margin-bottom: 15px;
  }
}
</style>
