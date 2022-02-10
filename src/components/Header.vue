<template>
  <!-- header navigation -->
  <header>
    <nav class="navbar navbar-dark bg-primary">
      <div class="container-fluid">
        <span class="navbar-brand mb-0 h1">KIDS APP TITLE</span>
        <ul class="header-nav-list">
          <li class="sign-up-button"><fa class="fas fa-sign-in" />会員登録</li>
          <li class="sign-in-button">
            <i class="fas fa-user-circle fa-lg"></i>ログイン
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script></script>
<style scoped lang="scss">
//header
.container-fluid {
  padding: 0 24px;
  height: 50px;
}
.header-user-profile {
  img {
    margin-right: 8px;
  }
  color: #fff;
  font-weight: bold;
}
.header-nav-list {
  margin-bottom: 0;
  display: flex;
  .sign-up-button {
    color: #fff;
  }
  .sign-in-button {
    color: #fff;
  }
  .fas {
    margin-right: 8px;
    line-height: 40px;
  }
  li {
    line-height: 40px;
    margin-left: 24px;
  }
}
</style>
