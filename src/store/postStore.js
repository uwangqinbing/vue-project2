import { defineStore } from 'pinia';

export const usePostStore = defineStore('postStore', {
  state: () => ({
    currentPost: null,
    isLoading: false,
    error: null,
    // Mock posts database with more details
    posts: [
      {
        id: 1,
        title: 'Govee LED Strip Review',
        content: 'I recently purchased the Govee LED strip and it exceeded my expectations. The colors are vibrant and the app control is very intuitive. The installation was straightforward and the adhesive has held up well on my wall for over a month now.\n\nOne feature I particularly like is the music sync mode, which makes the lights dance to the beat of my music. The only downside is that the power adapter is a bit bulky, but it\'s hidden behind my TV so it\'s not a big issue.\n\nOverall, I highly recommend the Govee LED strip for anyone looking to add some ambiance to their living space!',
        author: 'TechLover',
        authorId: 1,
        authorAvatar: '/avatars/techlover.jpg',
        date: '2023-06-15',
        tags: ['led', 'review', 'govee'],
        image: '/post-images/led-strip.jpg',
        likes: 45,
        comments: [
          {
            id: 101,
            author: 'LightingFan',
            authorAvatar: '/avatars/lightingfan.jpg',
            content: 'Great review! I was thinking about getting these. How\'s the color accuracy?',
            date: '2023-06-16'
          },
          {
            id: 102,
            author: 'TechLover',
            authorAvatar: '/avatars/techlover.jpg',
            content: '@LightingFan The color accuracy is excellent! They match what\'s on my screen very well.',
            date: '2023-06-16'
          }
        ]
      },
      {
        id: 2,
        title: 'Setting up Govee Smart Bulbs',
        content: 'Here\'s a step-by-step guide to setting up your Govee smart bulbs:\n\n1. Download the Govee Home app from the App Store or Google Play\n2. Create an account and log in\n3. Tap the "+" button in the top right corner\n4. Select "Smart Lighting" from the device list\n5. Screw in your Govee smart bulb and turn it on\n6. The app should automatically detect the bulb\n7. Follow the on-screen instructions to connect to your Wi-Fi\n8. Once connected, you can rename the bulb and start controlling it!\n\nPro tip: For best results, make sure your phone is connected to the 2.4GHz Wi-Fi network before setup.',
        author: 'SmartHomeExpert',
        authorId: 2,
        authorAvatar: '/avatars/smarthome.jpg',
        date: '2023-06-20',
        tags: ['smart bulbs', 'setup', 'tutorial'],
        image: '/post-images/smart-bulb.jpg',
        likes: 32,
        comments: [
          {
            id: 201,
            author: 'NewUser',
            authorAvatar: '/avatars/newuser.jpg',
            content: 'Thanks for the guide! Worked perfectly for me.',
            date: '2023-06-21'
          }
        ]
      },
      {
        id: 3,
        title: 'Govee vs Phillips Hue',
        content: 'A detailed comparison between Govee and Phillips Hue smart lighting systems:\n\n**Price:** Govee is significantly more affordable, with starter kits costing about half of what Phillips Hue charges.\n\n**Features:** Both offer similar basic features - color changing, scheduling, and app control. Phillips Hue has more advanced automation options through the Hue Bridge.\n\n**Quality:** Phillips Hue has slightly better color accuracy and build quality, but Govee is no slouch in this department.\n\n**Integration:** Phillips Hue works with more smart home platforms, while Govee is more limited but works well with Alexa and Google Home.\n\n**Verdict:** If you\'re on a budget and want good quality lighting, go with Govee. If you want the most advanced smart home integration and don\'t mind paying more, Phillips Hue is the way to go.',
        author: 'ComparisonKing',
        authorId: 3,
        authorAvatar: '/avatars/comparison.jpg',
        date: '2023-06-25',
        tags: ['comparison', 'smart home', 'review'],
        image: '/post-images/comparison.jpg',
        likes: 67,
        comments: [
          {
            id: 301,
            author: 'HueUser',
            authorAvatar: '/avatars/hueuser.jpg',
            content: 'I agree with most of your points, but Hue\'s ecosystem is worth the extra cost in my opinion.',
            date: '2023-06-26'
          },
          {
            id: 302,
            author: 'GoveeOwner',
            authorAvatar: '/avatars/goveeowner.jpg',
            content: 'I\'ve had Govee for over a year and haven\'t had any issues. Great value!',
            date: '2023-06-26'
          }
        ]
      },
      {
        id: 4,
        title: 'Best Govee Products in 2023',
        content: 'My top picks for the best Govee products available this year:\n\n1. **Govee DreamView G1 Pro** - Best overall LED strip with camera sync\n2. **Govee Glide Hexa Pro** - Most innovative design\n3. **Govee Smart Wi-Fi RGBWW Bulb** - Best smart bulb value\n4. **Govee Outdoor String Lights** - Best outdoor lighting\n5. **Govee Envisual TV Backlights** - Best TV backlighting solution\n\nHonorable mention: Govee M1 RGBIC LED Strip for its excellent color effects and music sync capabilities.',
        author: 'ProductHunter',
        authorId: 4,
        authorAvatar: '/avatars/producthunter.jpg',
        date: '2023-07-01',
        tags: ['top picks', 'best of', '2023'],
        image: '/post-images/best-products.jpg',
        likes: 54,
        comments: []
      },
      {
        id: 5,
        title: 'Troubleshooting Govee Connection Issues',
        content: 'How to fix common connection problems with Govee devices:\n\n**Problem:** Device not connecting to Wi-Fi\n**Solution:**\n- Make sure you\'re using 2.4GHz Wi-Fi (not 5GHz)\n- Reset the device by turning it off and on again\n- Move closer to your router\n- Check that your Wi-Fi password is correct\n\n**Problem:** App not finding device\n**Solution:**\n- Enable location services on your phone\n- Restart the app\n- Clear the app cache\n- Update to the latest version of the app\n\n**Problem:** Intermittent disconnections\n**Solution:**\n- Check for interference from other devices\n- Update device firmware\n- Check router settings for device timeout limits',
        author: 'TechSupport',
        authorId: 5,
        authorAvatar: '/avatars/techsupport.jpg',
        date: '2023-07-05',
        tags: ['troubleshooting', 'connection', 'help'],
        image: '/post-images/troubleshooting.jpg',
        likes: 29,
        comments: [
          {
            id: 501,
            author: 'HavingIssues',
            authorAvatar: '/avatars/havingissues.jpg',
            content: 'The 2.4GHz tip fixed my problem! Thanks!',
            date: '2023-07-06'
          }
        ]
      }
    ]
  }),
  actions: {
    async fetchPostDetail(postId) {
      this.isLoading = true;
      this.error = null;
      this.currentPost = null;

      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 500));

        const post = this.posts.find(p => p.id === Number(postId));

        if (!post) {
          throw new Error('Post not found');
        }

        this.currentPost = post;
      } catch (err) {
        this.error = err.message;
      } finally {
        this.isLoading = false;
      }
    },
    clearCurrentPost() {
      this.currentPost = null;
    }
  }
});