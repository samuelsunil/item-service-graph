import { http, HttpResponse } from 'msw';

export const handlers = [
    http.get('/items', (req) => {
        return HttpResponse.json([
            { id: '1', name: 'Mocked Item 1', description: 'Mocked Description for Item 1' },
            { id: '2', name: 'Mocked Item 2', description: 'Mocked Description for Item 2' },
        ])
    }
    )
];
