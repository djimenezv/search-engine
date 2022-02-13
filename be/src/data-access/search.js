const data = [{
        title: 'Camisa Dafiti',
        photo: 'https://image.dhgate.com/0x0s/f2-albu-g10-M00-9B-51-rBVaVlyktaOADdV8AADPRRhvDzY888.jpg/nuevos-hombres-camisa-para-hombre-de-manga.jpg',
        description: '100 % Algodón Cierre de button down Lavar a máquina Algodón de franela de buena calidad. Tejido súper suave, cómodo y sin arrugas',
        shortDescription: '100 % Algodón Cierre de button down Lavar a máquina Algodón'
    },
    {
        title: 'Camisa Azul Celeste',
        photo: 'https://i.pinimg.com/736x/1a/30/ba/1a30bafc0af4e1000c49f63170645926.jpg',
        description: 'Camisa azul Celeste de manga larga con un bolsillo pecho izquierdo. Los botone en azul contrastados. Y canesú en la espalda. #camisa #azul #celeste #botones #contrastados',
        shortDescription: 'Camisa azul Celeste de manga larga con un bolsillo pecho izquierdo.'
    },
    {
        title: 'Camisa negra',
        photo: 'https://ss261.liverpool.com.mx/xl/1078675161_2p.jpg',
        description: 'Una camisa formal de manga larga de HUGO Hombre en popelín de algodón transpirable. Un look contemporáneo elaborado en un cómodo corte ceñido con puños cuadrados y un moderno cuello Kent. Añada este diseño a su colección formal',
        shortDescription: 'Una camisa formal de manga larga de HUGO Hombre en popelín de algodón transpirable. Un look contemporáneo.'
    }


   
];

export const search = (searchString) => data.filter(item =>  item.title.toLowerCase().indexOf(searchString.toLowerCase()) !== -1);
