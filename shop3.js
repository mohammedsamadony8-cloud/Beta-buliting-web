    const { createApp } = Vue;
    createApp({
      data() {
        return {
          showPage: 'products',
          products: [
            { id: 1, title: "Fjallraven Backpack", description: "Stylish backpack", price: 109.95, image: "./imges/تنزيل (1).jpeg", stock: 12 },
            { id: 2, title: "Mens Casual Premium Jacket", description: "Comfortable cotton jacket", price: 55.99, image: "./imges/تنزيل (2).jpeg", stock: 13 },
            { id: 3, title: "Mens Cotton T-Shirt", description: "Soft and lightweight", price: 22.3, image: "./imges/تنزيل.jpeg", stock: 8 },
            { id: 4, title: "Mens Casual Slim Fit", description: "Perfect fit for any event", price: 15.99, image: "./imges/تنزيل (7).jpeg", stock: 6 },
            { id: 5, title: "Solid Gold Petite Micropave", description: "Luxury gold ring", price: 168, image: "./imges/تنزيل (5).jpeg", stock: 15 },
            { id: 6, title: "White Gold Plated Princess", description: "Elegant women jewelry", price: 9.99, image: "./imges/تنزيل (6).jpeg", stock: 7 },
            { id: 7, title: "WD 2TB Hard Drive", description: "Reliable and fast storage", price: 64, image: "./imges/تنزيل (4).jpeg", stock: 19 },
            { id: 8, title: "SanDisk SSD PLUS 1TB", description: "Super fast SSD drive", price: 109, image: "./imges/تنزيل.png", stock: 14 },
             { id: 9, title:"Smart Headphones",name: 'Headphones', description: 'High quality sound', price: 59.99, image:"./imgs/12.jpg" , stock:10 },
            { id: 10, title:"Expensive Watch",name: 'Smart Watch', description: 'Track your health', price: 99.99, image: "./imgs/11.jpg", stock:15 },
            { id: 11, title:"Keyboard RGB Gaming",name: 'Keyboard', description: 'RGB mechanical keyboard', price: 79.99, image: "./imgs/6.jpg", stock:20 },
            { id: 12, title:"Mouse RGB Wirless mouse",name: 'Mouse', description: 'Ergonomic wireless mouse', price: 49.99, image: "./imgs/webApp.png", stock:9 },
          ],
          cart: []
        };
      },
      computed: {
        totalPrice() {
          return this.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
        }
      },
      methods: {
        addToCart(product) {
          if (product.stock > 0) {
            const found = this.cart.find(p => p.id === product.id);
            if (found) {
              found.qty++;
            } else {
              this.cart.push({ ...product, qty: 1 });
            }
            product.stock--;
          } else {
            alert("Out of stock");
          }
        },
        removeFromCart(item) {
          const product = this.products.find(p => p.id === item.id);
          if (product) product.stock += item.qty;
          this.cart = this.cart.filter(p => p.id !== item.id);
        },
        increaseQty(item) {
          const product = this.products.find(p => p.id === item.id);
          if (product && product.stock > 0) {
            item.qty++;
            product.stock--;
          }
        },
        decreaseQty(item) {
          const product = this.products.find(p => p.id === item.id);
          if (!product) return;
          if (item.qty > 1) {
            item.qty--;
            product.stock++;
          } else {
            this.removeFromCart(item);
          }
        }
      }
    }).mount("#app");