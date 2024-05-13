<script setup lang="ts">
const { type } = defineProps({
    title: {
      type: String,
      default: 'test'
    },
    type: {
      type: String,
      default: 'tertiary'
    }
  })


  
  const buttonClass = `${type}-btn`;
</script>

<template>
  <button class="btn" :class="buttonClass" >
   {{ title }}
  </button>
</template>

<style scoped>

.btn {
  appearance: button;
  backface-visibility: hidden;
  background-color: var(--btn-background-color, #405cf5);
  border-radius: 6px var(--btn-radius, 6px);
  border: var(--btn-border, none) ;
  box-shadow: var(--btn-shadow, rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0) ;
  color:  var(--btn-font-color, #fff) ;
  cursor: pointer;
  font-family: var(--btn-font-family, -apple-system,system-ui,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif);
  font-size: var(--btn-font-size, 1rem) ;
  height: var(--btn-height, 50px);
  line-height: var(--btn-line-height, 1.2);
  margin: var(--btn-margin, 0.8rem 0 0) ;
  padding: var(--btn-padding, 0 1.2rem);
  text-align: var(--btn-text-align, center);
  text-transform: var(--btn-text-transform, none);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  width: 100%;
}

.secondary-btn {
  --btn-background-color: red;
}

.tertiary-btn {
  --btn-background-color: transparrent;
  --btn-font-color: black;
  --btn-border: 1px solid #3f3f3f;
}

.btn:focus, .btn:hover {
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset, rgba(50, 50, 93, .2) 0 6px 15px 0, rgba(0, 0, 0, .1) 0 2px 2px 0, rgba(50, 151, 211, .3) 0 0 0 4px;
}

</style>
