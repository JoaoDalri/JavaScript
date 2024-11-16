const scrape = require('website-scraper');
const PuppeteerPlugin = require('website-scraper-puppeteer');
const path = require('path');

scrape({
    // Forneça a URL do site que você quer copiar
    urls: ['https://www.netflix.com/browse'],

    // Especifique a pasta onde os arquivos do site serão salvos em pasta-do-site
    directory: path.resolve(__dirname, 'C:\1\programacao\\site_clone'),
    
    // carregue o plugin do Puppeteer
    plugins: [ 
        new PuppeteerPlugin({
            launchOptions: { 
                headless: true
            },
            scrollToBottom: {
                timeout: 10000, 
                viewportN: 10 
            }
        })
    ]
});