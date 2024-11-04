<template>
  <div class="bodyDiv">
    <!-- Toolbar для фільтрації користувачів за статтю -->
    <div class="toolbar">
      <button @click="filterGender('male')">Male</button>
      <button @click="filterGender('female')">Female</button>
      <button @click="filterGender('all')">Show All</button>
    </div>

    <!-- Якщо список користувачів пустий -->
    <p v-if="filteredUsers.length === 0">Список юзерів пустий</p>

    <!-- Список користувачів -->
    <div v-else class="user-list">
      <UserCard
          v-for="(user, index) in filteredUsers"
          :key="index"
          :user="user"
      />
    </div>
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue';

export default {
  components: {
    UserCard,
  },
  data() {
    return {
      selectedGender: 'all',
      userData: [
        {
          firstName: 'Invoker',
          lastName: '',
          gender: 'male',
          age: 1000,
          position: 'Mage',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1EPoDl0F0JBea3rvsPsg7FaVcGN1MD_IdNw&s',
          hobbies: ['Studying Arcane Arts', 'Collecting Relics'],
        },
        {
          firstName: 'Crystal',
          lastName: 'Maiden',
          gender: 'female',
          age: 25,
          position: 'Support',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF-bivQae-D9u6IvH2f2g-mmEmBar6M2QwX71Rsla_fHnU8HQPu1j4eCNoHehJqWT8hZU&usqp=CAU',
          hobbies: ['Ice Sculpting', 'Singing'],
        },
        {
          firstName: 'Axe',
          lastName: '',
          gender: 'male',
          age: 40,
          position: 'Tank',
          photo: 'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/axe.png',
          hobbies: ['Training', 'Chopping Heads'],
        },
        {
          firstName: 'Lina',
          lastName: 'Inverse',
          gender: 'female',
          age: 30,
          position: 'Mage',
          photo: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/14531749-b175-4e69-ba6e-51978b6b1af8/dfprpws-21a86bdb-c712-4d50-a882-9eba23402d78.jpg/v1/fill/w_1280,h_1280,q_75,strp/dota_2___lina_inverse_by_leezyprod_dfprpws-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTI4MCIsInBhdGgiOiJcL2ZcLzE0NTMxNzQ5LWIxNzUtNGU2OS1iYTZlLTUxOTc4YjZiMWFmOFwvZGZwcnB3cy0yMWE4NmJkYi1jNzEyLTRkNTAtYTg4Mi05ZWJhMjM0MDJkNzguanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.NlT0rSQ1ZT6b2p7ldk4LCafSrFsn3RPWlnEur-O5Vgc',
          hobbies: ['Fire Dancing', 'Cooking Spicy Food'],
        },
        {
          firstName: 'Juggernaut',
          lastName: '',
          gender: 'male',
          age: 35,
          position: 'Carry',
          photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlYUkDUnUAAgpt7xoTVifK-5bYUE2uI_HXKQ&s',
          hobbies: ['Sword Fighting', 'Meditation'],
        },
        {
          firstName: 'Phantom',
          lastName: 'Assassin',
          gender: 'female',
          age: 28,
          position: 'Carry',
          photo: 'https://static.displate.com/857x1200/displate/2023-01-26/ac368ea143edc6e63059e7308cd580a5_f37d67cd19e81165350a282aead9832e.jpg',
          hobbies: ['Assassinations', 'Practicing Stealth'],
        },
        {
          firstName: 'Drow',
          lastName: 'Ranger',
          gender: 'female',
          age: 150,
          position: 'Carry',
          photo: 'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/drow_ranger.png',
          hobbies: ['Archery', 'Hunting'],
        },
        {
          firstName: 'Pudge',
          lastName: '',
          gender: 'male',
          age: 10,
          position: 'Tank',
          photo: 'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/pudge.png',
          hobbies: ['Cooking Flesh', 'Fishing with Hook'],
        },
        {
          firstName: 'Sniper',
          lastName: '',
          gender: 'male',
          age: 60,
          position: 'Carry',
          photo: 'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/sniper.png',
          hobbies: ['Sharpshooting', 'Target Practice'],
        },
        {
          firstName: 'Windranger',
          lastName: '',
          gender: 'female',
          age: 30,
          position: 'Support',
          photo: 'https://cdn.akamai.steamstatic.com/apps/dota2/videos/dota_react/heroes/renders/windrunner.png',
          hobbies: ['Tracking', 'Archery'],
        },
      ],
    };
  },
  computed: {
    filteredUsers() {
      if (this.selectedGender === 'all') {
        return this.userData;
      }
      return this.userData.filter(user => user.gender === this.selectedGender);
    },
  },
  methods: {
    filterGender(gender) {
      this.selectedGender = gender;
    },
  },
};
</script>

<style scoped>
.toolbar {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  cursor: pointer;
  background-color: #e81b48;
  color: white;
  border: none;
  border-radius: 5px;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #63c323;
}

.user-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.bodyDiv{
  background-image: url("assets/background.jfif)");
}
</style>
