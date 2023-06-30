<template>
  <a-form :model="formState" :label-col="labelCol" :wrapper-col="wrapperCol">
    <a-form-item label="Post title">
      <a-input v-model:value="formState.post_title" />
    </a-form-item>

    <a-form-item label="Post content">
      <a-textarea v-model:value="formState.post_content" />
    </a-form-item>

    <a-form-item label="Publish?">
      <a-checkbox-group v-model:value="formState.published">
        <a-checkbox value="1" name="type">Yes</a-checkbox>
      </a-checkbox-group>
    </a-form-item>

    <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="createPost(formState)">Create</a-button>
      <a-button style="margin-left: 10px">Cancel</a-button>
    </a-form-item>
  </a-form>
</template>
<script>
import { defineComponent, reactive, toRaw, ref } from "vue";
import { mapActions } from "vuex";
export default defineComponent({
  setup() {
    const formState = reactive({
      post_title: "",
      post_content: "",
      published: [],
    });
    const onSubmit = () => {
      console.log("submit!", toRaw(formState));
    };
    const visible = ref(false);

    const showModal = () => {
      visible.value = true;
    };

    // const handleOk = (e) => {
    //   console.log(e);
    //   visible.value = false;
    // };
    return {
      labelCol: {
        span: 4,
      },
      wrapperCol: {
        span: 14,
      },
      formState,
      onSubmit,
      visible,
      showModal,
    };
  },
  methods: {
    ...mapActions(["createPost"]),
  },
});
</script>

<style scoped>
textarea {
  font-size: 2rem;
}
</style>
