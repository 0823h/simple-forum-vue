<template>
  <link
    href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
    rel="stylesheet"
    integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
    crossorigin="anonymous"
  />
  <!-- <div class="container">
    <div class="row">
      <div class="col-md-8">
        <div class="media g-mb-30 media-comment">
          <div class="media-body u-shadow-v18 g-bg-secondary g-pa-30">
            <div class="g-mb-15">
              <a-typography-title :level="5">{{ username }}</a-typography-title>
              <span class="g-color-gray-dark-v4 g-font-size-12">{{
                created_time
              }}</span>
            </div>

            <h6>{{ post_title }}</h6>

            <p>{{ post_content }}</p>

            <ul class="list-inline d-sm-flex my-0">
              <li class="list-inline-item g-mr-20">
                <a
                  class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                  href="#!"
                >
                  <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
                  {{ 10 }}
                </a>
              </li>
              <li class="list-inline-item g-mr-20">
                <a
                  class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                  href="#!"
                >
                  <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
                  {{ 10 }}
                </a>
              </li>
              <li class="list-inline-item ml-auto">
                <a
                  class="u-link-v5 g-color-gray-dark-v4 g-color-primary--hover"
                  href="#!"
                >
                  <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
                  Comment
                </a>
              </li>
            </ul>

            <comment-section :post_id="post_id"></comment-section>
          </div>
        </div>
      </div>
    </div>
  </div> -->


  <div class="container">
    <a-card>
      <a-typography-title :level="5">{{ username }}</a-typography-title>
      <span class="g-color-gray-dark-v4 g-font-size-12">{{
        created_time
      }}</span>
      <h6>{{ post_title }}</h6>
      <p>{{ post_content }}</p>
      <i class="fa fa-thumbs-up g-pos-rel g-top-1 g-mr-3"></i>
      {{ 10 }}
      <i class="fa fa-thumbs-down g-pos-rel g-top-1 g-mr-3"></i>
      {{ 10 }}
      <i class="fa fa-reply g-pos-rel g-top-1 g-mr-3"></i>
      Comment
      <comment-section :post_id="post_id"></comment-section>
    </a-card>
  </div>
</template>

<script>
import CommentSection from "./CommentSection.vue";
export default {
  components: {
    CommentSection,
  },
  props: [
    "username",
    "post_title",
    "post_content",
    "created_time",
    "like",
    "dislike",
    "post_id",
  ],
  methods: {},
};
</script>

<style scoped>
</style>
