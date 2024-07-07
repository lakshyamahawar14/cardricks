<template>
  <div
    v-drag
    @dragend="handleDragEnd"
    :key="props.key"
    :style="{
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      borderRadius: `${cardWidth / 15}px`,
      borderWidth: `1px`,
    }"
    class="absolute border-[1px] border-slate-900 cursor-pointer bg-white flex flex-col justify-between active:cursor-grabbing"
  >
    <p
      :style="{
        height: `${cardHeight / 7}px`,
        color: props.color,
        fontSize: `${cardWidth / 5}px`,
        paddingLeft: `${cardWidth / 30}px`,
        paddingTop: `${cardWidth / 30}px`,
      }"
      class="flex justify-start items-center"
    >
      {{ props.character }}
    </p>
    <div
      :style="{
        height: `${(2 * cardHeight) / 7}px`,
        fontSize: `${cardWidth / 5}px`,
      }"
      class="flex justify-center items-center"
    >
      <img
        :src="'/src/assets/' + props.image + '.jpg'"
        :alt="props.character"
        :style="{ width: `${cardHeight / 5}px`, height: `${cardHeight / 5}px` }"
        draggable="false"
      />
    </div>
    <p
      :style="{
        height: `${cardHeight / 7}px`,
        color: props.color,
        fontSize: `${cardWidth / 5}px`,
        paddingRight: `${cardWidth / 30}px`,
        paddingBottom: `${cardWidth / 30}px`,
      }"
      class="flex justify-end items-center"
    >
      {{ props.character }}
    </p>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  key: number;
  character: string;
  image: string;
  color: string;
  size: number;
}>();

const emits = defineEmits(["remove"]);

const cardHeight = 105 * props.size;
const cardWidth = 75 * props.size;

const handleDragEnd = () => {
  emits("remove", { character: props.character, image: props.image });
};
</script>

<style scoped></style>
