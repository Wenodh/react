import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import RestaurantMenu from '../components/RestaurantMenu';
import { BrowserRouter } from 'react-router-dom';
import MOCK_DATA from '../mocks/resMenu.json';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});
jest.mock('../utils/useRestaurantMenu.js');
it('should load restaurant menu component', async () => {
    require('../utils/useRestaurantMenu.js').default.mockReturnValue(
        MOCK_DATA.data.cards
    );
    await act(async () => {
        render(
            <Provider store={appStore}>
                <BrowserRouter>
                    <RestaurantMenu />
                </BrowserRouter>
            </Provider>
        );
    });

    await waitFor(() => {
        const accordionHeader = screen.getByText('Pita Pocket Sandwiches (6)')
        expect(
            accordionHeader
        ).toBeInTheDocument();
        // fireEvent.click(accordionHeader)
        // console.log(accordionHeader, screen.getAllByTestId("foodItem"))
        // expect(screen.getAllByTestId("foodItem").length).toBe(6)
        // const addBtn = screen.getAllByRole("button", { name: "Add" })
        // fireEvent.click(addBtn[0])

    });
});
