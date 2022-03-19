<template>
  <main>
    <div class="container">
      <div class="user-infomation">
        <div class="user-profile">
          <img
            src="@/assets/image/account.png"
            alt="ユーザープロフィールの画像です"
            width="48px"
          />
          <span id="user">ニックネーム</span>
        </div>
        <div class="user-point">
          <img
            src="@/assets/image/point.png"
            alt="ユーザープロフィールの画像です"
            width="32px"
          />
          <span>保有ポイント</span>
        </div>
      </div>
    </div>
    <section class="container main-contents">
      <h2 class="page-info">
        <span>学習コースを選ぼう</span>
      </h2>
      <div class="cards">
        <article class="card" v-for="course in courses" :key="course.id">
          <router-link
            :to="{ name: 'courseDetail', params: { courseId: course.id } }"
          >
            <div class="card-body">
              <h5 class="card-title">{{ course.title }}</h5>
            </div>
            <div class="img-wrapper">
              <img
                :src="require('@/assets/image/' + course.img)"
                class="card-img-bottom"
                alt="〇〇の画像です"
              />
            </div>
            <i class="fas fa-check-circle"></i>
          </router-link>
        </article>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return { courses: null };
  },
  created() {
    this.axios
      .get("/courses", {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        console.log(res.data);
        this.courses = res.data.courses;
      })
      .catch((err) => {
        console.log("エラー発生");
        console.log(err);
      });
  },
};
</script>
<style lang="scss" scoped>
body div.container:first-of-type {
  margin-top: 52px;
}
.user-infomation {
  display: flex;
  height: 80px;
  background-color: #fff;
  color: #0d6efd;
  font-weight: bold;
  justify-content: space-around;
  & .user-profile {
    img {
      margin-right: 8px;
    }
    & span {
      line-height: 5;
    }
  }
  & .user-point {
    img {
      margin-right: 8px;
    }
    span {
      line-height: 5;
    }
  }
}

.main-contents {
  margin: 24px auto;
}
.page-info {
  position: relative;
  left: 10%;
  box-sizing: border-box;
  height: 60px;
  //角になってる部分の幅だけ要素の幅を狭める
  width: calc(80% - 30px - 30px);
  //角になってる部分の幅だけ要素を右にずらす
  margin-left: 30px;
  padding: 12px;
  background-color: #f55b23;
  text-align: center;
  font-weight: bold;
  color: #fff;
  @media only screen and (max-width: 767px) {
    left: 0%;
    width: calc(100% - 30px - 30px);
  }
}

h2:before {
  position: absolute;
  top: 0;
  left: -30px;
  content: "";
  border-width: 30px 30px 30px 0;
  border-style: solid;
  border-color: transparent #f55b23 transparent transparent;
}
h2:after {
  position: absolute;
  top: 0;
  right: -30px;
  content: "";
  border-width: 30px 0 30px 30px;
  border-style: solid;
  border-color: transparent #f55b23 transparent #f55b23;
}

.cards {
  margin-top: 24px;
  display: grid;
  // grid-template-columns: repeat(3, 1fr);
  grid-template-columns: repeat(auto-fit, minmax(310px, 1fr));
  gap: 20px;
  @media only screen and (max-width: 767px) {
    margin: 24px;
  }
}
.card {
  position: relative;
  & .card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #ffbb00;
    & .card-title {
      display: block;
      margin: 0;
      font-weight: bold;
      color: #fff;
    }
  }

  & .img-wrapper {
    & img {
      display: block;
      width: 100%; /*任意の横幅を指定*/
      object-fit: contain;
    }
    background: #fff;
  }
  & .fa-check-circle {
    position: absolute;
    font-size: 5rem;
    color: green;
    left: 100%;
    top: 100%;
    transform: translate(-60%, -60%);
    z-index: 1;
    background-color: #fff;
    border-radius: 40px;
  }
}
</style>
