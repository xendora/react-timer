module.exports = {
  base: '/react-timer/',
  title: 'React Timer',
  hashRouter: true,
  ignore: ['README.md', 'example/README.md'],
  src: './docs',
  menu: [
    {
      name: 'Getting Started',
      menu: [
        { name: 'Introduction', route: '/' },
        { name: 'Installation', route: '/installation' },
        { name: 'Changelog', route: '/changelog' }
      ]
    }
  ]
}
