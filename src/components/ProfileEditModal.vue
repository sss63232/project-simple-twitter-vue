<template>
  <Transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <button class="close-btn" @click="$emit('close')">
              <img src="../assets/X.png" alt="" />
            </button>
            <h4 class="title">編輯個人資料</h4>
            <button class="save-btn">儲存</button>
          </div>

          <div class="modal-body">
            <div class="cover-edit">
              <img
                src="https://fakeimg.pl/598x200/?text=cover"
                alt="cover"
                class="cover-edit__picture"
              />
              <div class="upload-cover">
                <img
                  src="./../assets/icon_uploadPhoto.png"
                  alt="upload"
                  class="upload-cover__picture"
                />
                <img
                  src="./../assets/icon_delete.png"
                  alt="delete"
                  class="upload-cover__cancel"
                />
              </div>
            </div>
            <div class="user-avatar-edit">
              <img
                src="https://fakeimg.pl/140x140/?text=avatar"
                alt="avatar"
                class="user-avatar-edit__picture"
              />
              <img
                src="./../assets/icon_uploadPhoto.png"
                alt="upload"
                class="user-avatar-edit__upload"
              />
            </div>
            <div class="user-name-edit">
              <label for="name">名稱</label>

              <input
                type="text"
                id="name"
                name="name"
                required
                minlength="4"
                maxlength="8"
                size="19px"
              />
            </div>
            <div class="user-description-edit">
              <label for="story">自我介紹</label>
              <textarea id="story" name="story"> </textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
export default {
  name: "ProfileEditModal",
  props: {
    show: Boolean,
  },
};
</script>

<style lang="scss" scoped>
@import "./../styles/variables.scss";

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  height: 657px;
  margin: 0px auto;
  background-color: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  margin-top: 0;
  display: flex;
  align-items: center;
  line-height: 60px;
  position: relative;
  .close-btn {
    margin-left: 20px;
  }
  .title {
    font: {
      weight: 700;
      size: 19px;
    }
    margin-left: 44px;
  }
  .save-btn {
    width: 66px;
    height: 28px;
    background-color: $orange;
    border-radius: 100px;
    font-weight: 500;
    color: $white;
    position: absolute;
    right: 15px;
    top: 15px;
  }
}

.modal-body {
  position: relative;
}
.cover-edit {
  position: relative;
  width: 598px;
  height: 200px;
  &__picture {
    opacity: 0.5;
  }
  .upload-cover {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 90px;
    cursor: pointer;
    img {
      width: 24px;
      height: 24px;
      margin-left: 40px;
    }
  }
}
.user-avatar-edit {
  widows: 120px;
  height: 120px;
  position: absolute;
  top: 140px;
  left: 14px;
  background-color: $white;
  border-radius: 50%;
  &__picture {
    border: 4px solid $white;
    border-radius: 50%;
    opacity: 0.5;
  }
  &__upload {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
  }
}
.user-name-edit {
  margin : {
    top: 80px;
    left: 15px;
  }

  width: 570px;
  height: 54px;
  padding: 0px 15px;
  background-color: #f5f8fa;
  border-bottom: 2px solid #657786;
}
.user-description-edit {
  margin : {
    top: 42px;
    left: 15px;
  }
  width: 570px;
  height: 150px;
  padding: 0px 15px;
  background-color: #f5f8fa;
  border-bottom: 2px solid #657786;
  border-radius: 4px;
}
label {
  font: {
    weight: 500;
    size: 15px;
  }
  color: $secondaryTextColor;
  margin-bottom: 4px;
}
input,
textarea {
  width: 100%;
  border: 0;
  display: inline-block;
  vertical-align: middle;
  background: none;
  resize: none;
  font-size: 19px;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

/* .modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
} */
</style>
