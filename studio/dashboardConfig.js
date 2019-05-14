export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5cda515cf1ac9bed05b90ff2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-qehuubpb',
                  apiId: '38bdd44d-21a8-4df5-89a8-0f0feb33f973'
                },
                {
                  buildHookId: '5cda515cd3e01db9cd4e1132',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-a5jepbq9',
                  apiId: '550e2af6-9dd2-444a-85ee-07263155190d'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dheasyifakh/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-a5jepbq9.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
