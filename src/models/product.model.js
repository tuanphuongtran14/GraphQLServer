module.exports = function(mongoose) {
    // Create product schema
    const Schema = mongoose.Schema;
    const ProductSchema = new Schema({
        name: String,
        slug: String,
        price: Number,
        colors: {
            color: String,
            images: Array,
            quantity: Number,
            sold: Number,
        },
        rating: {
            stars: Number,
            votes: Number
        },
        memory: {
            ram: Number,
            internal: Number,
            hasCardSlot: Boolean,
        },
        dimensions: {
            height: Number,
            width: Number,
            depth: Number,
            weight: Number,
        },
        screen: {
            panel: String,
            resolution: String,
            size: Number,
        }
    });

    // Create product model
    const Product = mongoose.model('Product', ProductSchema);

    return Product;
}