module.exports = {
    siteMetadata: {
        url: `https://arkadiuszliszka.com`,
        title: `Arkadiusz Liszka`,
        titleTemplate: '%s · Arkadiusz Liszka',
        description: 'An aspiring web developer located in Poland',
        image: '/portfolio.png',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                icon: 'src/images/icon.png',
            },
        },
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
        `gatsby-transformer-remark`,
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: './src/images/',
            },
            __key: 'images',
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'featured',
                path: `${__dirname}/content/featured`,
            },
        },
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'projects',
                path: `${__dirname}/content/projects`,
            },
        },
    ],
};
