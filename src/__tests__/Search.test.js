import { fireEvent, render, screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/resListData.json';
import '@testing-library/jest-dom';
import RestaurantCard, {
    withPromotedLabel,
} from '../components/RestaurantCard';
import Body from '../components/Body';
import { act } from 'react-dom/test-utils';
import { BrowserRouter } from 'react-router-dom';
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});
jest.mock('../utils/useRestaurantsData.js');

it('should search res list for burger text input', async () => {
    require('../utils/useRestaurantsData.js').default.mockReturnValue({
        listOfResData: MOCK_DATA.data?.cards.find(
            (it) =>
                it?.card?.card?.gridElements?.infoWithStyle?.restaurants
                    ?.length >= 0
        ).card?.card?.gridElements?.infoWithStyle?.restaurants,
        loading: false,
        error: false,
    });
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const searchBtn = screen.getByRole('button', { name: 'Search' });
    const searchInput = screen.getByTestId('searchInput');
    fireEvent.change(searchInput, { target: { value: 'burger' } });
    fireEvent.click(searchBtn);
    // Screen should load 4 cards
    const cards = screen.getAllByTestId('resCard');
    expect(cards.length).toBe(2);
});

it('should filter top rated restaurant', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        );
    });
    const cardBeforeFilter = screen.getAllByTestId('resCard');
    expect(cardBeforeFilter.length).toBe(20);
    const topRatedBtn = screen.getByRole('button', {
        name: 'Top Rated Restaurants',
    });
    fireEvent.click(topRatedBtn);

    const cards = screen.getAllByTestId('resCard');
    expect(cards.length).toBe(3);
});
