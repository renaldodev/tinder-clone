export const userSchema = {
  type: 'document',
  name: 'users',
  title: 'Users',
  fields: [
    {
      type: 'string',
      name: 'name',
      title: 'Name',
    },
    {
      name: 'walletAddress',
      title: 'Wallet Adress',
      type: 'string',
    },
    {
      name: 'profileImage',
      title: 'Profile Image',
      type: 'image',
    },
    {
      name: 'likes',
      title: 'Likes',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'users' } }],
    },
  ],
}
