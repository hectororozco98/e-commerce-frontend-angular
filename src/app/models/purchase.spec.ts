import { User } from './user';
import { Product } from 'src/app/models/product';
import { Purchase } from './purchase';

describe('Purchase', () => {
    it('should create a new Purchase', () => {
        let product = new Product(10, 'p1', 5, 'p1', 15, ''),
            user = new User("email", "fName", "lName", "pwd", "role", [], [], []),
            purchase = new Purchase(1, "order1", product, user);
        expect(purchase).toBeTruthy();

        expect(purchase.id).toEqual(1);
        expect(purchase.orderPlaced).toEqual("order1");
        expect(purchase.ownerUser).toEqual(user);
        expect(purchase.product).toEqual(product);


    });
});
