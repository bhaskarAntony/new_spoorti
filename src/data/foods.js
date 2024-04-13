const menu = [
    {
        image:'https://simply-delicious-food.com/wp-content/uploads/2022/09/Breakfast-board28.jpg',
        title:'Breakfast',
        time:'8:30AM - 10:30AM',
       all:[
        {
            title:'Breakfast',
            foods:[
                //   {
                //     categorie:'',
                //     image:
                //   }
                {
                    id:1,
                    image:'https://images.squarespace-cdn.com/content/v1/5e558c8165fc4c78f502938d/1614365325445-7480O0Y2L91QASF9KBKQ/Idli+Kalpana+Sunder.jpg',
                    price: 60,
                    title:'Idly',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:2,
                    image:'https://myfoodstory.com/wp-content/uploads/2022/09/Medu-Vada-5.jpg',
                    price: 60,
                    title:'Medu vada',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:3,
                    image:'https://www.indianhealthyrecipes.com/wp-content/uploads/2023/06/brown-rice-dosa-recipe.jpg',
                    price: 80,
                    title:'Plain Dosa',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:4,
                    image:'https://s3-ap-south-1.amazonaws.com/nestle-fitterfly-assets/entity_images/images/000/011/091/original/19534_Podi_Masala_Crispy_Dosa.webp?1658240239',
                    price: 80,
                    title:'Podi',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:5,
                    image:'https://vismaifood.com/storage/app/uploads/public/8b4/19e/427/thumb__1200_0_0_0_auto.jpg',
                    price: 80,
                    title:'Masala Dosa',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:6,
                    image:'https://images.aws.nestle.recipes/resized/ba32df908435796279e3d79f0d5fbdc1_Rava_Upma_-_Twist_944_531.jpg',
                    price: 70,
                    title:'Upma',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:6,
                    image:'https://www.masalakorb.com/wp-content/uploads/2016/01/How-to-make-Puffy-Poori-FI.jpg',
                    price: 80,
                    title:'Poori Bajji',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:7,
                    image:'https://www.viniscookbook.com/wp-content/uploads/2018/09/20180924_224755.jpg',
                    price: 70,
                    title:'Paratha Paneer',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:8,
                    image:'https://sinfullyspicy.com/wp-content/uploads/2023/02/1200-by-1200-images.jpg',
                    price: 70,
                    title:'Paratha Aloo',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:9,
                    image:'https://media.healthyfood.com/wp-content/uploads/2018/02/Basic-omelette-1024x656.jpg',
                    price: 80,
                    title:'Omelette Plain',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'nonveg',
                },
                {
                    id:10,
                    image:'https://www.indianhealthyrecipes.com/wp-content/uploads/2021/06/cheese-omelette-mozarella-omelette.jpg',
                    price: 80,
                    title:'Omelette chees',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'nonveg',
                },
                {
                    id:11,
                    image:'https://realfood.tesco.com/media/images/Masala-Omelette-h-2e42fca1-2230-48f7-ba0c-7d1608e17cb0-0-472x310.jpg',
                    price: 80,
                    title:'Omelette Masala',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'nonveg',
                },
                {
                    id:12,
                    image:'https://i.ytimg.com/vi/yLOls3nW2Rg/sddefault.jpg',
                    price: 80,
                    title:'Fried Eggs',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'nonveg',
                },
                {
                    id:13,
                    image:'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjXUU8NBZ3fBQXnZg2ac9Rkqal8LoN_jiSVQ_gHtuMhmfLm8tM6zqe__1C06H17k6Rcpr7ZNNbYFSKyRBnPSyHZV23VYe5VPbtZqvw54P6CcmZeLxRe_0o266iqlZHpmZ1jku-4FUXeR50/s1600/Rava+Kesari+Recipe.JPG',
                    price: 60,
                    title:'Rava kesari',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:14,
                    image:'https://i.ytimg.com/vi/oj3nYERAX-0/maxresdefault.jpg',
                    price: 50,
                    title:'Rava kesari',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:15,
                    image:'https://www.sap.je/wp-content/uploads/2021/01/troebele-appelsap-scaled.jpg',
                    price: 50,
                    title:'Canned Apple Juices',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:16,
                    image:'https://watermark.lovepik.com/photo/20211209/large/lovepik-shooting-pineapple-juice-and-pineapple-picture_501723863.jpg',
                    price: 50,
                    title:'Canned pineaple Juices',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:17,
                    image:'https://5.imimg.com/data5/GG/US/MY-4580347/juice-orange-juice-500x500.jpg',
                    price: 50,
                    title:'Orange Canned juices',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:18,
                    image:'https://web.goodhealthcontent.com/mediaRouter/image/1453/accessKey/655/PfXDUgDKNju8eVbw/57up8C4UEkojMXMN/format/webp/cropType/3',
                    price: 60,
                    title:'venilla milk shakes',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:20,
                    image:'https://recipefairy.com/wp-content/uploads/2019/12/chocolate-milkshake-with-icecream-scaled.jpg',
                    price: 60,
                    title:'Chocolate milk shakes',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:21,
                    image:'https://recipes.wellcurve.in/wp-content/uploads/2022/03/Masala-Tea.jpg',
                    price: 40,
                    title:'Masala tea',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:22,
                    image:'https://i.insider.com/5f88a9c9d260780019341b02?width=1200&format=jpeg',
                    price: 40,
                    title:'Green tea',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:23,
                    image:'https://img.freepik.com/premium-photo/south-indian-filter-coffee-served-traditional-brass-stainless-steel-cup_1093310-1358.jpg',
                    price: 40,
                    title:'Filter Coffee',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                {
                    id:24,
                    image:'https://lorcoffee.com/cdn/shop/articles/Dark-Chocolate-Ice-Coffee-with-Provocateur-exc.jpg?v=1675806078',
                    price: 40,
                    title:'Cold coffee',
                    caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                    veg:'veg',
                },
                ]
        }
       ]
    },
    {
        image:'https://i.pinimg.com/736x/c4/af/6c/c4af6cf86577cdc33dd7566e46483341.jpg',
        title:'Lunch',
        time:'1:30PM - 03:30PM',
        all:[
            {
                title:'soup',
                foods:[
                    {
                        id:1,
                        image:'https://th.bing.com/th/id/OIP.exd97pKARJQO4MqqSJD1JgHaHa?w=768&h=768&rs=1&pid=ImgDetMain',
                        price: 70,
                        title:'Pepper Rasam ',
                        caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                        veg:'veg',
                    },
                    {
                        id:2,
                        image:'https://th.bing.com/th/id/OIP.BVqBj3HCKkv19CScEEReoAAAAA?rs=1&pid=ImgDetMain',
                        price: 70,
                        title:'Sweet Corn Soup ',
                        caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                        veg:'veg',
                    },
                    {
                        id:3,
                        image:'https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2015/05/07/15018/8ac1c183-cb8d-4048-886d-43506c6f772d-01.jpg?width=690&height=574&mode=crop&quality=75',
                        price: 90,
                        title:'Sweet Corn Soup',
                        caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                        veg:'nonveg',
                    },
                    {
                        id:4,
                        image:'https://www.munatycooking.com/wp-content/uploads/2023/01/Hot-and-sour-soup-feature-image-500x500.jpg',
                        price: 70,
                        title:'Hot & Sour Soup',
                        caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                        veg:'veg',
                    },
                    {
                        id:5,
                        image:'https://th.bing.com/th/id/OIP.ZkMQoYoEYm1nskCXlahSEgAAAA?rs=1&pid=ImgDetMain',
                        price: 90,
                        title:'Hot & Sour Soup',
                        caption:'Steamed Rice Cakes accompanied with sambar and coconut chutney',
                        veg:'nonveg',
                    },
                    
                ]
    
            }
           ]
    },
    {
        image:'https://www.vikhrolicucina.com/uploads/stories/1674223639_samosasingaraindianfriedbakedpastrywithsavoryfillingspicedpotatoesonionpeas.jpg',
        title:'Snacks',
        time:'4:30PM - 07:30PM',
        foods:[
            {
                image:'',
                price: 1,
                title:'',
                caption:''
            }
        ]
    },
    {
        image:'https://www.acouplecooks.com/wp-content/uploads/2023/01/Vegan-Stir-Fry-006.jpg',
        title:'Dinner',
        time:'7:30PM - 10:30PM',
        foods:[
            {
                image:'',
                price: 1,
                title:'',
                caption:''
            }
        ]
    }
]
export default menu;