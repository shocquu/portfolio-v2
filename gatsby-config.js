module.exports = {
    siteMetadata: {
        url: `https://arkadiuszliszka.site`,
        title: `Portfolio`,
        titleTemplate: 'Arkadiusz Liszka · %s',
        description: 'An aspiring Web Developer located in Poland',
        image: '/portfolio.png',
    },
    plugins: [
        'gatsby-plugin-styled-components',
        'gatsby-plugin-image',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: `Arkadiusz Liszka - Portfolio`,
                short_name: `Arkadiusz Liszka`,
                description: 'An aspiring Web Developer located in Poland',
                start_url: `/`,
                background_color: `#1b1f3a`,
                theme_color: `#d14449`,
                display: `standalone`,
                icon: 'src/images/icon.svg',
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
        {
            resolve: `gatsby-plugin-google-fonts-v2`,
            options: {
                fonts: [
                    {
                        family: 'Raleway',
                        weights: ['300', '400', '600'],
                    },
                    {
                        family: 'Bitters',
                        weights: ['400', '500'],
                    },
                ],
            },
        },
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [process.env.GATSBY_GA_TRACKING_ID],
                gtagConfig: {
                    anonymize_ip: true,
                },
                pluginConfig: {
                    head: false,
                    respectDNT: true,
                },
            },
        },
    ],
};
