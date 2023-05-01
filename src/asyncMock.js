export const products = [
    {
        id:'1',
        name:'Minibrut 4 Led',
        price:6300,
        category:'lightning',
        img:'https://proaudiosur.com.ar/wp-content/uploads/2020/04/782970-MLA32320377055_092019.jpg',
        stock:11,
        description:'Minibrut 4 Led Blinder Lite Tecshow Cob 200watts Dmx 30°',
    },
    {
        id:'2',
        name:'Fresnel Led',
        price:2200,
        category:'lightning',
        img:'https://proaudiosur.com.ar/wp-content/uploads/2020/05/811421-MLA40606192309_012020.jpg',
        stock:58,
        description:'Fresnel Fresneled Lite 20 Neo 20w 24º Ampro Led Calido 2700k',
    },
    {
        id:'3',
        name:'Blinder Venetian',
        price:2300,
        category:'lightning',
        img:'https://proaudiosur.com.ar/wp-content/uploads/2020/04/855353-MLA28232621259_092018-400x400.jpg',
        stock:19,
        description:'Blinder Venetian E327 Cob 200watts Dmx 60° Minibrut 2 Led',
    },
    {
        id:'4',
        name:'Consola Lexsen 11',
        price:3800,
        category:'sound',
        img:'https://proaudiosur.com.ar/wp-content/uploads/2023/01/D_630362-MLA53399497090_012023-F-400x400.jpg',
        stock:14,
        description:'Consola De Sonido Lexsen Vivo 11 Bluetooth Usb Phantom Mixer',
    },
    {
        id:'5',
        name:'Bafle QSC 12',
        price:5100,
        category:'sound',
        img:'https://proaudiosur.com.ar/wp-content/uploads/2020/05/789405-MLA32247122267_092019-400x400.jpg',
        stock:18,
        description:'Bafle Activo Qsc Cp12 Dsp 500w Rms Potenciado Monitor 126db',
    },
    {
        id:'6',
        name:'Subwoofer Roller 18',
        price:3100,
        category:'sound',
        img:'https://proaudiosur.com.ar/wp-content/uploads/2020/04/815021-MLA27063022014_032018-400x400.jpg',
        stock:26,
        description:'Subwoofer Roller 18 Sub18r Pasivo Caja Acustica 500watts Rms',
    },
    {
        id:'7',
        name:'Aluminium Stairs',
        price:4500,
        category:'scenography',
        img:'https://cdn.shopify.com/s/files/1/0277/2631/5568/products/GT-STAIR_686x@2x.progressive.jpg?v=1582708374',
        stock:6,
        description:'Escaleras de aluminio reforzadas ajustables',
    },
    {
        id:'8',
        name:'Iron Columns',
        price:5000,
        category:'scenography',
        img:'https://e7.pngegg.com/pngimages/361/763/png-clipart-stage-lighting-stage-angle-photography-thumbnail.png',
        stock:15,
        description:'Columnas de hierro negras 3mts',
    },
    {
        id:'9',
        name:'Iron Arch',
        price:16000,
        category:'scenography',
        img:'https://e7.pngegg.com/pngimages/559/153/png-clipart-gray-truss-stand-truss-structure-steel-girder-stage-lighting-miscellaneous-angle-thumbnail.png',
        stock:21,
        description:'Arco de hierro ajustable',
    },    {
        id:'10',
        name:'Militar',
        price:3400,
        category:'costumes',
        img:'https://e7.pngegg.com/pngimages/628/71/png-clipart-graphy-costume-others-miscellaneous-photomontage-thumbnail.png',
        stock:3,
        description:'Vestuario de oficio militar moderno L',
    },
    {
        id:'11',
        name:'King',
        price:6700,
        category:'costumes',
        img:'https://e7.pngegg.com/pngimages/438/2/png-clipart-costume-design-outerwear-king-others-king-costume-thumbnail.png',
        stock:7,
        description:'Vestuario de época. Rey inglés M',
    },
    {
        id:'12',
        name:'Superman',
        price:2800,
        category:'costumes',
        img:'https://e7.pngegg.com/pngimages/305/646/png-clipart-superman-costume-superman-supergirl-the-cw-suit-heroes-superhero-thumbnail.png',
        stock:5,
        description:'Vestuario de superhéroe, Superman S',
    },

]

export const getProducts = () => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductById = (productId) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.find(product => product.id === productId))
        }, 500)
    })
}

export const getProductsByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve(products.filter(product => product.category === productCategory))
        }, 500)
    })
}