<template>
  <div>
    <input type="file" @change="handleFileChange" />
    <el-button @click="handleUpload" :disabled="isDisabled">上传</el-button>
  </div>
</template>

<script>
const SIZE = 10 * 1024 * 1024 // 切片的大小
const URL = 'http://localhost:3000' // 服务端地址
export default {
  name: 'big-file-upload',
  data: function() {
    return {
      container: {
        file: null
      },
      data: []
    }
  },
  computed: {
    isDisabled() {
      return !this.container.file
    }
  },
  methods: {
    request({ url, method = 'post', data, headers, requestList }) {
      return new Promise(resovle => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, url)
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(key, headers[key])
        })
        xhr.send(data)
        xhr.onload = e => {
          resovle({
            data: e.target.response
          })
        }
      })
    },

    handleFileChange(e) {
      const [file] = e.target.files
      if (!file) return
      Object.assign(this.$data, this.$options.data())
      this.container.file = file
    },

    // 生成文件切片
    createFileChunk(file, size = SIZE) {
      const fileChunkList = []
      let cur = 0
      while (cur < file.size) {
        fileChunkList.push({ file: file.slice(cur, cur + size) })
        cur += size
      }
      return fileChunkList
    },

    // 上传切片文段
    async uploadFileChunks() {
      const requestList = this.data
        .map(({ chunk, hash }) => {
          const formData = new FormData()
          formData.append('chunk', chunk)
          formData.append('hash', hash)
          formData.append('filename', this.container.file.name)
          return { formData }
        })
        .map(async ({ formData }) => {
          this.request({
            url: URL,
            data: formData
          })
        })
      await Promise.all(requestList)
    },

    async handleUpload() {
      if (!this.container.file) return
      const fileChunkList = this.createFileChunk(this.container.file)
      this.data = fileChunkList.map(({ file }, index) => ({
        chunk: file,
        hash: this.container.file.name + '-' + index
      }))
      await this.uploadFileChunks()
    }
  }
}
</script>

<style></style>
