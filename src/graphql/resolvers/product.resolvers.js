const { GraphQLUpload } = require('apollo-server-express');
const slugify = require('slugify')

module.exports =  {
    Query: {
        hello: () => {
            return "Hello world!!!";
        },
        products: async (_, args, { Product }, info) => {
            try {
                const products = await Product.find({}).populate({
                    path: 'colors',
                    populate: {
                        path: 'images',
                        model: 'Image'
                    }
                }).lean();
                
                return products;  
                
            } catch(error) {
                throw error;
            }
        }
    },

    Mutation: {
        createProduct: async (_, args, { Product }, info) => {
            const { input } = args;

            // Create new product
            try {
                if(!input.slug) 
                    input.slug = slugify(input.name, {
                        lower: true,
                        locale: 'vi',
                    });
                
                const newProduct = new Product({
                    ...input
                });
                newProduct.id = newProduct._id;

                await newProduct.save();
                return await Product.populate(newProduct, {
                    path: 'colors',
                    populate: {
                        path: 'images',
                        model: 'Image'
                    }
                })

            } catch(error) {
                console.log(error);
                throw new Error(error.message || 'Some errors happen when creating product');
            }
        },

        editProductById: async (_, args, { Product }, info) => {
            const { id, editContent } = args;

            // Edit product by id
            try {
                const editedProduct = await Product.findByIdAndUpdate(id, { ...editContent }, { new: true });
                return editedProduct;
            } catch (err) {
                console.log(error);
                throw new Error(error.message || `Some errors happen when editing product with id: ${id}`);
            }
        },

        deleteProductById: async (_, args, { Product }, info) => {
            const { id } = args;

            // Edit product by id
            try {
                const deletedProduct = await Product.findByIdAndDelete(id);
                return deletedProduct;
            } catch (err) {
                console.log(error);
                throw new Error(error.message || `Some errors happen when editing product with id: ${id}`);
            }
        }
    }
}
