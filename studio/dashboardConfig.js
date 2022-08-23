export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63052041ae051a0063717de0',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-9u8mfwfr',
                  apiId: '9352ab2e-18f6-459f-903a-66868d036818'
                },
                {
                  buildHookId: '63052042555a0105ee0e4838',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-d8kd55pi',
                  apiId: '6cdb5819-f085-422b-addd-a732a67db3ed'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/adelotman1987/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-d8kd55pi.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
