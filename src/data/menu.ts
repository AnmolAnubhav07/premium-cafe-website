export interface MenuItem {
  id: number;
  name: string;
  category: string;
  price: number;
  image: string;
  description: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Espresso",
    category: "Coffee",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1510707577719-a56ae12485e5?w=400&h=400&fit=crop",
    description: "Rich, bold, and intense single shot"
  },
  {
    id: 2,
    name: "Cappuccino",
    category: "Coffee",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1572442388796-11668e64e61c?w=400&h=400&fit=crop",
    description: "Espresso with steamed milk and foam"
  },
  {
    id: 3,
    name: "Latte",
    category: "Coffee",
    price: 5.49,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=400&h=400&fit=crop",
    description: "Smooth espresso with lots of steamed milk"
  },
  {
    id: 4,
    name: "Mocha",
    category: "Coffee",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=400&fit=crop",
    description: "Espresso with rich chocolate and steamed milk"
  },
  {
    id: 5,
    name: "Americano",
    category: "Coffee",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
    description: "Espresso with hot water for a classic taste"
  },
  {
    id: 6,
    name: "Green Tea",
    category: "Tea",
    price: 3.49,
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&h=400&fit=crop",
    description: "Fresh and healthy green tea leaves"
  },
  {
    id: 7,
    name: "Chamomile",
    category: "Tea",
    price: 3.29,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&h=400&fit=crop",
    description: "Calming herbal tea with floral notes"
  },
  {
    id: 8,
    name: "Earl Grey",
    category: "Tea",
    price: 3.79,
    image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&h=400&fit=crop",
    description: "Black tea with bergamot essence"
  },
  {
    id: 9,
    name: "Pancakes",
    category: "Breakfast",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=400&h=400&fit=crop",
    description: "Fluffy pancakes with maple syrup"
  },
  {
    id: 10,
    name: "Avocado Toast",
    category: "Breakfast",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&h=400&fit=crop",
    description: "Fresh avocado on sourdough with poached egg"
  },
  {
    id: 11,
    name: "Croissant",
    category: "Breakfast",
    price: 4.49,
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=400&fit=crop",
    description: "Buttery, flaky French croissant"
  },
  {
    id: 12,
    name: "Club Sandwich",
    category: "Lunch",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&h=400&fit=crop",
    description: "Triple-decker with turkey, bacon, lettuce"
  },
  {
    id: 13,
    name: "Caesar Salad",
    category: "Lunch",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=400&fit=crop",
    description: "Crisp romaine, parmesan, croutons"
  },
  {
    id: 14,
    name: "Margherita Pizza",
    category: "Lunch",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=400&fit=crop",
    description: "Fresh mozzarella, tomatoes, basil"
  },
  {
    id: 15,
    name: "Chocolate Cake",
    category: "Desserts",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=400&fit=crop",
    description: "Rich Belgian chocolate cake"
  },
  {
    id: 16,
    name: "Cheesecake",
    category: "Desserts",
    price: 7.49,
    image: "https://images.unsplash.com/photo-1533134242443-d4fd21131143?w=400&h=400&fit=crop",
    description: "Creamy New York style cheesecake"
  },
  {
    id: 17,
    name: "Tiramisu",
    category: "Desserts",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=400&h=400&fit=crop",
    description: "Classic Italian coffee-soaked dessert"
  }
];

export const categories = ["All", "Coffee", "Tea", "Breakfast", "Lunch", "Desserts"];
