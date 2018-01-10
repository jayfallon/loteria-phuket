module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
  		`gatsby-plugin-react-helmet`,
  		`gatsby-transformer-remark`,
  		`gatsby-plugin-glamor`,
  		{
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `src`,
          path: `${__dirname}/src/`,
        },
      },
			{
		    resolve: `gatsby-plugin-sass`,
		    options: {
		      // postCssPlugins: [cssnext],
		      precision: 8, // SASS default: 5
		    },
		  },
  		{
	      resolve: `gatsby-plugin-typography`,
	      options: {
  			pathToConfigModule: `src/utils/typography.js`,
  		},
  	},
  ],
}
