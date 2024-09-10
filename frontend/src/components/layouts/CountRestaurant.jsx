import React, { useEffect } from "react";
import { getRestaurants } from "../../actions/restaurantAction";
import { useDispatch, useSelector } from "react-redux";

export default function CountRestaurant() {
    const dispatch = useDispatch();
    const { loading, error, count, showVegOnly, PureVegResturantsCount } = useSelector((state) => state.restaurants);

    useEffect(() => {
        dispatch(getRestaurants());

    }, [dispatch]);
    return (
        <div>
            {loading ?
                (<p> Loading Restaurant count...</p>
                ) : error ? (
                    <p>Error: {error}</p>
                ) : (<p className="NumOfRestro">
                    {showVegOnly ? PureVegResturantsCount : count}{" "}
                    <span className="Restro">
                        {showVegOnly
                            ? PureVegResturantsCount === 1
                                ? "Restaurant"
                                : "Restaurants"
                            : count === 1
                                ? "Restaurant"
                                : "Restaurants"}
                    </span>
                </p>
                )}
            <hr />
        </div>
    );
}
