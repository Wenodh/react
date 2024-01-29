import { render, screen } from '@testing-library/react';
import MOCK_DATA from '../mocks/resCardMock.json';
import '@testing-library/jest-dom';
import RestaurantCard, {
    withPromotedLabel,
} from '../components/RestaurantCard';

it('should render RestaurantCard component with props', () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const name = screen.getByText('Faasos - Wraps, Rolls & Shawarma');
    expect(name).toBeInTheDocument();
});

it('should render RestaurantCard component with Promoted Label', () => {
    const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
    render(<RestaurantCardPromoted resData={MOCK_DATA} />);
    const Promoted = screen.getByText('Promoted');
    expect(Promoted).toBeInTheDocument();
});
