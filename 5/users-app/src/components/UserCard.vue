<template>
  <div :class="['user-card', ageClass(user.age)]">
    <img :src="user.photo" alt="User photo" class="user-photo" />
    <h2>{{ user.firstName }} {{ user.lastName }}</h2>
    <p>Gender: {{ user.gender }}</p>
    <p v-if="user.age > 18">Age: {{ user.age }}</p>
    <p>Position: {{ user.position }}</p>
    <p>Hobbies:</p>
    <ul>
      <li v-for="(hobby, index) in user.hobbies" :key="index">{{ hobby }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    ageClass(age) {
      if (age < 18) {
        return 'young'; // Колір для користувачів молодше 18
      } else if (age >= 18 && age <= 35) {
        return 'adult'; // Колір для користувачів від 18 до 35
      } else {
        return 'senior'; // Колір для користувачів старше 35
      }
    }
  }
};
</script>

<style scoped>
.user-card {
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  width: 200px;
  text-align: center;
  transition: background-color 0.3s;
}

.user-photo {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-bottom: 10px;
}

/* для різних вікових груп */
.young {
  background-color: #f8d7da; /*  для молодших */
}

.adult {
  background-color: #d4edda; /* для дорослих */
}

.senior {
  background-color: #d1ecf1; /* для старших */
}
</style>
