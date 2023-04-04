var config = {
    style: 'mapbox://styles/mapbox/satellite-v9',
    accessToken: 'pk.eyJ1IjoianVhbmVzdGVsbGVyIiwiYSI6ImNsZGJqcGVoODAxOGUzdW81YXJoeG5yNGUifQ.MyRRerLjuqfIQsD42ayDtw',
    showMarkers: true,
    markerColor: '#3FB1CE',
    //projection: 'equirectangular',
    //Read more about available projections here
    //https://docs.mapbox.com/mapbox-gl-js/example/projections/
    inset: true,
    theme: 'dark',
    use3dTerrain: true, //set true for enabling 3D maps.
    title: 'LAGUNA DEL CARNERO',
    subtitle: 'Ruta a través de la acequia árabe de Los Hechos hasta la Laguna del Carnero, situada sobre un circo glaciar en la cabecera del río Dúrcal',
    byline: 'Teresa, Álvaro, Gustavo, Sergio y Juan',
    footer: 'Source: (citar créditos) <br> Created using <a href="https://github.com/mapbox/storytelling" target="_blank">Mapbox Storytelling</a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Acceso al inicio de la ruta por Nigüelas ',
            image: 'images/01.2_MTN_montaje.jpg',
            description: 'Después de atravesar el núcleo urbano de Nigüelas, seguimos la pista junto al río Torrente en dirección NE. 1 hora de ascenso, aproximadamente, serpenteando laderas de matorral y coníferas. Llama la atención los desprendimientos que amenazan algunos cortijos en la parte baja.  **ese wikiloc no es el que hicimos, falta el descenso desde el circo recortando.** ',
            location: {
                center: [-3.49124, 37.03460],
                zoom: 10.8,
                pitch: 70,
                bearing: 63.20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'second-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Inicio',
            image: 'images/02_20230326_110519.jpg',
            description: 'Dejamos el coche en una explanada al final de la pista. La ruta continua por una vereda ensanchada a media ladera abriéndose paso por un nuevo desprendimiento. Al fondo, se aprecia el salto de agua que vierte al Barranco del Caballo, tributario del río Dúrcal.',
            location: {
                center: [-3.467210557, 37.02839],
                zoom: 13.5,
                pitch: 0,
                bearing: 37,
                // flyTo additional controls-
                // These options control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                //speed: 2, // make the flying slow
                //curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'third-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Barranco del Caballo',
            image: 'images/03_20230326_111040.jpg',
            description: 'Cruzamos por el dique sobre el Barranco del Caballo. La Acequia de los Hechos corta en perpendicular este cauce al que alimenta en su área de cabecera.',
            location: {
                center: [-3.4641439, 37.02721608],
                zoom: 14.1,
                pitch: 90,
                bearing: 145.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'fourth-chapter',
            alignment: 'left',
            hidden: false,
            title: 'Acequia de Los Hechos',
            image: 'images/04_20230326_114329.jpg',
            description: 'Tomamos la acequia a unos 2.220 m. siguiendo su trazado de pendiente suave hasta las proximidades de su origen en las inmediacines del Cascajar del Cartujo (MTN 25).',
            location: {
                center: [-3.45328703, 37.03356767],
                zoom: 14.0,
                pitch: 90,
                bearing: 0160
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'fifth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Nieve',
            image: 'images/05_20230326_124320.jpg',
            description: 'Alcanzamos la cota de nieve por encima de los 2.450 m.',
            location: {
                center: [-3.43519352, 37.04622375],
                zoom: 14.5,
                pitch: 90,
                bearing: 150
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'sixth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Panorámica',
            image: 'images/06_20230326_132640.jpg',
            description: 'Unos metros más adelante, la vista se abre hacia el circo glaciar del río Dúrcal a un extremo y la Depresión de Granada al otro.',
            location: {
                center: [-3.3453891, 37.0418042],
                zoom: 14.5,
                pitch: 90,
                bearing: 50
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'seventh-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Cabras',
            image: 'images/07_20230326_134623.jpg',
            description: 'Al poco de iniciar la subida hacia la Laguna del Carnero encontramos un fabuloso grupo de cabras montesas recorriendo la loma opuesta, una de las mejores estampas de la jornada',
            location: {
                center: [-3.432670539, 37.037599531],
                zoom: 18.0,
                pitch: 80,
                bearing: 70
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'eigth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Laguna del Carnero',
            image: 'images/gustavo_laguna_carnero_20230326_141135.jpg',
            description: 'Llegamos a las proximidades de la laguna hasta el cortado desde donde está tomada la foto.',
            location: {
                center: [-3.42839044, 37.0349086],
                zoom: 17,
                pitch: 90,
                bearing: 320
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'nineth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Descenso',
            image: 'images/09_20230326_153022.jpg',
            description: 'A la vuelta recortamos camino tomando la pendiente abajo casi en perpendicular a las curvas de nivel, disfrutando de una amplia cuenca visual hasta la Vega y serranías que la encierran.',
            location: {
                center: [-3.43462096, 37.03578753],
                zoom: 12,
                pitch: 90,
                bearing: 300
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
		{
            id: 'tenth-chapter',
            alignment: 'right',
            hidden: false,
            title: 'Refugio',
            image: 'images/10_20230326_154452.jpg',
            description: 'Poco antes del reencuentro con la acequia pasamos por los restos de lo que fue un refugio de montaña.',
            location: {
                center: [-3.4437358436, 37.0367418003],
                zoom: 16,
                pitch: 90,
                bearing: 140
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
    ]
};
