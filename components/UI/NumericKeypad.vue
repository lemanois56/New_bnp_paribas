<template>
  <div class="numeric-keypad">
    <div class="keypad-row">
      <button v-for="n in [1, 2, 3]" :key="n" @click="addNumber(n)">{{ n }}</button>
    </div>
    <div class="keypad-row">
      <button v-for="n in [4, 5, 6]" :key="n" @click="addNumber(n)">{{ n }}</button>
    </div>
    <div class="keypad-row">
      <button v-for="n in [7, 8, 9]" :key="n" @click="addNumber(n)">{{ n }}</button>
    </div>
    <div class="keypad-row">
      <button @click="removeLast">⌫</button>
      <button @click="addNumber(0)">0</button>
      <button @click="clear">C</button>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  emits: ['input'],
  methods: {
    addNumber(num: number) {
      this.$emit('input', num.toString());
    },
    removeLast() {
      this.$emit('input', 'backspace');
    },
    clear() {
      this.$emit('input', 'clear');
    },
  },
};
</script>

<style scoped>
.numeric-keypad {
  display: flex;
  flex-direction: column;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  width: 200px;
  margin: 10px auto;
}

.keypad-row {
  display: flex;
  justify-content: space-between;
}

button {
  width: 60px;
  height: 60px;
  font-size: 24px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
}

button:active {
  background-color: #eee;
}
</style>
