<template>
  <ClientOnly>
    <teleport to="#modal">
      <div v-if="props.isOpen" class="modal">
        <p>모달이다 모달</p>
        <button @click="emits('closeModal', false)">닫혀라 모달</button>
      </div>
    </teleport>
  </ClientOnly>
</template>

<script lang="ts" setup>
const props = withDefaults(defineProps<{ isOpen: boolean }>(), { isOpen: false })
const emits = defineEmits<{ closeModal: [value: boolean] }>()
</script>

<style lang="scss" scoped>
.modal {
  position: fixed;
  z-index: 999;
  top: 20%;
  left: 50%;
  width: 300px;
  margin-left: -150px;
}
</style>
