<template>
  <section class="category-section">
    <slot name="hello" />
    <div>
      <slot name="content" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.category-section {
  max-width: 680px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
}
</style>
