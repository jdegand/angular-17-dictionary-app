
// Unit tests for: routes


import { routes } from '../app.routes';


// src/app/app.routes.spec.ts
describe('routes() routes method', () => {
    describe('Happy paths', () => {
        it('should have a route for "details" path', () => {
            // This test checks if the "details" path is correctly defined in the routes array.
            const detailsRoute = routes.find(route => route.path === 'details');
            expect(detailsRoute).toBeDefined();
        });

        it('should load the WordDetailsComponent for "details" path', async () => {
            // This test ensures that the "details" path correctly loads the WordDetailsComponent.
            const detailsRoute = routes.find(route => route.path === 'details');
            expect(detailsRoute).toBeDefined();

            if (detailsRoute && detailsRoute.loadComponent) {
                const component = await detailsRoute.loadComponent() as any;  // Using Promise<any> causes errors 
                expect(component).toBeDefined();
                expect(component.name).toBe('WordDetailsComponent');
            }
        });
    });

    describe('Edge cases', () => {
        it('should not have any undefined paths', () => {
            // This test checks that there are no undefined paths in the routes array.
            routes.forEach(route => {
                expect(route.path).toBeDefined();
            });
        });

        it('should not have any undefined loadComponent functions', () => {
            // This test ensures that all routes have a defined loadComponent function.
            routes.forEach(route => {
                expect(route.loadComponent).toBeDefined();
            });
        });

        it('should handle non-existent paths gracefully', () => {
            // This test checks that searching for a non-existent path returns undefined.
            const nonExistentRoute = routes.find(route => route.path === 'non-existent');
            expect(nonExistentRoute).toBeUndefined();
        });
    });
});

// End of unit tests for: routes
