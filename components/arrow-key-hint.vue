<script setup>
import { PhArrowLeft, PhArrowRight } from '@phosphor-icons/vue'
</script>

<template>
  <div class="arrow-hint">
    Use
    <div class="keycap-key">
      <PhArrowLeft :size="14" :weight="'bold'"></PhArrowLeft>
    </div>
    <div class="keycap-key">
      <PhArrowRight :size="14" :weight="'bold'"></PhArrowRight>
    </div>
    keys
  </div>
</template>

<style scoped>
.arrow-hint {
  display: flex;
  align-items: start;
  justify-content: start;
  gap: 8px;
  font-size: 11px;
  color: var(--color-neutral-700);
  margin-left: 12px;
  margin-top: 40px;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  transition: all 400ms ease;
}

.keycap-key {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: var(--color-neutral-100);
  border: 1px solid var(--color-neutral-300);
  border-bottom: 2px solid var(--color-neutral-400);
  border-radius: 3px;
  color: var(--color-neutral-700);
  transition: all 350ms ease;
}

body[dark-mode] .arrow-hint {
  color: var(--color-neutral-400);
}

body[dark-mode] .keycap-key {
  background: var(--color-neutral-900);
  border-color: var(--color-neutral-700);
  border-bottom-color: var(--color-neutral-700);
  color: var(--color-neutral-300);
}

/* Hide on mobile */
@media (max-width: 1023px) {
  .arrow-hint {
    display: none !important;
  }
}
</style>
