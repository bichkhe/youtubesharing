

import { fireEvent, render, screen } from '@test-utils';
import { VideoCard } from './VideoCard';
import { BrowserRouter } from 'react-router-dom';


const mockUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom') as any,
    useNavigate: () => mockUsedNavigate,
}));
describe('Logo component', () => {
    it('should show succesffully all information: title, content, email', () => {
        const video = {
            "id": 7,
            "createdAt": "2023-10-04T15:23:09.398Z",
            "linkUrl": "https://www.youtube.com/embed/uexouAOMuHM?si=4P3XeZ7glgnbVQ7W",
            "updatedAt": "2023-10-05T13:43:06.467Z",
            "title": "Mua và bán bitcoin bằng các loại thẻ quà tặng",
            "content": "Mua và bán bitcoin bằng các loại thẻ quà tặng chi tiết",
            "published": true,
            "viewCount": 0,
            "authorId": 1,
            "email": "mr.bichkhe@gmail.com",
            "votedUp": 0,
            "votedDown": 2
        };

        render(<BrowserRouter>
            <VideoCard video={video} />
        </BrowserRouter>);
        expect(screen.getByText("Mua và bán bitcoin bằng các loại thẻ quà tặng")).toBeInTheDocument();
    });
});

describe('Logo component', () => {
    it('should show vote icon of user', () => {
        const video = {
            "id": 7,
            "createdAt": "2023-10-04T15:23:09.398Z",
            "linkUrl": "https://www.youtube.com/embed/uexouAOMuHM?si=4P3XeZ7glgnbVQ7W",
            "updatedAt": "2023-10-05T13:43:06.467Z",
            "title": "Ale ale ale",
            "content": "Mua và bán bitcoin bằng các loại thẻ quà tặng",
            "published": true,
            "viewCount": 0,
            "authorId": 1,
            "email": "mr.bichkhe@gmail.com",
            "votedUp": 0,
            "votedDown": 2,
            "voted": "UP",
        };
        render(<BrowserRouter>
            <VideoCard video={video} />
        </BrowserRouter>);
        expect(screen.getByText("You voted")).toBeInTheDocument();
        // expect(screen.findByText("You voted")).toBeInTheDocument();
    });
});

describe('Logo component', () => {
    it('should not show vote icon of user ', () => {
        const video = {
            "id": 7,
            "createdAt": "2023-10-04T15:23:09.398Z",
            "linkUrl": "https://www.youtube.com/embed/uexouAOMuHM?si=4P3XeZ7glgnbVQ7W",
            "updatedAt": "2023-10-05T13:43:06.467Z",
            "title": "Ale ale ale",
            "content": "Mua và bán bitcoin bằng các loại thẻ quà tặng",
            "published": true,
            "viewCount": 0,
            "authorId": 1,
            "email": "mr.bichkhe@gmail.com",
            "votedUp": 0,
            "votedDown": 2,
        };
        render(<VideoCard video={video} />);
        expect(screen.getByText("You voted")).toBeInvalid()
    });
});

describe('Logo component', () => {
    it('should call API when click icon vote up/down ', () => {
        const video = {
            "id": 7,
            "createdAt": "2023-10-04T15:23:09.398Z",
            "linkUrl": "https://www.youtube.com/embed/uexouAOMuHM?si=4P3XeZ7glgnbVQ7W",
            "updatedAt": "2023-10-05T13:43:06.467Z",
            "title": "Ale ale ale",
            "content": "Mua và bán bitcoin bằng các loại thẻ quà tặng",
            "published": true,
            "viewCount": 0,
            "authorId": 1,
            "email": "mr.bichkhe@gmail.com",
            "votedUp": 0,
            "votedDown": 2,
        };
        render(<BrowserRouter>
            <VideoCard video={video} />
        </BrowserRouter>);
    });
});






