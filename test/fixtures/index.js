export default {
  getImage () {
    return {
      id: 'e1b181a2-5482-43e2-be24-948967902198',
      publicId: '6RSormFWfxDpVUZMWEcC2A',
      userId: 'platzigram',
      liked: false,
      likes: 0,
      src: 'http://platzigram.test/6RSormFWfxDpVUZMWEcC2A.jpg',
      description: '#awesome',
      tags: [ 'awesome' ],
      createdAt: new Date().toString()
    }
  },

  getImages () {
    return [
      this.getImage(),
      this.getImage(),
      this.getImage()
    ]
  },

  getImagesByTag () {
    return [
      this.getImage(),
      this.getImage()
    ]
  },

  getUser () {
    return {
      id: '53315f9f-1c24-49cc-b1a8-b9c2cd807338',
      name: 'David Gomez',
      username: 'davidjgomez',
      email: 'davidgomez@platzigram.test',
      password: 'pru3b4',
      createdAt: new Date().toString()
    }
  }
}
