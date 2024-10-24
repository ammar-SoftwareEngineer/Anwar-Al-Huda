// src/components/Products.js


const products = [
    { id: 1, name: 'مبيد حشري 1', price: '100 ر.س', image: 'https://via.placeholder.com/300' },
    { id: 2, name: 'مبيد حشري 2', price: '150 ر.س', image: 'https://via.placeholder.com/300' },
    { id: 3, name: 'مبيد حشري 3', price: '200 ر.س', image: 'https://via.placeholder.com/300' },
];

const Products = () => {
    return (
        <section id="products" className="text-center py-20 bg-gray-100">
            <div className="container mx-auto">
                <h2 className="text-4xl font-bold text-gray-800">منتجاتنا</h2>
                <div className="flex flex-wrap justify-center mt-10">
                    {products.map(product => (
                        <div className="w-full sm:w-1/3 p-4" key={product.id}>
                            <div className="bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300">
                                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-t-lg" />
                                <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
                                <p className="mt-2">{product.price}</p>
                                <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition duration-200">شراء الآن</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;
