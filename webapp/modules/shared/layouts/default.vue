<template>
  <div class="flex flex-col min-h-screen">
    <VLayoutHeader />
    <div class="flex-1 container mx-auto z-0 px-4 py-6 lg:px-0">
      <slot />
    </div>
    <VLayoutFooter />
  </div>
</template>
