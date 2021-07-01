module.exports =  {
    Query: {
        hello: () => {
            return "Hello world!!!";
        },
        products: async (_, args, { Product }, info) => {
            try {
                const products = await Product.find({}).lean();
                return products;  
                
            } catch(error) {
                throw error;
            }
        }
    },

    Mutation: {
        createProduct: async (_, args, { Product }, info) => {
            const { input } = args;

            // Add quantity & sold for color versions
            input.colors = input.colors.map(color => {
                return {
                    ...color,
                    quantity: 0,
                    sold: 0
                }
            });

            // Create new product
            try {
                const newProduct = new Product({
                    ...input
                });
    
                await newProduct.save();
                return newProduct;

            } catch(error) {
                throw error;
            }
        }
    }
}
