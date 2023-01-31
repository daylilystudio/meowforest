<template>
  <n-card
    style="max-width:95%; width: 800px"
    :title="(isNew?'Add':'Edit')+' Product'"
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
            <n-radio-group v-model:value="data.category" name="category">
              <n-radio-button value="貓の食品">
                貓の食品
              </n-radio-button >
              <n-radio-button value="貓の用品">
                貓の用品
              </n-radio-button>
              <n-radio-button value="貓の玩具">
                貓の玩具
              </n-radio-button>
            </n-radio-group>
          </n-form-item-gi>
          <n-form-item-gi label="Enabled" path="is_enabled">
            <n-switch v-model:value="data.is_enabled" />
          </n-form-item-gi>
        </n-gi>
        <n-gi>
          <n-grid :x-gap="12" cols="3">
            <n-form-item-gi label="Origin Price" path="origin_price">
              <n-input-number v-model:value="data.origin_price" placeholder="Origin" />
            </n-form-item-gi>
            <n-form-item-gi label="Price" path="price">
              <n-input-number v-model:value="data.price" placeholder="Price" />
            </n-form-item-gi>
            <n-form-item-gi label="Unit" path="unit">
              <n-input v-model:value="data.unit" placeholder="Unit" />
            </n-form-item-gi>
          </n-grid>
          <n-form-item-gi label="Description" path="description">
            <n-input v-model:value="data.description" placeholder="Description" />
          </n-form-item-gi>
          <n-form-item-gi label="Content" path="content">
            <n-input type="textarea" :autosize="{minRows:6, maxRows:10}" v-model:value="data.content" placeholder="Content" />
          </n-form-item-gi>
        </n-gi>
      </n-grid>
    </n-form>
    <div class="tw-text-right">
      <n-button @click="$emit('closeModal', false)" class="tw-mr-3">Cancel</n-button>
      <n-button @click="$emit('updateProduct', data)" type="primary">
        {{isNew ? 'Add' : 'Update'}}
        <font-awesome-icon v-if="loading" class="fa-spin fa-lg tw-ml-2" :icon="['fas', 'spinner']" />
      </n-button>
    </div>
  </n-card>
</template>

<script lang="js">
import { defineComponent, ref, inject, onMounted } from 'vue'
import { NCard, NButton, NUpload, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NRadioButton, NRadioGroup, NSwitch } from "naive-ui";
export default defineComponent({
  components: { NCard, NButton, NUpload, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NRadioButton, NRadioGroup, NSwitch },
  props: {
    tempProduct:{
      type: Object,
      default() { return {} }
    },
    isNew:{
      type: Boolean,
      default: false
    },
    loading:{
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const axios = inject('axios')
    const data = ref(props.tempProduct)
    console.log(data.value)
    const fileList = ref([])
    onMounted(() => {
      if(data.value.imagesUrl?.length>0) {
        data.value.imagesUrl.forEach(el => {
          fileList.value.push({status: "finished", url: el})
        });
      }
    })
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
          if(data.value.imagesUrl===undefined) data.value.imagesUrl = []
          data.value.imagesUrl.push(res.data.imageUrl)
          onFinish()
          window.$message.success('Image Upload Success !')
        }
      }).catch((err) => {
        console.log(err)
        onError()
      })
    }
    const removeFile = (img) => {
      data.value.imagesUrl = data.value.imagesUrl.filter(el => {
        return el !== img.file.url
      })
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
      //   }
      // ]),
      rules: {
        title: {
          required: true,
          trigger: ["blur", "input"],
          message: "Plz input product name"
        },
        category: {
          required: false,
          trigger: ["blur", "change"],
          message: "Plz choose category"
        },
        origin_price: {
          type: "number",
          required: true,
          trigger: ["blur", "change"],
          message: "Plz input origin price"
        },
        price: {
          type: "number",
          required: true,
          trigger: ["blur", "change"],
          message: "Plz input price"
        },
        unit: {
          required: true,
          trigger: ["blur", "input"],
          message: "Plz input unit"
        },
        description: {
          required: true,
          trigger: ["blur", "input"],
          message: "Plz input description"
        },
        content: {
          required: true,
          trigger: ["blur", "input"],
          message: "Plz input content"
        }
      }
    }
  }
})
</script>