<template>
  <div>
    <select v-model="selectedUser" @change="fetchPosts">
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <template v-if="post.editing">
          <div class="post-content">
            <input v-model="post.title" @keyup.enter="savePost(post)" />
          </div>
          <div class="button-group">
            <button @click="savePost(post)">Save</button>
            <button @click="cancelEdit(post)">Cancel</button>
          </div>
        </template>
        <template v-else>
          <div class="post-content">{{ post.title }}</div>
          <div class="button-group">
            <button @click="editPost(post)">Edit</button>
            <button @click="deletePost(post.id)">Delete</button>
          </div>
        </template>
      </li>
    </ul>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  name: 'PostComponent',
  data() {
    return {
      users: [],
      posts: [],
      selectedUser: null
    }
  },
  created() {
    this.fetchUsers()
  },
  methods: {
    fetchUsers() {
      axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((response) => {
          this.users = response.data
        })
        .catch((error) => {
          console.error('There was an error fetching the users:', error)
        })
    },
    fetchPosts() {
      if (this.selectedUser) {
        axios
          .get(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`)
          .then((response) => {
            this.posts = response.data.map(post => ({
              ...post,
              editing: false
            }))
          })
          .catch((error) => {
            console.error('There was an error fetching the posts:', error)
          })
      }
    },
    editPost(post) {
      this.posts = this.posts.map(p => {
        if (p.id === post.id) {
          return { ...p, editing: true }
        }
        return p
      })
    },
    savePost(post) {
      post.editing = false
    },
    cancelEdit(post) {
      post.editing = false
      this.fetchPosts()
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id)
    }
  }
}
</script>

<style scoped>
div {
  max-width: 600px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  background-color: #2c3e50;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background-color: white;
  font-size: 16px;
  color: #333;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #eee;
  flex-wrap: wrap;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #f0f0f0;
}

.post-content {
  flex: 1; 
  margin-right: 10px; 
  word-wrap: break-word; 
}

.button-group {
  white-space: nowrap;
}
</style>
