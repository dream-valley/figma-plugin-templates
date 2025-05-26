<template>
  <div class="font-sans p-6 w-full max-w-sm mx-auto">
    <h2 class="mb-4 text-lg font-semibold text-gray-800">FigPlug: Rectangle Creator</h2>
    <div class="mb-4">
      <label for="count" class="block mb-1 text-xs font-medium text-gray-600">Count:</label>
      <input
        id="count"
        type="number"
        v-model.number="count"
        :min="VALIDATION.MIN_COUNT"
        :max="VALIDATION.MAX_COUNT"
        class="w-full p-2 border border-gray-300 rounded text-sm box-border focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      />
    </div>
    <div class="mb-4">
      <label for="color" class="block mb-1 text-xs font-medium text-gray-600">Color:</label>
      <input
        id="color"
        type="color"
        v-model="color"
        class="w-full h-10 p-2 border border-gray-300 rounded text-sm box-border cursor-pointer focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200"
      />
    </div>
    <div class="flex gap-2">
      <button
        @click="handleCreate"
        class="flex-1 px-4 py-2 bg-blue-600 text-white border-none rounded text-sm font-medium cursor-pointer transition-colors hover:bg-blue-700"
      >
        Create {{ count }} Rectangle{{ count !== 1 ? 's' : '' }}
      </button>
      <button
        @click="handleCancel"
        class="flex-1 px-4 py-2 bg-gray-100 text-gray-800 border-none rounded text-sm font-medium cursor-pointer transition-colors hover:bg-gray-200"
      >
        Cancel
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { MESSAGE_TYPES, DEFAULT_VALUES, VALIDATION, CreateShapesMessage, CancelMessage } from '../common'

const count = ref<number>(DEFAULT_VALUES.RECTANGLE_COUNT)
const color = ref<string>(DEFAULT_VALUES.RECTANGLE_COLOR)

const handleCreate = () => {
  const message: CreateShapesMessage = {
    type: MESSAGE_TYPES.CREATE_SHAPES,
    count: count.value,
    color: color.value
  }
  parent.postMessage({ pluginMessage: message }, '*')
}

const handleCancel = () => {
  const message: CancelMessage = {
    type: MESSAGE_TYPES.CANCEL
  }
  parent.postMessage({ pluginMessage: message }, '*')
}
</script>

<style scoped>
/* Additional component-specific styles can go here if needed */
</style>
