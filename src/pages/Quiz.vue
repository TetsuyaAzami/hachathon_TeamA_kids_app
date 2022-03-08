<template>
  <main>
    <div class="container contents">
      <!-- 左キャラクター画像 -->
      <div class="img-wrapper">
        <img
          src="@/assets/image/robot.png"
          alt="KIDS_APPキャラクターの画像です"
        />
      </div>

      <!-- クイズコンテンツ -->
      <div class="quiz-area">
        <h2 class="contents-category">
          <span>{{ quizNowData.title }}</span>
        </h2>
        <div class="question-box">
          <h3 class="question-number">{{ "第" + quizNowData.id + "問" }}</h3>
          <span class="question-text">{{ quizNowData.question }} </span>
        </div>
        <!-- 答え -->
        <div
          class="answer-box"
          v-for="answer in quizNowData.answers"
          :key="answer.id"
          @click="isAnswerTrue(answer)"
        >
          <span ref="`${answer}`" class="answer-text">{{ answer.answer }}</span>
          <!-- マルバツ画像 -->
          <div ref="answerCheck" class="answer-check hidden">
            <img
              v-show="answer.is_answer == true"
              src="@/assets/image/correct.png"
              alt="判定マーク"
            />
            <img
              v-show="answer.is_answer == false"
              src="@/assets/image/wrong.png"
              alt="判定マーク"
            />
          </div>
        </div>
        <!-- 解説 -->
        <div ref="quizDescription" class="quiz-description hidden">
          <span>
            {{ quizNowData.description }}
            <button
              type="button"
              class="btn toNextButton"
              @click="toNextQuestion()"
            >
              次の問題へ
            </button>
          </span>
        </div>
      </div>

      <!-- 右キャラクター画像 -->
      <div class="img-wrapper">
        <img
          src="@/assets/image/clock.png"
          alt="KIDS_APPキャラクターの画像です"
        />
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      count: 0,
      quizData: null,
      quizNowData: null,
      quizDescription: null,
      answerCheck: null,
    };
  },
  methods: {
    //答えのtrue,falseを判定して解説を表示
    isAnswerTrue(answer) {
      if (answer.is_answer == true) {
        //
      } else {
        //
      }
      this.$refs.quizDescription.classList.remove("hidden");
      this.$refs.answerCheck[0].classList.remove("hidden");
      this.$refs.answerCheck[1].classList.remove("hidden");
    },
    // 次の問題へ
    toNextQuestion() {
      this.count++;
      this.$refs.quizDescription.classList.add("hidden");
      this.$refs.answerCheck[0].classList.add("hidden");
      this.$refs.answerCheck[1].classList.add("hidden");
      this.quizNowData = this.quizData[this.count];
    },
  },
  created() {
    this.axios
      .get(`http://localhost:8080/courses/${this.$route.params.courseId}`)
      .then((res) => {
        this.quizData = res.data.quizzes;
        this.quizNowData = res.data.quizzes[this.count];
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style scoped lang="scss">
.contents {
  display: flex;
  width: 100%;
  margin-top: 52px;
  & .img-wrapper {
    display: flex;
    align-items: center;
    width: 25%;
    padding: 0px 12px;
  }
  img {
    width: 100%;
  }
  & .quiz-area {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 12px;
  }
  .question-box {
    margin: 24px 0px;
    padding: 24px 24px;
    text-align: center;
    background-color: #fff;
  }
  .answer-box,
  .quiz-description {
    position: relative;
    margin-bottom: 18px;
    padding: 12px 24px;
    font-size: 1.5em;
    font-weight: bold;
    background-color: #fff;
    text-align: center;
    .btn {
      margin: 24px auto;
      font-size: 1.2rem;
      background-color: #0688d2;
    }
    .btn:hover {
      color: #fff;
      background-color: #0068b7;
    }
    .answer-check {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        width: 25%;
        height: 25%;
      }
    }
  }
  // .answer-box:hover {
  //   color: #fff;
  //   background-color: #0688d2;
  // }
}

// テキスト装飾指定
.contents-category {
  position: relative;
  box-sizing: border-box;
  height: 60px;
  //角になってる部分の幅だけ要素の幅を狭める
  width: calc(100% - 30px - 30px);
  //角になってる部分の幅だけ要素を右にずらす
  margin: 0px 30px;
  padding: 12px;
  background-color: #ffb400;
  text-align: center;
  font-weight: bold;
  color: #fff;
}
h2:before {
  position: absolute;
  top: 0;
  left: -30px;
  content: "";
  border-width: 30px 30px 30px 0;
  border-style: solid;
  border-color: transparent #ffb400 transparent transparent;
}
h2:after {
  position: absolute;
  top: 0;
  right: -30px;
  content: "";
  border-width: 30px 0 30px 30px;
  border-style: solid;
  border-color: transparent #ffb400 transparent #ffb400;
}
.question-number {
  margin-bottom: 24px;
  font-weight: bold;
  color: #0068b7;
}
.question-text {
  font-size: 1.5em;
  font-weight: bold;
  color: #04294f;
}
.answer-text {
  margin: auto;
}
.hidden {
  display: none;
}
</style>
