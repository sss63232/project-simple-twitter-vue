<template>
  <div>
    <main class="main">
      <div class="cover">
        <img
          src="https://fakeimg.pl/598x200/?text=cover"
          alt="cover"
          class="cover__picture"
        />
      </div>
      <div class="user-avatar">
        <img
          src="https://fakeimg.pl/140x140/?text=avatar"
          alt="avatar"
          class="user-avatar__picture"
        />
      </div>
      <div class="user-edit">
        <button
          class="user-edit__btn"
          v-if="isCurrentUser"
          id="show-modal"
          @click="showModal = true"
        >
          編輯個人資料
        </button>
        <div class="user-edit__followCtrl" v-else>
          <img
            src="./../assets/btn_messege.png"
            alt="avatar"
            class="user-edit__followCtrl__message"
          />
          <img
            src="./../assets/btn_noti.png"
            alt="avatar"
            class="user-edit__followCtrl__noti"
          />
          <button class="user-edit__followCtrl__btn">正在追蹤</button>
        </div>
        <ProfileEditModal :show="showModal" @close="showModal = false" />
      </div>
      <div class="user-info">
        <p class="user-info__name">John Doe</p>
        <p class="user-info__account">@heyjohn</p>
        <div class="user-description">
          <p>
            Amet mininm dfjkj lkf jsidoiyi djrnmeiolv oirehoidjfo jiodsufpodsf
            jiejuro ijkjls
          </p>
        </div>
        <div class="user-network">
          <router-link to="/user/:id/followers">
            <p><span>34個</span>跟隨中</p>
          </router-link>
          <router-link to="/user/:id/following">
            <p><span>59位</span>跟隨者</p>
          </router-link>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import ProfileEditModal from "./ProfileEditModal.vue";

export default {
  name: "ProfileCard",
  components: {
    ProfileEditModal,
  },
  data() {
    return {
      isCurrentUser: true,
      showModal: false,
    };
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";
.main {
  width: 100%;
  position: relative;
  .cover {
    width: 100%;
    height: 200px;
  }
  .user-avatar {
    width: 140px;
    height: 140px;
    position: absolute;
    top: 124px;
    left: 14px;
    &__picture {
      border: 4px solid $white;
      border-radius: 50%;
    }
  }
  .user-edit {
    position: absolute;
    top: 220px;
    right: 15px;
    &__btn {
      width: 120px;
      height: 35px;
      border-radius: 100px;
      border: 1px solid $orange;
      color: $orange;
      font-size: 15px;
      font-weight: 700;
    }
    &__followCtrl {
      display: flex;
      img {
        width: 35px;
        height: 35px;
        margin-right: 10px;
      }
      &__btn {
        width: 90px;
        height: 35px;
        border-radius: 100px;
        background-color: $orange;
        font: {
          weight: 500;
          size: 15px;
        }
        color: $white;
      }
    }
  }

  .user-info {
    margin: {
      top: 69px;
      left: 15px;
    }
    &__name {
      font: {
        size: 19px;
        weight: 900;
      }
    }
    &__account {
      color: $secondaryTextColor;
      font: {
        size: 15px;
        weight: 500;
      }
    }
    .user-description {
      margin-top: 10px;
      color: $black;
      font-size: 14px;
    }
    .user-network {
      margin-top: 10px;
      display: flex;
      font-size: 14px;
      p {
        margin-right: 1rem;
        color: $secondaryTextColor;
        span {
          color: $black;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
