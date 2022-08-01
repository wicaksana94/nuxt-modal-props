<template>
  <div class="relative flex justify-center items-center" v-if="isOpen">
    <button
      class="focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 focus:outline-none absolute z-0 top-48 py-2 px-7 bg-gray-800 text-white rounded text-base hover:bg-black"
    >
      Open
    </button>

    <div
      id="menu"
      class="w-full h-full bg-gray-900 bg-opacity-80 top-0 fixed sticky-0"
    >
      <div
        class="2xl:container 2xl:mx-auto py-10 px-4 md:px-28 flex justify-center items-center"
      >
        <div
          class="w-96 md:w-auto dark:bg-gray-800 relative flex flex-col justify-center items-center bg-white py-16 px-4 md:px-24 xl:py-10 xl:px-12"
        >
          <div role="banner">
            <img :src="image" alt="modal-image" width="128" height="128" />
          </div>
          <div class="mt-12">
            <h1
              role="main"
              class="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-center text-gray-800"
            >
              We use cookies
            </h1>
          </div>
          <div class="mt">
            <p
              class="mt-6 sm:w-80 text-base dark:text-white leading-7 text-center text-gray-800"
            >
              Please, accept these sweeties to continue enjoying our site!
            </p>
          </div>
          <button
            v-for="button in buttons"
            :class="button.btnClass"
            @click="button.btnAction"
          >
            {{ button.btnText }}
          </button>
          <button
            @click="closeModal()"
            class="text-gray-800 dark:text-gray-400 absolute top-8 right-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
            aria-label="close"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18 6L6 18"
                stroke="currentColor"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6 6L18 18"
                stroke="currentColor"
                stroke-width="1.66667"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      default: () => {},
    },
    image: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '_TITLE_',
    },
    body: {
      type: String,
      default: '_BODY_',
    },
    buttons: {
      type: Array,
      default: [],
    },
  },
}
</script>
