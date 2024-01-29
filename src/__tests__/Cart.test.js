import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../components/RestaurantMenu';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});
it('should load restaurant menu component', async () => {
    await act(async () => {
        render(
            <BrowserRouter>
                <RestaurantMenu />
            </BrowserRouter>
        );
    });
});
