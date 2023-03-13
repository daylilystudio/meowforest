<template>
  <NCard
    style="max-width:95%; width: 800px"
    :title="(isNew?'Add':'Edit')+' Product'"
    :bordered="false"
    size="huge"
    role="dialog"
    aria-modal="true"
  >
    <NForm
    ref="formRef"
    :model="data"
    :rules="rules"
    size="medium"
    label-placement="top">
      <NGrid :x-gap="24" cols="1 s:2" responsive="screen">
        <NGi>
          <NUpload
            :action="fileAction"
            :max=5
            list-type="image-card"
            :default-file-list="fileList"
            :custom-request="updateFile"
            @before-upload="beforeUpload"
            @remove="removeFile"
            class="tw-mb-4"
          />
          <NFormItemGi label="Product Name" path="title">
            <n-input v-model:value="data.title" placeholder="Product Name" />
          </NFormItemGi>
          <NFormItemGi label="Product Category" path="category">
            <NRadioGroup v-model:value="data.category" name="category">
              <NRadioButton value="貓の食品">
                貓の食品
              </NRadioButton >
              <NRadioButton value="貓の用品">
                貓の用品
              </NRadioButton>
              <NRadioButton value="貓の玩具">
                貓の玩具
              </NRadioButton>
            </NRadioGroup>
          </NFormItemGi>
          <NFormItemGi label="Enabled" path="is_enabled">
            <NSwitch v-model:value="data.is_enabled" />
          </NFormItemGi>
        </NGi>
        <NGi>
          <NGrid :x-gap="12" cols="3">
            <NFormItemGi label="Origin Price" path="origin_price">
              <NInputNumber v-model:value="data.origin_price" placeholder="Origin" />
            </NFormItemGi>
            <NFormItemGi label="Price" path="price">
              <NInputNumber v-model:value="data.price" placeholder="Price" />
            </NFormItemGi>
            <NFormItemGi label="Unit" path="unit">
              <NInput v-model:value="data.unit" placeholder="Unit" />
            </NFormItemGi>
          </NGrid>
          <NFormItemGi label="Description" path="description">
            <NInput v-model:value="data.description" placeholder="Description" />
          </NFormItemGi>
          <NFormItemGi label="Content" path="content">
            <NInput type="textarea" :autosize="{minRows:6, maxRows:10}" v-model:value="data.content" placeholder="Content" />
          </NFormItemGi>
        </NGi>
      </NGrid>
    </NForm>
    <div class="tw-text-right">
      <NButton @click="$emit('closeModal', false)" class="tw-mr-3">Cancel</NButton>
      <NButton @click="$emit('updateProduct', data)" type="primary">
        {{ isNew ? 'Add' : 'Update' }}
        <font-awesome-icon v-if="loading" class="fa-spin fa-lg tw-ml-2" :icon="['fas', 'spinner']" />
      </NButton>
    </div>
  </NCard>
</template>

<script>
import { ref, inject, onMounted } from 'vue'
import { NCard, NButton, NUpload, NForm, NGrid, NGi, NFormItemGi, NInput, NInputNumber, NRadioButton, NRadioGroup, NSwitch } from "naive-ui";
export default {
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
          if(data.value.imagesUrl===undefined) data.value.imagesUrl = []
          data.value.imagesUrl.push(res.data.imageUrl)
          onFinish()
          window.$message.success('Image Upload Success !')
        } else {
          window.$message.error(res.data.message)
        }
      }).catch((err) => {
        window.$message.error(err.toString())
        onError()
      })
    }
    const removeFile = (img) => {
      data.value.imagesUrl = data.value.imagesUrl?.filter(el => {
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
}
</script>