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
  margin: 40px auto; 
  padding: 25px; 
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1); 
  border-radius: 15px; 
  background-color: #ffffff; 
  transition: transform 0.3s, box-shadow 0.3s; 
}

div:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); 
}

select {
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

select:focus {
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

tbody tr:hover {
  background-color: #f0f0f0; 
}

tbody tr:nth-child(even) {
  background-color: #f9f9f9; 
}

</style>
