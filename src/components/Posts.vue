<template>
  <div>
    <select v-model="selectedUser" @change="fetchPosts">
      <option v-for="user in users" :key="user.id" :value="user.id">
        {{ user.name }}
      </option>
    </select>
    <ul>
      <li v-for="post in posts" :key="post.id">
        {{ post.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      users: [],
      posts: [],
      selectedUser: null
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    fetchUsers() {
      axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {
          this.users = response.data;
        });
    },
    fetchPosts() {
      if (!this.selectedUser) return;
      axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${this.selectedUser}`)
        .then(response => {
          this.posts = response.data;
        });
    }
  }
};
</script>

