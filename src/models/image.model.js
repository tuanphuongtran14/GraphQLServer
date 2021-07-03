module.exports = function(mongoose) {
    // Create image schema
    const Schema = mongoose.Schema;
    const ImageSchema = new Schema({
        id: String,
        filename: String,
        mimetype: String,
        url: String,
        path: String
    });

    // Create image model
    const Image = mongoose.model('Image', ImageSchema);

    return Image;
}