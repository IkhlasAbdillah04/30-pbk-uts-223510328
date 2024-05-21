<template>
  <div>
    <select v-model="selectedUser" @change="fetchPosts">
      <option disabled value="">Please select a user</option>
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <table v-if="selectedUser">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ selectedUserInfo.name }}</td>
          <td>{{ selectedUserInfo.email }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'PostComponent',
  data() {
    return {
      users: [],
      posts: [],
      selectedUser: null,
      selectedUserInfo: {}
    }
  },
  created() {
    this.fetchUsers()
  },
  watch: {
    selectedUser(newVal) {
      this.selectedUserInfo = this.users.find((user) => user.id === newVal) || {}
    }
  },
  methods: {
    fetchUsers() {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          this.users = data
        })
        .catch((error) => {
          console.error('There was an error fetching the users:', error)
        })
    },
    fetchPosts() {
      if (this.selectedUser) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`)
          .then((response) => response.json())
          .then((data) => {
            this.posts = data
          })
          .catch((error) => {
            console.error('There was an error fetching the posts:', error)
          })
      }
    }
  }
}
</script>

<style scoped>
div {
  max-width: 800px;
  margin: auto;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  background-color: #f8f8f8;
  margin-top: 30px;
}

select {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: white;
  font-size: 16px;
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th,
td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ccc;
}

thead {
  background-color: #2c3e50;
  color: white;
}

tbody tr:hover {
  background-color: #f0f0f0;
}
</style>
