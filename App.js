import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import logo from './logo.png';

/**
 * Header
 *  - Logo
 *  - Links
 * Body
 *  - Search
 *  - RestaurantContainer
 *      - RestaurantCard
 *              - Img
 *              - Name of res, star rating, cuisine, delivery time
 *  Footer
 *      - Copyright
 *      - Links
 *      -Address
 *      -Contact
 */

const resData = [
    {
        info: {
            id: '87606',
            name: 'Ratna Bawarchi',
            cloudinaryImageId: 'bca91630d2a7a8de34fe13dbd12141ae',
            locality: 'Vijaya Nagar Colony',
            areaName: 'Kukatpally',
            costForTwo: '₹400 for two',
            cuisines: ['Biryani', 'Hyderabadi'],
            avgRating: 3.6,
            parentId: '167535',
            avgRatingString: '3.6',
            totalRatingsString: '1K+',
            sla: {
                deliveryTime: 33,
                lastMileTravel: 6.8,
                serviceability: 'SERVICEABLE',
                slaString: '30-35 mins',
                lastMileTravelString: '6.8 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 03:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/ratna-bawarchi-vijaya-nagar-colony-kukatpally-hyderabad-87606',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '774380',
            name: "Domino's Pizza",
            cloudinaryImageId: '00e832d266e5733807cfb925ff3f9e90',
            locality: 'RAGHAVENDRA COLONY',
            areaName: 'Suchitra',
            costForTwo: '₹400 for two',
            cuisines: ['Pizzas', 'Italian', 'Pastas', 'Desserts'],
            avgRating: 4.1,
            parentId: '2456',
            avgRatingString: '4.1',
            totalRatingsString: '100+',
            sla: {
                deliveryTime: 30,
                serviceability: 'SERVICEABLE',
                slaString: '30 mins',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 02:59:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            isNewlyOnboarded: true,
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/dominos-pizza-raghavendra-colony-suchitra-hyderabad-774380',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '316782',
            name: 'Hotel Sankar vilas',
            cloudinaryImageId: 'fyp5cfxspblejs9wmihq',
            locality: 'Jal Vayu Vihar',
            areaName: 'Kukatpally',
            costForTwo: '₹100 for two',
            cuisines: ['South Indian', 'Chinese'],
            avgRating: 3.7,
            parentId: '101952',
            avgRatingString: '3.7',
            totalRatingsString: '1K+',
            sla: {
                deliveryTime: 48,
                lastMileTravel: 8.7,
                serviceability: 'SERVICEABLE',
                slaString: '45-50 mins',
                lastMileTravelString: '8.7 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 04:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/hotel-sankar-vilas-jal-vayu-vihar-kukatpally-hyderabad-316782',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '682405',
            name: 'Swadh Military Hotel',
            cloudinaryImageId: '09eb644a74926fe52eed2581a0aae79d',
            locality: 'Samatha Nagar',
            areaName: 'Nizampet & Pragathi Nagar',
            costForTwo: '₹300 for two',
            cuisines: ['Chinese', 'Biryani', 'Snacks'],
            avgRating: 3.7,
            parentId: '407311',
            avgRatingString: '3.7',
            totalRatingsString: '500+',
            sla: {
                deliveryTime: 45,
                lastMileTravel: 9,
                serviceability: 'SERVICEABLE',
                slaString: '40-45 mins',
                lastMileTravelString: '9.0 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 04:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/swadh-military-hotel-samatha-nagar-nizampet-and-pragathi-nagar-hyderabad-682405',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '597101',
            name: 'Aha Vantillu',
            cloudinaryImageId: 'f4tcryyd8vulwmrf3cja',
            locality: 'Samatha Nagar',
            areaName: 'Kukatpally',
            costForTwo: '₹300 for two',
            cuisines: ['Chinese', 'Indian', 'Biryani'],
            avgRating: 3.6,
            parentId: '357003',
            avgRatingString: '3.6',
            totalRatingsString: '500+',
            sla: {
                deliveryTime: 45,
                lastMileTravel: 9,
                serviceability: 'SERVICEABLE',
                slaString: '45-50 mins',
                lastMileTravelString: '9.0 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 04:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/aha-vantillu-samatha-nagar-kukatpally-hyderabad-597101',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '324746',
            name: 'Lucky Restaurant',
            cloudinaryImageId: 'zem6um6vxgkbd0q0vs06',
            locality: 'Jagathgirigutta',
            areaName: 'Devamma Basti',
            costForTwo: '₹400 for two',
            cuisines: ['Indian'],
            avgRating: 2.6,
            parentId: '293683',
            avgRatingString: '2.6',
            totalRatingsString: '1K+',
            sla: {
                deliveryTime: 31,
                lastMileTravel: 6.2,
                serviceability: 'SERVICEABLE',
                slaString: '30-35 mins',
                lastMileTravelString: '6.2 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 08:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/lucky-restaurant-jagathgirigutta-devamma-basti-hyderabad-324746',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '583881',
            name: 'Maggiz & More',
            cloudinaryImageId: 'clfa4a3nodnmv15aebxh',
            locality: 'Hydernagarnizampet',
            areaName: 'Kukatpally',
            costForTwo: '₹200 for two',
            cuisines: ['Snacks', 'Fast Food', 'Beverages'],
            avgRating: 4.1,
            parentId: '19568',
            avgRatingString: '4.1',
            totalRatingsString: '500+',
            sla: {
                deliveryTime: 48,
                lastMileTravel: 9.3,
                serviceability: 'SERVICEABLE',
                slaString: '45-50 mins',
                lastMileTravelString: '9.3 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 06:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/maggiz-and-more-hydernagarnizampet-kukatpally-hyderabad-583881',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '584599',
            name: 'Biryani Spice',
            cloudinaryImageId: 'pgyfzyknw9xsgyhdak30',
            locality: 'Samatha Nagar',
            areaName: 'Nizampet & Pragathi Nagar',
            costForTwo: '₹300 for two',
            cuisines: ['Biryani', 'Chinese'],
            avgRating: 3.7,
            parentId: '46975',
            avgRatingString: '3.7',
            totalRatingsString: '1K+',
            sla: {
                deliveryTime: 43,
                lastMileTravel: 9,
                serviceability: 'SERVICEABLE',
                slaString: '40-45 mins',
                lastMileTravelString: '9.0 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 04:00:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/biryani-spice-samatha-nagar-nizampet-and-pragathi-nagar-hyderabad-584599',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
    {
        info: {
            id: '503883',
            name: 'Tasty Shawarmas',
            cloudinaryImageId: 'iheys7uzirstowgfdahx',
            locality: 'K P H B Phase 1',
            areaName: 'Kukatpally',
            costForTwo: '₹350 for two',
            cuisines: ['Arabian', 'Lebanese', 'Biryani', 'Beverages'],
            avgRating: 4.1,
            parentId: '419439',
            avgRatingString: '4.1',
            totalRatingsString: '100+',
            sla: {
                deliveryTime: 44,
                lastMileTravel: 9.7,
                serviceability: 'SERVICEABLE',
                slaString: '40-45 mins',
                lastMileTravelString: '9.7 km',
                iconType: 'ICON_TYPE_EMPTY',
            },
            availability: {
                nextCloseTime: '2024-01-13 09:59:00',
                opened: true,
            },
            badges: {},
            isOpen: true,
            type: 'F',
            badgesV2: {
                entityBadges: {
                    imageBased: {},
                    textBased: {},
                    textExtendedBadges: {},
                },
            },
            aggregatedDiscountInfoV3: {
                header: '₹120 OFF',
                subHeader: 'ABOVE ₹199',
                discountTag: 'FLAT DEAL',
            },
            orderabilityCommunication: {
                title: {},
                subTitle: {},
                message: {},
                customIcon: {},
            },
            differentiatedUi: {
                displayType: 'ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT',
                differentiatedUiMediaDetails: {
                    mediaType: 'ADS_MEDIA_ENUM_IMAGE',
                    lottie: {},
                    video: {},
                },
            },
            reviewsSummary: {},
            displayType: 'RESTAURANT_DISPLAY_TYPE_DEFAULT',
            restaurantOfferPresentationInfo: {},
        },
        analytics: {
            context: 'seo-data-1308fc41-964e-4d1e-ad07-919fe737c283',
        },
        cta: {
            link: 'https://www.swiggy.com/restaurants/tasty-shawarmas-k-p-h-b-phase-1-kukatpally-hyderabad-503883',
            text: 'RESTAURANT_MENU',
            type: 'WEBLINK',
        },
        widgetId: 'collectionV5RestaurantListWidget_SimRestoRelevance_food_seo',
    },
];
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logo} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
};
const RestaurantCard = (props) => {
    const { name, avgRatingString, cloudinaryImageId, costForTwo, cuisines } =
        props.resData?.info;
    return (
        <div className="res-card">
            <div className='res-logo-container'>
            <img
                className="res-logo"
                src={
                    'https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/' +
                    cloudinaryImageId
                }
                alt="res-logo"
                />
                <div className='res-cost'>{costForTwo}</div>
                </div>
            <h3>{name}</h3>
            <h4>{cuisines.join(',')}</h4>
            <h4>{avgRatingString} starts</h4>
            <h4>38 minutes</h4>
            <h4>{costForTwo}</h4>
        </div>
    );
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resData.map((data) => (
                    <RestaurantCard resData={data} key={ data.info.id} />
                ))}
            </div>
        </div>
    );
};

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppLayout />);
