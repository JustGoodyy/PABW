<script setup>
import { ref, computed } from 'vue'

const nama = ref('')
const email = ref('')
const nim = ref('')
const pesan = ref('')

const isNamaError = computed(() => nama.value.trim() === '')
const isEmailError = computed(() => email.value.trim() === '')
const isNimError = computed(() => nim.value.trim() === '' || !/^[0-9]{8}$/.test(nim.value))
const isPesanError = computed(() => pesan.value.trim() === '')

const formSah = computed(() => {
  return !isNamaError.value && !isEmailError.value && !isNimError.value && !isPesanError.value
})

function kirimForm() {
  if (!formSah.value) return
  alert('Pesan berhasil dikirim!')
  nama.value = ''
  email.value = ''
  nim.value = ''
  pesan.value = ''
}
</script>

<template>
  <section id="kontak">
    <h2>Hubungi saya</h2>
    <p>Isi formulir berikut. Semua kolom bertanda wajib harus diisi.</p>

    <form @submit.prevent="kirimForm">
      <fieldset>
        <legend>Data pengirim</legend>
        
        <p>
          <label for="nama">Nama lengkap</label>
          <input id="nama" v-model="nama" name="nama" type="text" autocomplete="name" required>
          <span v-if="nama.trim() === '' && nama !== ''" class="teks-galat" style="color: var(--color-danger); font-size: var(--text-sm);">Kolom ini tidak boleh kosong.</span>
        </p>

        <p>
          <label for="email">Email</label>
          <input id="email" v-model="email" name="email" type="email" autocomplete="email" required>
        </p>
        
        <p>
          <label for="nim">NIM</label>
          <input id="nim" v-model="nim" name="nim" type="text" inputmode="numeric" pattern="[0-9]{8}" aria-describedby="nim-bantuan" required>
          <span id="nim-bantuan">Delapan digit angka, contoh 25523008.</span>
        </p>

        <p>
          <label for="pesan">Pesan</label>
          <textarea id="pesan" v-model="pesan" name="pesan" rows="4" required></textarea>
        </p>
        
        <button type="submit" :disabled="!formSah">Kirim</button>
      </fieldset>
    </form>
  </section>
</template>