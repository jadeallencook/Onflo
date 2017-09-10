// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  business: {
    name: 'onflo',
    phone: '(555) 555-5555',
    email: 'hello@onflo.com'
  },
  layout: {
    links: ['home', 'portfolio', 'dashboard', 'contact']
  },
  promos: {
    restaurant: '',
    tattoo: '',
    decor: '',
    mechanics: '',
    music: '',
    estate: ''
  }
};
