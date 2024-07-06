<template>
  <div
    v-drag
    @dragend="handleDragEnd"
    :style="{
      width: `${cardWidth}px`,
      height: `${cardHeight}px`,
      borderRadius: `${cardWidth / 15}px`,
      borderWidth: `1px`,
    }"
    class="absolute shadow-lg cursor-pointer bg-white flex flex-col justify-between active:cursor-grabbing"
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
    <p
      :style="{
        height: `${(2 * cardHeight) / 7}px`,
        color: props.color,
        fontSize: `${cardWidth / 5}px`,
      }"
      class="flex justify-center items-center"
    >
      <FontAwesomeIcon
        :icon="[props.icon.prefix, props.icon.iconName]"
        :style="{ fontSize: `${cardHeight / 5}px` }"
      />
    </p>
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
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";

const props = defineProps<{
  character: string;
  icon: any;
  color: string;
  size: number;
}>();

const emits = defineEmits(["remove"]);

const cardHeight = 105 * props.size;
const cardWidth = 75 * props.size;

library.add(props.icon);

const handleDragEnd = () => {
  emits("remove", { character: props.character, suit: props.icon.iconName });
};
</script>

<style scoped></style>
