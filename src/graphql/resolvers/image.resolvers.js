const { GraphQLUpload } = require('apollo-server-express');
const { Upload } = require('graphql-upload');
const uploadFiles = require('../../functions/uploadFiles.function');

module.exports = {
    FileUpload: GraphQLUpload,

    Query: {
        images: async (_, args, { Image }, info) => {
            try {
                const images = await Image.find({}).lean();
                return images;
            } catch (error) {
                throw new Error(error.message || 'Some error happen while retrieve images');
            }

        }

    },

    Mutation: {
        uploadImages: async (_, args, { Image }, info) => {
            // Convert promise to files
            const files = await Promise.all(args.files.map(async image => await image.promise));

            try {
                // Upload images to server
                const images = await uploadFiles(files);

                // Create and save image documents
                return await Promise.all(images.map(async image => {
                    // Create new image document 
                    const newImage = new Image({
                        ...image
                    });
                    newImage.id = newImage._id;

                    // Save new image document to database
                    return await newImage.save();
                }));
            } catch (error) {
                throw new Error(error.message || 'Some error happen while uploading images');
            }
        }
    }
}



