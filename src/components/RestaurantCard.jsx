import { RESTAURANT_CDN_URL } from '../utils/constants';

export default RestaurantCard = (props) => {
    const {
        name,
        avgRatingString,
        cloudinaryImageId,
        costForTwo,
        cuisines,
        areaName,
    } = props.resData?.info;
    return (
        <div className="res-card">
            <div className="res-logo-container">
                <img
                    className="res-logo"
                    src={RESTAURANT_CDN_URL + cloudinaryImageId}
                    alt="res-logo"
                />
                <div className="res-cost">{costForTwo}</div>
            </div>
            <div style={{ padding: '5px' }}>
                <div
                    style={{
                        fontSize: '18px',
                        fontWeight: '700',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                    }}
                >
                    {name}
                </div>
                <div>
                    <span>{avgRatingString} starts - </span>
                    <span>38 minutes</span>
                </div>
                <div
                    style={{
                        fontSize: '18px',
                        fontWeight: '300',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'grey',
                    }}
                >
                    {cuisines.join(',')}
                </div>
                <div
                    style={{
                        fontSize: '18px',
                        fontWeight: '300',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        color: 'grey',
                    }}
                >
                    {areaName}
                </div>
            </div>
        </div>
    );
};
