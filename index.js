const products = [
  { name: "iPhone", price: 1000 },
  { name: "Samsung", price: 800 },
  { name: "Xiaomi", price: 400 },
];

const summa = products.map((a) => 
  `${a.name} - ${a.price}`
)

// console.log(summa);

// const result = products.filter((a) => 
//   a.price > 500
// );

// console.log(result);

const total = products.reduce((acc, a) => {
  return acc + a.price
}, 0);

console.log(total);



import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>{count}</h2>

      <button onClick={() => {
        setCount((prev) => prev + 1);
      }}>
        +1
      </button>

      <button onClick={() => {
        setCount((prev) => prev - 1);
      }}>
        -1
      </button>

      <button onClick={() => {
        setCount((prev) => prev + 5);
      }}>
        +5
      </button>

      <button onClick={() => {
        setCount(0);
      }}>
        Reset
      </button>
    </div>
  );
}

const product = {
  id: 10,
  name: "MacBook Pro",
  price: 2500,
  brand: "Apple"
};

const {name, price, brand} = product

console.log(name);
console.log(price);
console.log(brand);

const user = {
  id: 1,
  name: "Ali",
  address: {
    city: "Tashkent",
    country: "Uzbekistan"
  }
};

const { name,
  address: {
    city, country
  }
} = user;

// const {name} = user

// const {city, country} = user.address 

console.log(name);    // Ali
console.log(city);    // Tashkent
console.log(country); // Uzbekistan


const product = {
  name: "iPhone",
  price: 1000,
  stock: 10
};

const updatedProduct = {
  ...product,
  price: 1200,
};

console.log(updatedProduct);

const products = [
  "iPhone",
  "Samsung"
];

const updatedProducts = [
  ...products,
  "Xiaomi"
];

console.log(updatedProducts);


function Products() {
  const [products, setProducts] = useState([
    "iPhone",
    "Samsung"
  ]);

  return (
    <div>
      <button onClick={() => {
        setProducts((prev) => [
          ...prev, "Xiaomi"
        ])
      }}>
        Add Xiaomi
      </button>

      {products.map((product) => (
        <div>{product}</div>
      ))}
    </div>
  );
}

const [products, setProducts] = useState([
  "iPhone",
  "Samsung",
  "Xiaomi"
]);

<button onClick={() => {
  setProducts((prev) =>
    prev.filter((product) => product !== "Xiaomi")
  );
}}>
  Remove Xiaomi
</button>

const products = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "Samsung", price: 800 },
  { id: 3, name: "Xiaomi", price: 400 }
];

const updatedProducts = products.map((item) => {
  if (item.id === 2) {
    return {
      ...item,
      price: 900
    };
  }

  return item;
})

console.log(updatedProducts);
console.log(products);



const [products, setProducts] = useState([
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "Samsung", price: 800 },
  { id: 3, name: "Xiaomi", price: 400 }
]);


<button onClick={() => {
  setProducts((prev) =>
    prev.map((product) => {
      if (product.id === 2) {
        return {
          ...product, 
          price = 900
        }
      }
      return product
    })
  );
}}>
  Update Samsung
</button>

const tel = [
    { id: 1, name: "iPhone", price: 1000 },
    { id: 2, name: "Samsung", price: 900 },
    { id: 3, name: "Xiaomi", price: 400 }
  ]


const updatedProduct = tel.map((tel) =>{
  if (tel.id === 3){
    return {
      ...tel,
      price: 500,
    }
  }

  return tel;
})

console.log(updatedProduct)


const users = [
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Vali", active: true },
  { id: 3, name: "Sardor", active: true }
];

const updateUsers = users.map((user) => {
  if (user.id === 2){
    return {
      ...user,
      active: false
    }
  }

  return user;
})

console.log(updateUsers);


const price = 1200;

const result = price > 1000 ? "Expensive" : "Cheap"

console.log(result);


const products = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "Samsung", price: 800 },
  { id: 3, name: "Xiaomi", price: 400 }
];


const updatedProducts = products.map((product) => {
  return product.id === 1 
  ? {...product, price: 11000}
  : product
})

console.log(updatedProducts);

async function getUsers() {
  const response = await fetch("some-url");
  const users = await response.json();

  const names = users.map((user) => user.name);

  console.log(names);
}


import { useEffect } from "react";


useEffect(() => {
  async function getProducts() {
    const response = await fetch("some-url");
    const data = await response.json();

    console.log(data);
  }

  getProducts();
}, [])


return (
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <h3>{product.name}</h3>
        <p>{product.price}</p>
      </div>
    ))}
  </div>
);

import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getProducts() {
      try {
        // 1. fetch
        const response = await fetch("https://dummyjson.com/products")
        // 2. response.ok tekshirish
        if (!response.ok) {
          throw new Error("Failed to load products")
        }
        // 3. response.json()
        const data = await response.json();
        // 4. setProducts()
        setProducts(data.products)
      } catch (error) {
        // 5. setError()
        setError(error.message);
      } finally {
        // 6. loading false
        setLoading(false);
      }
    }

    getProducts();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}

import { useEffect, useState } from "react";

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
}

useEffect(() => {
  async function getProducts() {
    try {
      const response = await fetch("https://dummyjson.com/products")

      if (!response.ok) {
        throw new Error("Failed to load products")
      }

      const data = await response.json()
      setProducts(data.products)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
    
  }

getProducts()
}, [])

if (loading) {
  return <p>Loading</p>
}

if (error) {
  return <p>{error}</p>
}

import { useState } from "react";

const data = {
  products: [
    { id: 1, title: "iPhone", price: 1000 },
    { id: 2, title: "Samsung", price: 800 }
  ]
};

const [products, setProducts] = useState([]);

setProducts(data.products);

import { useState } from "react";

const response = {
  orders: [
    { id: 1, total: 500 },
    { id: 2, total: 800 },
    { id: 3, total: 300 }
  ]
};

const [orders, setOrders] = useState([]);

const newOrders = response.orders.map((item) =>{
  if (item.total > 400) {
    setOrders(item)

  }
  
})


const response = {
  users: [
    { id: 1, name: "Ali", age: 20 },
    { id: 2, name: "Vali", age: 25 },
    { id: 3, name: "Sardor", age: 30 }
  ]
};

const [age, setAges] = useState([])

const onlyAge = response.users.map((item) => {
  return item.age
}) 

setAges(onlyAge)


const users = [
  { id: 1, name: "Ali", age: 17 },
  { id: 2, name: "Vali", age: 25 },
  { id: 3, name: "Sardor", age: 16 },
  { id: 4, name: "Jasur", age: 30 }
];

const [names, setNames] = useState([]);

const adult = users.filter((user) => {
  return user.age >= 18
});

const newNames = adults.map((user) => {
  return user.name
})

setNames(newNames)


const products = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "Samsung", price: 800 },
  { id: 3, name: "Xiaomi", price: 400 },
  { id: 4, name: "Pixel", price: 700 }
];

const [names, setNames] = useState([]);

const newPrice = products.filter((item) => {
  return item.price >= 700
})

const newPrices = newPrice.map((item) =>{
  return item.name
})

setNames(newPrices)

const products = [
  { id: 1, name: "iPhone", price: 1000 },
  { id: 2, name: "Samsung", price: 800 },
  { id: 3, name: "Xiaomi", price: 400 }
];

const newProduct = products.map((item) => {
  return item.price
})

const newPrice = newProduct.reduce((acc, item) => {
  return acc + item;
}, 0);

console.log(newPrice);

const orders = [
  { id: 1, amount: 500 },
  { id: 2, amount: 1200 },
  { id: 3, amount: 300 },
  { id: 4, amount: 1000 }
];

const newOrder = orders.filter((item) =>{
  return item.amount >= 500
})

const newPrice = newOrder.reduce((acc, item) => {
  return acc + item.amount
}, 0)

console.log(newPrice);

const products = [
  { id: 1, name: "iPhone", price: 1000, active: true },
  { id: 2, name: "Samsung", price: 800, active: false },
  { id: 3, name: "Xiaomi", price: 400, active: true },
  { id: 4, name: "Pixel", price: 700, active: true }
];

const activeProducts = products.filter((product) => {
  return product.active === true;
})

const amountPrice = activeProducts.reduce((acc, item) => {
  return acc + item.price
}, 0)

const [product, setProduct] = useState({
  name: "iPhone",
  price: 1000,
  stock: 10
});

const [user, setUser] = useState({
  name: "Ali",
  age: 25,
  active: true
});

setUser((prev) =>({
  ...prev,
  active:false
}));

const [products, setProducts] = useState([
  "iPhone",
  "Samsung"
]);

setProducts((prev) => ([
  ...prev,
  "Xiaomi"
]))

const [products, setProducts] = useState([
  "iPhone",
  "Samsung",
  "Xiaomi"
]);

setProducts((prev) =>
  prev.filter((product) => {
    return product !== "Samsung";
  })
);

const [users, setUsers] = useState([
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sardor" }
]);

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sardor" }
];

setUser((prev) => 
  prev.filter((item) => {
    return item.id === 2
  })
);

const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Vali" },
  { id: 3, name: "Sardor" }
];

setUsers((prev) =>
  prev.filter((item) =>{
    return item.id !== 2
    }
  ))

  const [users, setUsers] = useState([
  { id: 1, name: "Ali", active: true },
  { id: 2, name: "Vali", active: true },
  { id: 3, name: "Sardor", active: true }
]);


setUser((prev) => 
  prev.map((item) => {
    if (item.id === 3) {
      return {
        ...item,
        name: "Sardorbek"
      }
    }
    return item
  })
)

const [products, setProducts] = useState([
  { id: 1, title: "iPhone" },
  { id: 2, title: "Samsung" },
  { id: 3, title: "Xiaomi" }
]);

const handleDelete = (id) => {
  setProducts((prev) => {
     return prev.filter((product) => {
      return product.id !== id;
    })
  })
};


const handleDelete = (id) => {
  setProducts((prev) => {
    return prev.filter((product) => {
      return product.id !== id
    })
  });
};

const [products, setProducts] = useState([
  { id: 1, title: "iPhone" },
  { id: 2, title: "Samsung" },
  { id: 3, title: "Xiaomi" }
]);

const handleDelete = (id) => {
  setProducts((prev) => prev.filter((product) =>{
    return product.id !== id
  })
)
}

{products.map((product) => (
  <div key={product.id}>
    <h2>{product.title}</h2>
    
    <button onClick={() => handleDelete(product.id)}>
      Delete
    </button>
  </div>
))}