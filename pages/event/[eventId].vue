<template>
  <EventDetail :event-id="params.eventId" />
</template>

<script lang="ts" setup>
import EventDetail from '~/components/EventDetail.vue'

const { params } = useRoute()
</script>
