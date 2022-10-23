<template>
  <n-card
    style="max-width:95%; width: 800px"
    title="Add Product"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <n-form
    ref="formRef"
    :model="data"
    :rules="rules"
    size="medium"
    label-placement="top">
      <n-grid :x-gap="24" cols="1 s:2" responsive="screen">
        <n-gi>
          <n-upload
            :action="fileAction"
            :max=5
            list-type="image-card"
            :default-file-list="fileList"
            :custom-request="updateFile"
            @before-upload="beforeUpload"
            @remove="removeFile"
            class="tw-mb-4"
          />
          <n-form-item-gi label="Product Name" path="title">
            <n-input v-model:value="data.title" placeholder="Product Name" />
          </n-form-item-gi>
          <n-form-item-gi label="Product Category" path="category">
            <n-input v-model:value="data.category" placeholder="Product Category" />
          </n-form-item-gi>
          <n-form-item-gi label="Enabled" path="is_enabled">
            <n-switch v-model:value="data.is_enabled" />
          </n-form-item-gi>
        </n-gi>
        <n-gi>
          <n-grid :x-gap="12" cols="2">
            <n-form-item-gi label="Origin Price" path="origin_price">
              <n-input-number v-model:value="data.origin_price" placeholder="Origin Price" />
            </n-form-item-gi>
            <n-form-item-gi label="Price" path="price">
              <n-input-number v-model:value="data.price" placeholder="Price" />
            </n-form-item-gi>
          </n-grid>
          <n-form-item-gi label="Unit" path="unit">
            <n-input v-model:value="data.unit" placeholder="Unit" />
          </n-form-item-gi>
          <n-form-item-gi label="Description" path="description">
            <n-input v-model:value="data.description" placeholder="Description" />
          </n-form-item-gi>
          <n-form-item-gi label="Content" path="content">
            <n-input v-model:value="data.content" placeholder="Content" />
          </n-form-item-gi>
        </n-gi>
      </n-grid>
    </n-form>
    <div class="tw-text-right">
      <n-button @click="$emit('closeModal', false)" class="tw-mr-3">Cancel</n-button>
      <n-button @click="$emit('updateProduct', data)" type="primary">{{isNew ? 'Add' : 'Update'}}</n-button>
    </div>
  </n-card>
</template>
<script>
import { defineComponent, ref, inject } from 'vue'
import { NCard, NButton, NUpload, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NSwitch } from "naive-ui";
export default defineComponent({
  components: { NCard, NButton, NUpload, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NSwitch },
  props: {
    tempProduct:{
      type: Object,
      default() { return {} }
    },
    isNew:{
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const axios = inject('axios')
    const data = ref(props.tempProduct)
    const fileList = ref([])
    const fileAction = ref(`${import.meta.env.VITE_API}api/${import.meta.env.VITE_PATH}/admin/upload`)
    const updateFile = ({ file, action, onProgress, onFinish, onError}) => {
      const formData = new FormData();
      formData.append('file-to-upload', file.file);
      axios.post(action, formData, {
        onUploadProgress: ({ percent }) => {
          onProgress({ percent: Math.ceil(percent) });
        }
      }).then((res) => {
        if(res.data.success){
          fileList.value.push({status: "finished",url:res.data.imageUrl})
          console.log(data.value.imagesUrl, data.value);
          if(data.value.imagesUrl===undefined){
            data.value.imagesUrl = []
          }
          data.value.imagesUrl.push(res.data.imageUrl)
          onFinish()
          console.log(res.data.imageUrl)
        }
      }).catch((err) => {
        console.log(err)
        onError()
      })
    }
    const removeFile = () => {
      alert(1)
    }
    const beforeUpload = (data) => {
      if (!data.file.file?.type.match("image")) {
        window.$message.error(
          "Only upload image files, please re-upload."
        )
      }
    }
    return { 
      data,
      fileAction,
      beforeUpload,
      updateFile,
      removeFile,
      fileList,
      // fileList: ref([
      //   {
      //     status: "finished",
      //     url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      //   },
      //   {
      //     status: "finished",
      //     url: "https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
      //   }
      // ]),
      rules: {
        title: {
          required: true,
          trigger: ["blur", "input"],
          message: "Please input url"
        },
        category: {
          required: true,
          trigger: ["blur", "input"],
          message: "Please input url"
        },
        origin_price: {
          type: "number",
          required: true,
          trigger: ["blur", "change"],
          message: "Please input url"
        },
        price: {
          type: "number",
          required: true,
          trigger: ["blur", "change"],
          message: "Please input url"
        },
        unit: {
          required: true,
          trigger: ["blur", "input"],
          message: "Please input url"
        },
        description: {
          required: false,
          trigger: ["blur", "input"],
          message: "Please input url"
        },
        content: {
          required: false,
          trigger: ["blur", "input"],
          message: "Please input url"
        }
      }
    }
  }
})
</script>