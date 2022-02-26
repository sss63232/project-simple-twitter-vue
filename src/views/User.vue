<template>
  <div class="container">
    <div class="navbar">
      <Navbar :initial-current-status="currentStatus" />
    </div>
    <div class="main">
      <header class="header">
        <button>
          <router-link to="/main"
            ><img
              src="./../assets/arrow.png"
              alt="backarrow"
              class="previous-btn"
            />
          </router-link>
        </button>
        <div class="title">
          <p class="user-name">{{ user.name }}</p>
          <p class="user-tweet">{{ tweets.length }} 推文</p>
        </div>
      </header>
      <div class="user-page-body">
        <router-view
          :initial-user="user"
          :initial-post="tweets"
          :initial-likes="likes"
          :initial-followers="Followers"
          :initial-followings="Followings"
        />
      </div>
    </div>
    <div class="popular-users">
      <PopularUsers />
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import PopularUsers from "../components/PopularUsers.vue";

const dummyData = {
  id: 2,
  name: "user1",
  email: "user1@example.com",
  avatar: "https://loremflickr.com/140/140/people?random=100",
  introduction: "id quaerat ea",
  role: "",
  account: "user1",
  cover: "https://loremflickr.com/600/200/nature?random=100",
  createdAt: "2022-02-24T15:15:41.000Z",
  updatedAt: "2022-02-24T15:15:41.000Z",
  Followers: [
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      avatar: "https://loremflickr.com/140/140/people?random=100",
      introduction:
        "Illum voluptas ea sed sunt nulla nihil. Velit fugiat libero ullam repellendus.",
      role: "admin",
      account: "root",
      cover: "https://loremflickr.com/600/200/nature?random=100",
      createdAt: "2022-02-24T15:15:41.000Z",
      updatedAt: "2022-02-24T15:15:41.000Z",
      Followship: {
        followerId: 1,
        followingId: 2,
        createdAt: "2022-02-24T15:15:42.000Z",
        updatedAt: "2022-02-24T15:15:42.000Z",
      },
    },
  ],
  Followings: [
    {
      id: 5,
      name: "user4",
      email: "user4@example.com",
      avatar: "https://loremflickr.com/140/140/people?random=100",
      introduction: "Omnis voluptatem sit temporibus consequatur.",
      role: "",
      account: "user4",
      cover: "https://loremflickr.com/600/200/nature?random=100",
      createdAt: "2022-02-24T15:15:41.000Z",
      updatedAt: "2022-02-24T15:15:41.000Z",
      Followship: {
        followerId: 2,
        followingId: 5,
        createdAt: "2022-02-24T15:15:42.000Z",
        updatedAt: "2022-02-24T15:15:42.000Z",
      },
    },
    {
      id: 3,
      name: "user2",
      email: "user2@example.com",
      avatar: "https://loremflickr.com/140/140/people?random=100",
      introduction:
        "Perferendis ut autem dignissimos. Ut qui itaque sit aspernatur occaecati quos. Et ea dignissimos tem",
      role: "",
      account: "user2",
      cover: "https://loremflickr.com/600/200/nature?random=100",
      createdAt: "2022-02-24T15:15:41.000Z",
      updatedAt: "2022-02-24T15:15:41.000Z",
      Followship: {
        followerId: 2,
        followingId: 3,
        createdAt: "2022-02-24T15:15:42.000Z",
        updatedAt: "2022-02-24T15:15:42.000Z",
      },
    },
    {
      id: 1,
      name: "root",
      email: "root@example.com",
      avatar: "https://loremflickr.com/140/140/people?random=100",
      introduction:
        "Illum voluptas ea sed sunt nulla nihil. Velit fugiat libero ullam repellendus.",
      role: "admin",
      account: "root",
      cover: "https://loremflickr.com/600/200/nature?random=100",
      createdAt: "2022-02-24T15:15:41.000Z",
      updatedAt: "2022-02-24T15:15:41.000Z",
      Followship: {
        followerId: 2,
        followingId: 1,
        createdAt: "2022-02-24T15:15:42.000Z",
        updatedAt: "2022-02-24T15:15:42.000Z",
      },
    },
  ],
};
const dummyTweet = [
  {
    tweetId: 11,
    createdAt: "2022-02-25T04:07:26.000Z",
    description: "quaerat doloribus minus",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 2,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 12,
    createdAt: "2022-02-25T04:07:26.000Z",
    description:
      "Modi voluptatem qui recusandae nemo fugiat magnam molestias sit dolor. Est aut qui minima. Ad id rep",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 3,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 13,
    createdAt: "2022-02-25T04:07:26.000Z",
    description: "Accusamus omnis voluptatem.",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 2,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 14,
    createdAt: "2022-02-25T04:07:26.000Z",
    description:
      "Soluta consequuntur molestiae suscipit possimus possimus pariatur magni. Eum cupiditate tenetur quia",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 1,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 15,
    createdAt: "2022-02-25T04:07:26.000Z",
    description: "aliquid",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 3,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 16,
    createdAt: "2022-02-25T04:07:26.000Z",
    description:
      "Qui autem et nulla fugit ut. Aut odit eius ut architecto vero architecto itaque. Ipsa doloribus volu",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 2,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 17,
    createdAt: "2022-02-25T04:07:26.000Z",
    description: "voluptatem at accusantium",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 0,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 18,
    createdAt: "2022-02-25T04:07:26.000Z",
    description: "deserunt saepe et",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 1,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 19,
    createdAt: "2022-02-25T04:07:26.000Z",
    description: "omnis voluptatem et",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 2,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    tweetId: 20,
    createdAt: "2022-02-25T04:07:26.000Z",
    description:
      "Dolores perspiciatis in autem autem rem non cupiditate et consequatur.",
    image: "https://loremflickr.com/320/240/nature?random=100",
    LikesCount: 1,
    RepliesCount: 3,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
];
const dummyReplyTweets = [
  {
    replyId: 1,
    comment: "sed sint eveniet",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 1,
      description:
        "Aliquam qui harum.\nAut deleniti rerum eius quos error labore fuga sint consequatur.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 4,
    comment: "Exercitationem commodi ut qui. Architecto tenetur ",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 2,
      description:
        "Quod voluptas non et sunt a asperiores. Reiciendis maxime similique in sapiente voluptatem facere cu",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 7,
    comment: "Autem saepe et ea. Harum rerum sunt. Et dignissimo",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: null,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 11,
    comment: "Sapiente in consequatur ut nihil nihil nisi commod",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 4,
      description: "voluptatem explicabo dolorem",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 17,
    comment: "Praesentium harum qui dolores officia eius nihil. ",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 6,
      description:
        "Aut illum id fugit qui adipisci. Omnis temporibus eius similique sequi iusto placeat est. Omnis est ",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 19,
    comment: "Quibusdam fugiat est aut veniam. Corporis qui aut ",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 7,
      description: "Impedit aliquid voluptates asperiores blanditiis cumque.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 24,
    comment: "et",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 8,
      description:
        "Perspiciatis unde officiis animi quia modi nobis ab. Sed eos est in. Velit minus soluta dolor unde. ",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 42,
    comment: "Qui incidunt dolor et vitae qui.\nIusto nostrum et ",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 14,
      description:
        "Soluta consequuntur molestiae suscipit possimus possimus pariatur magni. Eum cupiditate tenetur quia",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 44,
    comment: "Voluptas qui a quas ab sequi consequatur et.",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 15,
      description: "aliquid",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 53,
    comment: "Autem aut placeat totam enim. Voluptas facilis ass",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 18,
      description: "deserunt saepe et",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 56,
    comment: "libero",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 19,
      description: "omnis voluptatem et",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 60,
    comment: "Fugit temporibus qui.\nVoluptates quo rerum.",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 20,
      description:
        "Dolores perspiciatis in autem autem rem non cupiditate et consequatur.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 61,
    comment: "Ut qui nesciunt expedita dolorum et rerum numquam.",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 21,
      description:
        "Et sunt quo libero quo non magni. Quisquam beatae rerum mollitia alias expedita. Fugiat quibusdam qu",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 66,
    comment: "facilis",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 22,
      description: "ipsa",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 67,
    comment: "Quibusdam cumque eos.\nAd quia ut culpa ut nobis.",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 23,
      description:
        "Animi laudantium quisquam cumque. Inventore ut dolorum aliquid hic corrupti quos eum. Non ullam mole",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 73,
    comment: "Voluptatibus velit quidem. Maxime soluta explicabo",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 25,
      description:
        "Necessitatibus vel adipisci dolorum. Minima ea necessitatibus nobis quaerat culpa. Commodi magnam qu",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 77,
    comment: "quisquam",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 26,
      description: "quo voluptatum impedit",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 79,
    comment: "quam voluptatem pariatur",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 27,
      description:
        "Autem neque eveniet. Ad qui consequatur id qui sit rerum. Eius et laboriosam porro. Magni sit veniam",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 86,
    comment: "Aut nesciunt suscipit aut commodi esse soluta cons",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 29,
      description:
        "Quis sed est recusandae pariatur ad nam libero non. Est atque autem magnam omnis vel cumque perferen",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 90,
    comment: "exercitationem",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 30,
      description:
        "In est itaque hic et qui placeat illum.\nSunt et nihil laboriosam aspernatur sapiente sequi cum et fu",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 94,
    comment: "In et eum.\nIllo repellat illo magnam dolores.\nEt i",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 32,
      description: "Iure enim dolor odio quos ratione placeat.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 101,
    comment: "Cupiditate perspiciatis molestiae similique. Qui m",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 34,
      description:
        "Dicta iure laborum autem incidunt et aut recusandae. Voluptas voluptas nostrum animi ab cumque sint ",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 105,
    comment: "Molestiae cum libero.\nProvident dignissimos sapien",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 35,
      description: "delectus saepe molestias",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 106,
    comment: "Dolorem recusandae dignissimos animi ut. Asperiore",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 36,
      description: "Numquam laborum ipsam repellendus non odit nisi.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 110,
    comment: "Ut porro animi modi sunt sed eos aut vel numquam. ",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 37,
      description:
        "Neque fuga rerum molestiae rerum blanditiis qui corrupti maiores. Enim doloribus numquam inventore c",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 113,
    comment: "quas veniam tenetur",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 38,
      description: "ipsum",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 115,
    comment: "Laborum necessitatibus sed iure aut nostrum itaque",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 39,
      description: "Aut fuga architecto dolores.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 120,
    comment: "Et expedita modi. Ratione iure quis. Quas ut quam ",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 40,
      description:
        "Reiciendis facilis quis consequatur qui et.\nVoluptatem in architecto quibusdam quia et dolore volupt",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 122,
    comment: "aut tempore distinctio",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 41,
      description: "Sunt nisi officia molestiae quo vel ipsam.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 127,
    comment: "Sapiente quisquam eum. Ut maiores optio cumque iur",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 43,
      description:
        "Ut soluta eveniet tempora quam recusandae modi suscipit odio. Molestias quaerat sit corporis corrupt",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 134,
    comment: "Et voluptates excepturi ut et consectetur quo nihi",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 45,
      description:
        "Facilis aliquam cum dolor recusandae qui.\nEt nam dolores delectus accusantium non fugit enim sunt ea",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 139,
    comment: "Soluta laudantium eveniet. Aut ut voluptatem verit",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: {
      tweetId: 47,
      description: "omnis consequuntur qui",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 144,
    comment: "Ea sit nisi ducimus totam temporibus cupiditate et",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: null,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 145,
    comment: "Illo non placeat ad recusandae sed consequatur. Du",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: null,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
  {
    replyId: 149,
    comment: "Corrupti quaerat recusandae qui iste deleniti adip",
    createdAt: "2022-02-25T04:07:26.000Z",
    Tweet: null,
    User: {
      id: 3,
      name: "user2",
      account: "user2",
      avatar: "https://loremflickr.com/140/140/people?random=100",
    },
  },
];
const dummyLikes = [
  {
    id: 2,
    UserId: 3,
    TweetId: 36,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 36,
    Tweet: {
      tweetId: 36,
      description: "Numquam laborum ipsam repellendus non odit nisi.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 17,
    UserId: 3,
    TweetId: 24,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 24,
    Tweet: {
      tweetId: 24,
      description: "sunt",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 22,
    UserId: 3,
    TweetId: 7,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 7,
    Tweet: {
      tweetId: 7,
      description: "Impedit aliquid voluptates asperiores blanditiis cumque.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 24,
    UserId: 3,
    TweetId: 10,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 10,
    Tweet: {
      tweetId: 10,
      description:
        "Quod aut enim ducimus qui voluptatem voluptate nesciunt molestiae dignissimos. Perferendis ut amet i",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 29,
    UserId: 3,
    TweetId: 43,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 43,
    Tweet: {
      tweetId: 43,
      description:
        "Ut soluta eveniet tempora quam recusandae modi suscipit odio. Molestias quaerat sit corporis corrupt",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 36,
    UserId: 3,
    TweetId: 12,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 12,
    Tweet: {
      tweetId: 12,
      description:
        "Modi voluptatem qui recusandae nemo fugiat magnam molestias sit dolor. Est aut qui minima. Ad id rep",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 40,
    UserId: 3,
    TweetId: 45,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 45,
    Tweet: {
      tweetId: 45,
      description:
        "Facilis aliquam cum dolor recusandae qui.\nEt nam dolores delectus accusantium non fugit enim sunt ea",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 49,
    UserId: 3,
    TweetId: 23,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 23,
    Tweet: {
      tweetId: 23,
      description:
        "Animi laudantium quisquam cumque. Inventore ut dolorum aliquid hic corrupti quos eum. Non ullam mole",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 56,
    UserId: 3,
    TweetId: 5,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 5,
    Tweet: {
      tweetId: 5,
      description:
        "Repellendus et natus quidem perspiciatis suscipit a ea. Reprehenderit nihil error amet ipsum. Volupt",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 69,
    UserId: 3,
    TweetId: 15,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 15,
    Tweet: {
      tweetId: 15,
      description: "aliquid",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 73,
    UserId: 3,
    TweetId: 31,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 31,
    Tweet: {
      tweetId: 31,
      description: "ipsam enim ducimus",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 80,
    UserId: 3,
    TweetId: 35,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 35,
    Tweet: {
      tweetId: 35,
      description: "delectus saepe molestias",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 81,
    UserId: 3,
    TweetId: 32,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 32,
    Tweet: {
      tweetId: 32,
      description: "Iure enim dolor odio quos ratione placeat.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 82,
    UserId: 3,
    TweetId: 42,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 42,
    Tweet: {
      tweetId: 42,
      description:
        "Itaque voluptas quo sapiente minima corporis qui. Iste aut eligendi. Qui aut est qui.",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 86,
    UserId: 3,
    TweetId: 22,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 22,
    Tweet: {
      tweetId: 22,
      description: "ipsa",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
  {
    id: 94,
    UserId: 3,
    TweetId: 4,
    createdAt: "2022-02-25T04:07:26.000Z",
    updatedAt: "2022-02-25T04:07:26.000Z",
    userId: 3,
    tweetId: 4,
    Tweet: {
      tweetId: 4,
      description: "voluptatem explicabo dolorem",
      image: "https://loremflickr.com/320/240/nature?random=100",
    },
  },
];

export default {
  name: "User",
  components: {
    Navbar,
    PopularUsers,
  },
  created() {
    this.fetchUser();
    this.fetchTweets();
    this.fetchLikes();
  },
  data() {
    return {
      currentStatus: {
        isIndex: false,
        isUser: true,
        isSetting: false,
      },
      user: {
        id: -1,
        name: "",
        avatar: "",
        introduction: "",
        account: "",
        cover: "",
        followersLength: 0,
        followingsLength: 0,
      },
      tweets: [],
      replyTweets: [],
      likes: [],
      Followers: [],
      Followings: [],
    };
  },
  methods: {
    fetchUser() {
      const {
        id,
        name,
        avatar,
        introduction,
        account,
        cover,
        Followers,
        Followings,
      } = {
        ...dummyData,
      };
      this.user = {
        id,
        name,
        avatar,
        introduction,
        account,
        cover,
        followersLength: Followers.length,
        followingsLength: Followings.length,
      };

      this.Followers = Followers;
      this.Followings = Followings;
    },
    fetchTweets() {
      this.tweets = dummyTweet;
    },
    fetchReplies() {
      this.replyTweets = dummyReplyTweets;
    },
    fetchLikes() {
      this.likes = dummyLikes;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/variables.scss";
.container {
  display: grid;
  grid-template-columns: 210px 600px 350px;
  column-gap: 30px;
}
.main {
  width: 100%;
  border: {
    left: 1px solid #e6ecf0;
    right: 1px solid #e6ecf0;
  }
  border-bottom: 1px #e6ecf0 solid;
}
.header {
  width: 100%;
  height: 55px;
  display: flex;
  align-content: center;
  .previous-btn {
    width: 17px;
    height: 14px;
    margin: 20px;
  }
  .title {
    margin-left: 1rem;
    .user-name {
      font-weight: 900;
      font-size: 19px;
    }
    .user-tweet {
      font-weight: 500;
      font-size: 13px;
      color: $secondaryTextColor;
    }
  }
}
</style>
