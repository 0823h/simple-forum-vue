<template>
  <div class="be-comment">
    <div class="be-comment-content">
      <span class="be-comment-name">
        <a href="blog-detail-2.html">{{ comment_user }}</a>
      </span>
      <span class="be-comment-time">
        <i class="fa fa-clock-o"></i>
        {{ comment_time }}
      </span>
      <p class="be-comment-text">
        {{ comment_content }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["comment_user", "comment_time", "comment_content"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.comments-title {
  font-size: 16px;
  color: #262626;
  margin-bottom: 15px;
  font-family: "Conv_helveticaneuecyr-bold";
}

.be-img-comment {
  width: 60px;
  height: 60px;
  float: left;
  margin-bottom: 15px;
}

.be-ava-comment {
  width: 60px;
  height: 60px;
  border-radius: 50%;
}

.be-comment-content {
  margin-left: 80px;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-name {
  font-size: 13px;
  font-family: "Conv_helveticaneuecyr-bold";
}

.be-comment-content a {
  color: #383b43;
}

.be-comment-content span {
  display: inline-block;
  width: 49%;
  margin-bottom: 15px;
}

.be-comment-time {
  text-align: right;
}

.be-comment-time {
  font-size: 11px;
  color: #b4b7c1;
}

.be-comment-text {
  font-size: 13px;
  line-height: 18px;
  color: #7a8192;
  display: block;
  background: #f6f6f7;
  border: 1px solid #edeff2;
  padding: 15px 20px 20px 20px;
}
</style>
