<template>
  <div class="text-center">
    <h1>Test modal</h1>
    <button
      @click="openConfirmationModal1"
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
    >
      Modal 1
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="openConfirmationModal2"
    >
      Modal 2
    </button>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      @click="openConfirmationModal3"
    >
      Modal 3 from state
    </button>

    <LazyConfirmationModal1
      :isOpen="confirmationModal1.isOpen"
      :title="confirmationModal1.title"
      :body="confirmationModal1.body"
      :closeModal="closeConfirmationModal1"
      :buttons="[
        {
          btnText: 'Ya, lanjutkan',
          btnAction: confirmationModal1ActionBtn,
          btnStyle: 'background-color: green',
        },
        {
          btnText: 'Batalkan',
          btnAction: confirmationModal1CancelBtn,
          btnStyle: 'background-color: red',
        },
      ]"
    />

    <LazyConfirmationModal2
      :isOpen="confirmationModal2.isOpen"
      :image="confirmationModal2.image"
      :title="confirmationModal2.title"
      :body="confirmationModal2.body"
      :closeModal="closeConfirmationModal2"
      :buttons="[
        {
          btnText: 'Mmm... Sweet!',
          btnAction: confirmationModal2ActionBtn,
          btnStyle: 'background-color: green',
          btnClass:
            'w-full dark:text-gray-800 dark:hover:bg-gray-100 dark:bg-white sm:w-auto mt-14 text-base leading-4 text-center text-white py-6 px-16 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 bg-gray-800 hover:bg-black',
        },
        {
          btnText: 'No, I am on diet',
          btnAction: confirmationModal2CancelBtn,
          btnStyle: 'background-color: red',
          btnClass:
            'mt-6 dark:text-white dark:hover:border-white text-base leading-none focus:outline-none hover:border-gray-800 focus:border-gray-800 border-b border-transparent text-center text-gray-800',
        },
      ]"
    />

    {{ confirmationModal3State }}
    <LazyConfirmationModal1
      :isOpen="confirmationModal3State.isOpen"
      :title="confirmationModal3State.title"
      :body="confirmationModal3State.body"
      :closeModal="closeConfirmationModal3State"
      :buttons="confirmationModal3State.buttons"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      confirmationModal1: {
        isOpen: false,
        title: 'Konfirmasi Modal 1',
        body: 'Apakah kamu yakin untuk melanjutkan proses ini?',
      },
      confirmationModal2: {
        isOpen: false,
        image: '/cookie.svg',
        title: 'Konfirmasi Modal 2',
        body: 'Apakah kamu yakin untuk melanjutkan proses ini?',
      },
    }
  },
  computed: {
    confirmationModal3State() {
      return this.$store.state.teams
    },
    todos() {
      return this.$store.state.todos.list
    },
  },
  methods: {
    openConfirmationModal1() {
      console.log('modal1open')
      this.confirmationModal1.isOpen = true
    },

    closeConfirmationModal1() {
      this.confirmationModal1.isOpen = false
    },

    confirmationModal1ActionBtn() {
      setTimeout(() => {
        alert('Berhasil dilanjutkan')
      }, 1500)
    },

    confirmationModal1CancelBtn() {
      this.closeConfirmationModal1()
      alert('cancel')
    },

    openConfirmationModal2() {
      console.log('modal2open')
      this.confirmationModal2.isOpen = true
    },

    closeConfirmationModal2() {
      this.confirmationModal2.isOpen = false
    },

    confirmationModal2ActionBtn() {
      setTimeout(() => {
        alert('Berhasil dilanjutkan')
      }, 1500)
    },

    confirmationModal2CancelBtn() {
      this.closeConfirmationModal2()
      alert('cancel')
    },

    openConfirmationModal3() {
      const payload = {
        isOpen: true,
        title: 'Ini contoh modal konfirmasi dengan trigger state',
        body: 'Apakah kamu yakin ingin melanjutkan contoh modal konfirmasi dengan trigger state ini?',
        buttons: [
          {
            btnText: 'Ya, lanjutkan',
            btnAction: this.confirmationModal3ActionBtn,
            btnStyle: 'background-color: green',
          },
          {
            btnText: 'Batalkan',
            btnAction: this.confirmationModal3CancelBtn,
            btnStyle: 'background-color: red',
          },
        ],
      }
      this.$store.commit('teams/toggleOpen', payload)
    },

    closeConfirmationModal3State() {
      const payload = {
        isOpen: false,
        title: '',
        body: '',
        buttons: [],
      }
      this.$store.commit('teams/toggleOpen', payload)
    },

    confirmationModal3ActionBtn() {
      setTimeout(() => {
        alert('Berhasil dilanjutkan')
      }, 1500)
    },

    confirmationModal3CancelBtn() {
      this.closeConfirmationModal3State()
    },
  },
}
</script>
