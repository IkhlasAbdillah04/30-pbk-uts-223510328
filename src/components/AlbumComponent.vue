<template>
  <div>
    <div class="AlbumDetails-container">
      <h2 class="title">Choose Album:</h2>
      <select v-model="selectedAlbum" @change="fetchPhotos" class="select-album">
        <option disabled value="">Please select an album</option>
        <option v-for="album in albums" :key="album.id" :value="album.id">{{ album.title }}</option>
      </select>
      <h2 class="title">Photos in Album {{ selectedAlbum }}</h2>
      <table v-if="photos.length">
        <thead>
          <tr>
            <th>Photo</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="photo in photos" :key="photo.id">
            <td>
              <img :src="photo.thumbnailUrl" @click="showPhoto(photo.url)" class="thumbnail">
            </td>
            <td>{{ photo.title }}</td>
          </tr>
        </tbody>
      </table>
      <div v-else class="no-photos">
        <p>No photos available.</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRouter } from 'vue-router'
import { useAlbumsStore } from '../stores/AlbumStore'

const router = useRouter()
const selectedAlbum = ref(null)
const albums = ref([])
const photos = ref([])

const albumsStore = useAlbumsStore()

const fetchAlbums = async () => {
  try {
    await albumsStore.fetchAlbums()
    albums.value = albumsStore.albums
  } catch (error) {
    console.error('Error fetching albums:', error)
  }
}

const fetchPhotos = async () => {
  if (selectedAlbum.value) {
    try {
      await albumsStore.fetchPhotos(selectedAlbum.value)
      photos.value = albumsStore.photos
    } catch (error) {
      console.error('Error fetching photos:', error)
    }
  }
}

const showPhoto = (url) => {
  window.open(url, '_blank')
}

onMounted(() => {
  fetchAlbums()
})

watch(selectedAlbum, (newAlbum) => {
  if (newAlbum) {
    fetchPhotos()
    router.push(`/albums/${newAlbum}`)
  }
})
</script>

<style scoped>
.AlbumDetails-container {
  font-family: 'Arial', sans-serif;
  max-width: 800px;
  margin: 40px auto; 
  padding: 30px; 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); 
  border-radius: 15px; 
  background-color: #ffffff; 
  transition: transform 0.3s, box-shadow 0.3s; 
}

.AlbumDetails-container:hover {
  transform: translateY(-5px); 
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); 
}

.title {
  color: #333333; 
  text-align: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 20px;
}

.select-album {
  width: 100%;
  padding: 12px; 
  margin-bottom: 25px; 
  border: 2px solid #007bff; 
  border-radius: 15px; 
  background-color: #f9f9f9; 
  font-size: 1rem; 
  color: #333;
  transition: border-color 0.3s;
}

.select-album:focus {
  border-color: #0056b3; 
  outline: none;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 25px;
}

th,
td {
  padding: 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

thead {
  background-color: #007bff;
  color: white;
}

.thumbnail {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border: 2px solid #007bff;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s, border-color 0.3s;
}

.thumbnail:hover {
  transform: scale(1.05);
  border-color: #0056b3;
}

.no-photos {
  text-align: center;
  margin-top: 30px;
}

.no-photos p {
  font-size: 1.2rem;
  color: #555;
}

</style>
