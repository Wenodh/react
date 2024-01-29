import { fireEvent, render } from '@testing-library/react';
import Header from '../components/Header';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
it('should load Header component with a login button', () => {
    render(
        <BrowserRouter>
            <Provider stor={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginButton = screen.getByRole("button")
    expect(loginButton).toBeInTheDocument()
});

it('should load Header component with a Cart item', () => {
    render(
        <BrowserRouter>
            <Provider stor={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const Cart = screen.getByText(/Cart/)
    expect(Cart).toBeInTheDocument()
});

it('should Change login to logout on click', () => {
    render(
        <BrowserRouter>
            <Provider stor={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    );

    const loginBtn = screen.getByRole("button", { name: "login" })
    fireEvent.click(loginBtn)
    const logoutBtn = screen.getByRole("button", { name: "logout" })
    expect(logoutBtn).toBeInTheDocument()
});