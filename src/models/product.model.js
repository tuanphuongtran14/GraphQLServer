module.exports = function(mongoose) {
    // Create product schema
    const Schema = mongoose.Schema;
    const ProductSchema = new Schema({
        id: String,
        name: String,
        slug: String,
        price: Number,
        colors: [{
            color: String,
            images: [{ type: Schema.Types.ObjectId, ref: 'Image' }],
        }],
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
        },
        cpu: String,
        gpu: String,
    });

    // Create product model
    const Product = mongoose.model('Product', ProductSchema);

    return Product;
}